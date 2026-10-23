// api/contact.js
// Vercel Serverless Function & Node.js HTTP compatible endpoint for Portfolio Contact Form

const RECIPIENT_EMAIL = (process.env.CONTACT_RECIPIENT_EMAIL || 'priyanshukaran25@gmail.com').trim();
const FROM_EMAIL = (process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>').trim();

// In-memory rate limiting map (IP -> timestamps array)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
    if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
        return true;
    }
    recent.push(now);
    rateLimitMap.set(ip, recent);

    // Periodic cleanup of stale IPs
    if (rateLimitMap.size > 500) {
        for (const [key, times] of rateLimitMap.entries()) {
            if (times.every(t => now - t >= RATE_LIMIT_WINDOW_MS)) {
                rateLimitMap.delete(key);
            }
        }
    }
    return false;
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

module.exports = async function handler(req, res) {
    // Standard CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed. Use POST.' }));
        return;
    }

    // Rate limiting by client IP
    const clientIp = (
        (req.headers && req.headers['x-forwarded-for']) ||
        (req.socket && req.socket.remoteAddress) ||
        'unknown'
    ).split(',')[0].trim();

    if (isRateLimited(clientIp)) {
        res.writeHead(429, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            error: 'Too many messages sent. Please wait a minute before trying again.'
        }));
        return;
    }

    try {
        let body = req.body;
        if (typeof body === 'string') {
            try {
                body = JSON.parse(body);
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON payload.' }));
                return;
            }
        }

        // Fallback for runtimes where req.body stream has not been read by framework
        if (!body || typeof body !== 'object') {
            body = await new Promise((resolve) => {
                let raw = '';
                req.on('data', chunk => { raw += chunk; });
                req.on('end', () => {
                    try { resolve(raw ? JSON.parse(raw) : null); } catch (e) { resolve(null); }
                });
                req.on('error', () => resolve(null));
            });
        }

        if (!body || typeof body !== 'object') {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Request body must be a valid JSON object.' }));
            return;
        }

        const { name, email, subject, message, _gotcha } = body;

        // Honeypot spam trap: automated bots that populate hidden inputs are silently absorbed
        if (_gotcha) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: true,
                message: 'Your message has been sent successfully.'
            }));
            return;
        }

        // Server-side validation
        const trimmedName = typeof name === 'string' ? name.trim() : '';
        const trimmedEmail = typeof email === 'string' ? email.trim() : '';
        // Sanitize subject to prevent email header injection (strip CR/LF)
        const trimmedSubject = typeof subject === 'string' ? subject.trim().replace(/[\r\n]+/g, ' ') : '';
        const trimmedMessage = typeof message === 'string' ? message.trim() : '';

        if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Please provide a valid name between 2 and 100 characters.' }));
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!trimmedEmail || !emailPattern.test(trimmedEmail) || trimmedEmail.length > 150) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Please provide a valid email address.' }));
            return;
        }

        if (!trimmedSubject || trimmedSubject.length < 2 || trimmedSubject.length > 200) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Please provide a subject between 2 and 200 characters.' }));
            return;
        }

        if (!trimmedMessage || trimmedMessage.length < 5 || trimmedMessage.length > 5000) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Please provide a message between 5 and 5000 characters.' }));
            return;
        }

        // Verify Resend API Key (trimmed to prevent accidental whitespace/newline issues)
        const apiKey = (process.env.RESEND_API_KEY || '').trim();
        if (!apiKey) {
            res.writeHead(503, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: 'Email service configuration required: RESEND_API_KEY environment variable is not set.'
            }));
            return;
        }

        const isoTimestamp = new Date().toISOString();
        const formattedDate = new Date().toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'long',
            timeZone: 'Asia/Kolkata'
        });

        const safeName = escapeHtml(trimmedName);
        const safeEmail = escapeHtml(trimmedEmail);
        const safeSubject = escapeHtml(trimmedSubject);
        const safeMessage = escapeHtml(trimmedMessage);

        const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Contact: ${safeSubject}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0b10; color: #f3f4f6; margin: 0; padding: 24px; }
        .wrapper { max-width: 600px; margin: 0 auto; background: #12121a; border-radius: 12px; border: 1px solid #27273a; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .header { background: linear-gradient(135deg, #181824 0%, #111118 100%); padding: 24px 28px; border-bottom: 2px solid #f97316; }
        .header-title { margin: 0 0 4px 0; color: #ffffff; font-size: 20px; font-weight: 700; }
        .header-sub { margin: 0; color: #f97316; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .content { padding: 28px; }
        .field { margin-bottom: 20px; }
        .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; font-weight: 700; margin-bottom: 6px; }
        .field-val { font-size: 15px; color: #ffffff; line-height: 1.5; }
        .field-val a { color: #fb923c; text-decoration: none; }
        .message-box { background: #1a1a26; border: 1px solid #2e2e42; border-left: 4px solid #f97316; border-radius: 6px; padding: 18px; margin-top: 8px; font-size: 14px; line-height: 1.7; color: #f3f4f6; white-space: pre-wrap; word-break: break-word; }
        .meta-row { display: flex; flex-wrap: wrap; gap: 16px; padding-top: 16px; border-top: 1px solid #27273a; margin-top: 24px; font-size: 12px; color: #9ca3af; }
        .footer { padding: 16px 28px; background: #0c0c12; border-top: 1px solid #222230; font-size: 12px; color: #9ca3af; text-align: center; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <h1 class="header-title">New Contact Form Message</h1>
            <p class="header-sub">Priyanshu Karan Portfolio</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="field-label">From</div>
                <div class="field-val"><strong>${safeName}</strong> &lt;<a href="mailto:${safeEmail}">${safeEmail}</a>&gt;</div>
            </div>
            <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-val"><strong>${safeSubject}</strong></div>
            </div>
            <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${safeMessage}</div>
            </div>
            <div class="meta-row">
                <div><strong>Received:</strong> ${formattedDate} (${isoTimestamp})</div>
            </div>
        </div>
        <div class="footer">
            Reply directly to this email to respond to <strong>${safeName}</strong> (${safeEmail}).
        </div>
    </div>
</body>
</html>
        `.trim();

        const plainText = [
            `NEW PORTFOLIO CONTACT MESSAGE`,
            `=================================`,
            `From: ${trimmedName} <${trimmedEmail}>`,
            `Subject: ${trimmedSubject}`,
            `Timestamp: ${formattedDate} (${isoTimestamp})`,
            ``,
            `MESSAGE:`,
            trimmedMessage,
            ``,
            `=================================`,
            `Reply directly to this email to contact ${trimmedName} (${trimmedEmail}).`
        ].join('\n');

        // Dispatch via Resend API
        const resendRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: FROM_EMAIL,
                to: [RECIPIENT_EMAIL],
                reply_to: trimmedEmail,
                subject: `[Portfolio Contact] ${trimmedSubject}`,
                html: htmlEmail,
                text: plainText
            })
        });

        const resendJson = await resendRes.json();

        if (!resendRes.ok) {
            console.error('Resend delivery error:', resendJson);
            let errorMessage = (resendJson && resendJson.message) || 'Failed to deliver message via email provider.';
            if (resendRes.status === 403 && errorMessage.toLowerCase().includes('testing emails')) {
                errorMessage = `${errorMessage} (Tip: With onboarding@resend.dev, messages can only be sent to the email address registered with your Resend account. To deliver to other emails, verify a domain in the Resend dashboard).`;
            }
            res.writeHead(resendRes.status || 500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: errorMessage
            }));
            return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            success: true,
            id: resendJson.id,
            message: 'Your message has been sent successfully. Thank you for connecting!'
        }));
    } catch (err) {
        console.error('Unhandled contact endpoint exception:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            error: 'An internal server error occurred while sending your message. Please try again later.'
        }));
    }
};
