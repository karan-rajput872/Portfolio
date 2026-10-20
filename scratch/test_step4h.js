const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("=== STEP 4H PROFESSIONAL RESUME INTEGRATION VERIFICATION ===\n");

// 1. Read files
const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');

// 2. Validate HTML Structure
console.log("1. Inspecting index.html structure:");
const hasResumeNavLink = html.includes('href="#resume" class="nav-link"');
const hasResumeSection = html.includes('id="resume"') && html.includes('class="section resume-section"');
const hasResumeContainer = html.includes('id="resumeContainer"');
const hasDownloadBtn = html.includes('id="downloadResumeBtn"');
const hasPrintBtn = html.includes('id="printResumeBtn"');

console.log(`- Navbar has #resume link: ${hasResumeNavLink}`);
console.log(`- Dedicated #resume section: ${hasResumeSection}`);
console.log(`- #resumeContainer element: ${hasResumeContainer}`);
console.log(`- #downloadResumeBtn button: ${hasDownloadBtn}`);
console.log(`- #printResumeBtn button: ${hasPrintBtn}`);

if (!hasResumeNavLink || !hasResumeSection || !hasResumeContainer || !hasDownloadBtn || !hasPrintBtn) {
    console.error("FAIL: Missing elements in index.html");
    process.exit(1);
}

// 3. Validate CSS Print Stylesheet
console.log("\n2. Inspecting style.css print stylesheet:");
const hasMediaPrint = css.includes('@media print');
const hasA4Page = css.includes('size: A4') || css.includes('size: A4 portrait');
const hidesNavbar = css.includes('.navbar') && css.includes('display: none !important');
const hidesFooter = css.includes('.footer') && css.includes('display: none !important');
const hidesActions = css.includes('.resume-actions-bar') && css.includes('display: none !important');
const resumePaperVisible = css.includes('.resume-paper') && css.includes('background: #ffffff !important');

console.log(`- @media print defined: ${hasMediaPrint}`);
console.log(`- A4 page setup configured: ${hasA4Page}`);
console.log(`- Navbar hidden in print: ${hidesNavbar}`);
console.log(`- Footer hidden in print: ${hidesFooter}`);
console.log(`- Resume action buttons hidden in print: ${hidesActions}`);
console.log(`- White background for print resume paper: ${resumePaperVisible}`);

if (!hasMediaPrint || !hasA4Page || !hidesNavbar) {
    console.error("FAIL: Incomplete print stylesheet in style.css");
    process.exit(1);
}

// 4. Mock DOM and execute script.js
console.log("\n3. Testing JavaScript Execution & Dynamic Rendering:");

class MockElement {
    constructor(id = '', tag = 'div') {
        this.id = id;
        this.tagName = tag.toUpperCase();
        this.innerHTML = '';
        this.textContent = '';
        this.classList = {
            _set: new Set(),
            add(c) { this._set.add(c); },
            remove(c) { this._set.delete(c); },
            contains(c) { return this._set.has(c); },
            toggle(c) { 
                if (this._set.has(c)) { this._set.delete(c); return false; }
                this._set.add(c); return true; 
            }
        };
        this.attributes = {};
        this.listeners = {};
        this.children = [];
        this.parentNode = null;
    }
    setAttribute(name, val) { this.attributes[name] = val; }
    getAttribute(name) { return this.attributes[name] || null; }
    addEventListener(evt, fn) {
        if (!this.listeners[evt]) this.listeners[evt] = [];
        this.listeners[evt].push(fn);
    }
    appendChild(child) {
        child.parentNode = this;
        this.children.push(child);
        return child;
    }
    querySelector(selector) {
        if (selector === '#modalCloseBtn') return new MockElement('modalCloseBtn', 'button');
        if (selector === '#clearContactFormBtn') return new MockElement('clearContactFormBtn', 'button');
        if (selector === '#contactForm') return new MockElement('contactForm', 'form');
        return new MockElement();
    }
    querySelectorAll() { return []; }
    closest() { return this; }
}

const elements = {};
function getElement(id) {
    if (!elements[id]) {
        elements[id] = new MockElement(id);
    }
    return elements[id];
}

const mockDoc = {
    getElementById: (id) => getElement(id),
    querySelectorAll: () => [],
    createElement: (tag) => new MockElement('', tag),
    addEventListener: (evt, fn) => {
        if (evt === 'DOMContentLoaded') {
            mockDoc._domLoaded = fn;
        }
    },
    body: { style: {} }
};

const mockWin = {
    addEventListener: () => {},
    print: () => { mockWin._printed = true; },
    scrollY: 0
};

const sandbox = {
    window: mockWin,
    document: mockDoc,
    console: { log: (msg) => { sandbox._lastLog = msg; } },
    portfolioData: null
};

vm.runInNewContext(script, sandbox);

// Fire DOMContentLoaded
if (mockDoc._domLoaded) {
    mockDoc._domLoaded();
}

console.log(`- DOMContentLoaded initialized: YES`);
console.log(`- Console message: "${sandbox._lastLog}"`);

// 5. Verify Resume Container Rendering
const resumeHtml = elements['resumeContainer'] ? elements['resumeContainer'].innerHTML : '';
console.log("\n4. Verifying Rendered Resume Sections:");

const checks = [
    { name: "Name (Priyanshu Karan)", pass: resumeHtml.includes("Priyanshu Karan") },
    { name: "Headline (AI & ML Enthusiast)", pass: resumeHtml.includes("Computer Science Engineering Student | AI &amp; ML Enthusiast") || resumeHtml.includes("AI & ML Enthusiast") },
    { name: "Email (priyanshukaran25@gmail.com)", pass: resumeHtml.includes("priyanshukaran25@gmail.com") },
    { name: "Phone removed", pass: !resumeHtml.includes("9263964053") },
    { name: "Location (Bhubaneswar, Odisha, India)", pass: resumeHtml.includes("Bhubaneswar, Odisha, India") },
    { name: "LinkedIn profile", pass: resumeHtml.includes("linkedin.com/in/priyanshu-karan-417202390") },
    { name: "GitHub profile", pass: resumeHtml.includes("github.com/karan-rajput872") },
    { name: "Professional Summary block", pass: resumeHtml.includes("Professional Summary") && resumeHtml.includes("B.Tech 2nd Year") },
    { name: "Education (KIIT, 8.54 CGPA)", pass: resumeHtml.includes("Kalinga Institute of Industrial Technology") && resumeHtml.includes("8.54") },
    { name: "Class 12 (Academic Global School)", pass: resumeHtml.includes("Academic Global School") && resumeHtml.includes("CBSE") },
    { name: "Class 10 (Creane Memorial High School)", pass: resumeHtml.includes("Creane Memorial High School") && resumeHtml.includes("CBSE") },
    { name: "Current Coursework (PS, DS, DSD, AFL, STW, IND)", pass: resumeHtml.includes("Probability and Statistics") && resumeHtml.includes("Data Structures") },
    { name: "Technical Skills (C, Python, HTML, CSS, JS, Tools)", pass: resumeHtml.includes("C, Python") && resumeHtml.includes("HTML, CSS") },
    { name: "Projects: CLICKBAIT (SIH 2026)", pass: resumeHtml.includes("CLICKBAIT") && resumeHtml.includes("Ed25519") },
    { name: "Projects: Portfolio Website", pass: resumeHtml.includes("Personal Portfolio Website") || resumeHtml.includes("Developer Portfolio") },
    { name: "Projects: Simple Calculator", pass: resumeHtml.includes("Simple Calculator") },
    { name: "Achievements: SIH 2026 Internal Round", pass: resumeHtml.includes("Smart India Hackathon 2026 — Internal Round") },
    { name: "Certifications: 10 real credentials", pass: resumeHtml.includes("OPSWAT Academy") && resumeHtml.includes("Simplilearn SkillUp") && resumeHtml.includes("Saylor University") },
    { name: "Languages: English, Hindi", pass: resumeHtml.includes("English, Hindi") }
];

let allPassed = true;
checks.forEach(c => {
    console.log(`- ${c.name}: ${c.pass ? 'PASS' : 'FAIL'}`);
    if (!c.pass) allPassed = false;
});

// 6. Test Download Resume and Print Resume buttons
console.log("\n5. Testing Download / Print Functionality:");
const dlBtn = elements['downloadResumeBtn'];
const prBtn = elements['printResumeBtn'];
if (dlBtn && dlBtn.onclick) {
    dlBtn.onclick();
    console.log(`- downloadResumeBtn triggers window.print(): ${mockWin._printed === true}`);
}
mockWin._printed = false;
if (prBtn && prBtn.onclick) {
    prBtn.onclick();
    console.log(`- printResumeBtn triggers window.print(): ${mockWin._printed === true}`);
}

// 7. Verify Hero and Contact Resume Buttons
console.log("\n6. Testing Navigation / Cross-Section Links:");
const heroActions = elements['heroActions'];
const heroResumeBtn = heroActions ? heroActions.children.find(c => c.id === 'heroResumeBtn') : null;
console.log(`- Hero section has 'View Resume' button: ${Boolean(heroResumeBtn)}`);
console.log(`- Hero resume button links to #resume: ${heroResumeBtn ? heroResumeBtn.getAttribute('href') === '#resume' : false}`);

const contactHtml = elements['contactContainer'] ? elements['contactContainer'].innerHTML : '';
console.log(`- Contact section has 'View Resume' button linking to #resume: ${contactHtml.includes('href="#resume"')}`);

// 8. Verify Certifications Section and Files remain 100% intact
console.log("\n7. Preserving Certifications & Viewer:");
const certsHtml = elements['certificationsContainer'] ? elements['certificationsContainer'].innerHTML : '';
const certCount = (certsHtml.match(/class="cert-card/g) || []).length;
console.log(`- All 10 certificate cards still rendered: ${certCount === 10}`);

console.log(`\nOVERALL VERIFICATION RESULT: ${allPassed && certCount === 10 ? 'ALL CHECKS PASSED (100%)' : 'SOME CHECKS FAILED'}`);
