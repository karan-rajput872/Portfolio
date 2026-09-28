const fs = require('fs');
const path = require('path');

// Read script.js
const scriptContent = fs.readFileSync('script.js', 'utf8');

// Extract portfolioData
const vm = require('vm');
const context = {
    document: {
        getElementById: () => null,
        querySelectorAll: () => [],
        addEventListener: () => {}
    },
    window: {
        addEventListener: () => {}
    },
    navigator: {}
};

// Evaluate the portfolioData part
const dataMatch = scriptContent.match(/const portfolioData = (\{[\s\S]*?\n\};)/);
if (!dataMatch) {
    console.error("Could not find portfolioData in script.js");
    process.exit(1);
}

const sandbox = {};
vm.runInNewContext('var portfolioData = ' + dataMatch[1], sandbox);
const certs = sandbox.portfolioData.certifications;

console.log(`Found ${certs.length} certificates in portfolioData.certifications.\n`);

let allFilesExist = true;
certs.forEach((c, idx) => {
    const num = idx + 1;
    const exists = c.certificateFile ? fs.existsSync(c.certificateFile) : false;
    if (!exists && c.certificateFile) allFilesExist = false;
    const ext = c.certificateFile ? path.extname(c.certificateFile).toLowerCase() : 'none';
    const isPDF = ext === '.pdf';
    const isImg = ['.png', '.jpg', '.jpeg', '.webp'].includes(ext);

    console.log(`[${num}] ${c.name}`);
    console.log(`    Issuer: ${c.organization}`);
    console.log(`    File: "${c.certificateFile}"`);
    console.log(`    File Exists on Disk: ${exists ? 'YES' : 'NO'}`);
    console.log(`    Format: ${isPDF ? 'PDF' : isImg ? 'IMAGE (' + ext + ')' : 'UNKNOWN'}`);
    if (c.credentialUrl) {
        console.log(`    Credential URL: ${c.credentialUrl}`);
    }
    console.log('');
});

console.log(`All files exist: ${allFilesExist}`);
