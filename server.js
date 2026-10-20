const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.js': 'text/javascript; charset=UTF-8',
    '.json': 'application/json; charset=UTF-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp'
};

// Load environment variables from .env / .env.local if present
['.env', '.env.local'].forEach(file => {
    const envPath = path.join(__dirname, file);
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        envContent.split(/\r?\n/).forEach(line => {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
                const eqIdx = trimmed.indexOf('=');
                if (eqIdx !== -1) {
                    const key = trimmed.slice(0, eqIdx).trim();
                    let val = trimmed.slice(eqIdx + 1).trim();
                    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                        val = val.slice(1, -1);
                    }
                    if (!process.env[key]) {
                        process.env[key] = val;
                    }
                }
            }
        });
    }
});

let contactHandler = null;
try {
    contactHandler = require('./api/contact.js');
} catch (e) {
    console.warn('api/contact.js handler not loaded:', e.message);
}

const server = http.createServer((req, res) => {
    let cleanUrl = decodeURI(req.url.split('?')[0]);

    // Handle /api/contact endpoints
    if (cleanUrl === '/api/contact' || cleanUrl === '/api/contact.js') {
        if (!contactHandler) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Contact API handler unavailable.' }));
            return;
        }

        let bodyData = '';
        req.on('data', chunk => { bodyData += chunk; });
        req.on('end', async () => {
            try {
                req.body = bodyData ? JSON.parse(bodyData) : {};
            } catch (e) {
                req.body = bodyData;
            }
            await contactHandler(req, res);
        });
        return;
    }

    if (cleanUrl === '/') cleanUrl = '/index.html';

    const safePath = path.normalize(path.join(__dirname, cleanUrl));
    if (!safePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(safePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        const ext = path.extname(safePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache'
        });
        fs.createReadStream(safePath).pipe(res);
    });
});

server.listen(PORT, () => {
    console.log(`\n🚀 Portfolio Dev Server running at: http://localhost:${PORT}/`);
    console.log(`Press Ctrl+C to stop.\n`);
});
