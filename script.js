/**
 * ==========================================================================
 * PRIYANSHU KARAN — PORTFOLIO JAVASCRIPT & CONTENT STORE
 * ==========================================================================
 * This file contains:
 * 1. portfolioData: Centralized data object for easy editing and personalization.
 * 2. Dynamic render functions: Automatically builds website sections from portfolioData.
 * 3. Interactive features: Mobile menu, sticky navbar, modal dialog, and scroll animations.
 * 
 * Beginner-friendly and easy to maintain.
 * ==========================================================================
 */

/* ==========================================================================
   1. CENTRALIZED PORTFOLIO DATA
   ========================================================================== */
const portfolioData = {
    // ----------------------------------------------------------------------
    // PERSONAL INFORMATION
    // ----------------------------------------------------------------------
    personal: {
        name: "Priyanshu Karan",
        role: "Computer Science Engineering Student",
        institution: "KIIT",
        badge: "Student Developer • Tech Enthusiast",
        tagline: "Building my skills in programming, web development, and emerging technologies through continuous learning and hands-on projects.",
        aboutJourney: [
            "I am a B.Tech Computer Science Engineering student at KIIT, currently building a strong foundation in programming, web development, and computer science concepts.",
            "I enjoy learning new technologies, solving programming problems, and turning what I learn into practical projects. I am continuously working on improving my technical skills and exploring emerging areas of technology."
        ],
        // Optional profile image: Place an image in assets/images/profile.jpg and set path here.
        // If left empty (""), the website safely continues working normally with the developer terminal card.
        profileImage: "assets/images/profile.jpg"
    },

    // ----------------------------------------------------------------------
    // DEVELOPER PROFILE (STEP 4I: DEVELOPER.JSON SOURCE OF TRUTH)
    // ----------------------------------------------------------------------
    developer: {
        name: "Priyanshu Karan",
        role: "Computer Science Engineering Student",
        tagline: "Building, Learning & Exploring Technology",
        institution: "Kalinga Institute of Industrial Technology (KIIT)",
        year: "2nd Year",
        interests: [
            "Programming",
            "Web Development",
            "Artificial Intelligence",
            "Emerging Technologies",
            "Cybersecurity"
        ],
        currentStatus: "Open to Opportunities"
    },

    // ----------------------------------------------------------------------
    // PORTFOLIO STATISTICS (PART 2 VERIFIED METRICS)
    // ----------------------------------------------------------------------
    stats: [
        {
            id: "projects",
            label: "PROJECTS BUILT",
            value: 5,
            displayValue: "5",
            description: "Verified academic and hackathon projects"
        },
        {
            id: "certifications",
            label: "CERTIFICATES EARNED",
            value: 14,
            displayValue: "14",
            description: "Official credentials across CS, AI, Cloud & Security"
        },
        {
            id: "deployments",
            label: "LIVE DEPLOYMENTS",
            value: 2,
            displayValue: "2",
            description: "Verified live project demo deployments (FindIt, CLICKBAIT)"
        },
        {
            id: "repositories",
            label: "CODE REPOSITORIES",
            value: 5,
            suffix: "+",
            displayValue: "5+",
            description: "Active repositories and open-source project codebases"
        }
    ],

    // ----------------------------------------------------------------------
    // RESUME CONFIGURATION (STEP 4H PROFESSIONAL RESUME SYSTEM)
    // ----------------------------------------------------------------------
    resume: {
        headline: "Computer Science Engineering Student | AI & ML Enthusiast",
        summary: "Computer Science Engineering undergraduate (B.Tech 2nd Year) at KIIT with a dedicated focus on Artificial Intelligence and Machine Learning. Building a solid foundation in programming, data structures, and web development, complemented by practical hackathon and project exposure including backend cryptography and digital communication verification in Smart India Hackathon 2026 Internal Round. Committed to continuous technical growth demonstrated through certified learning in programming, cloud foundations, and cybersecurity.",
        languages: [
            "English",
            "Hindi"
        ],
        available: true,
        path: "assets/resume/Priyanshu_Karan_Resume.pdf",
        file: "assets/resume/Priyanshu_Karan_Resume.pdf"
    },

    // ----------------------------------------------------------------------
    // CONTACT & SOCIAL INFORMATION (STEP 4E VERIFIED CONTACT DETAILS)
    // ----------------------------------------------------------------------
    contact: {
        email: "priyanshukaran25@gmail.com",
        phone: "9263964053",
        location: "Bhubaneswar, Odisha, India",
        linkedin: "https://www.linkedin.com/in/priyanshu-karan-417202390/",
        github: "https://github.com/karan-rajput872"
    },

    // Centralized backwards-compatibility alias for socialLinks
    get socialLinks() {
        return {
            linkedin: this.contact.linkedin,
            github: this.contact.github,
            email: this.contact.email
        };
    },

    // ----------------------------------------------------------------------
    // CURRENT SKILLS
    // ----------------------------------------------------------------------
    // HOW TO ADD A NEW SKILL:
    // Simply add a string (e.g. "SQL") into the appropriate array below.
    // The website automatically generates the skill badge!
    skills: {
        programming: [
            "C",
            "Python"
        ],
        webDevelopment: [
            "HTML",
            "CSS"
        ],
        tools: [
            "Git",
            "GitHub"
        ]
    },

    // ----------------------------------------------------------------------
    // CURRENTLY LEARNING
    // ----------------------------------------------------------------------
    // Topics and areas you are actively exploring and developing.
    // These appear clearly marked as active learning in About Me and Skills.
    currentlyLearning: [
        "Data Structures & Algorithms",
        "JavaScript",
        "Artificial Intelligence / Machine Learning",
        "Web Development"
    ],

    // ----------------------------------------------------------------------
    // PROJECTS (STEP 4C VERIFIED PROJECTS INTEGRATION)
    // ----------------------------------------------------------------------
    // HOW TO ADD A NEW PROJECT:
    // Simply copy an object and add it to this array:
    // {
    //     title: "Project Name",
    //     category: "Category Name",
    //     status: "Completed" | "In Progress" | "Planned" | "In Development",
    //     description: "Project summary...",
    //     technologies: ["Tech1", "Tech2"],
    //     githubUrl: "", // Add repo URL when available, or leave ""
    //     liveUrl: "",   // Add live demo URL when available, or leave ""
    //     image: "",     // Optional screenshot path, or leave ""
    //     featured: false
    // }
    projects: [
        {
            title: "FindIt — Smart Lost & Found Platform",
            subtitle: "\"Don't lose hope. Find what matters.\"",
            category: "Full Stack & Applied AI",
            context: "Campus Platform",
            status: "Completed",
            statusType: "completed",
            description: "An AI-powered Smart Lost & Found Platform that simplifies reporting, discovering, and recovering lost belongings through intelligent matching, secure ownership verification, and seamless communication.",
            overview: "FindIt is a full-stack Smart Lost & Found Platform designed to simplify reporting, discovering, and recovering lost belongings. It helps users report lost or found items, discover potentially matching reports, submit ownership claims, and coordinate the recovery process.",
            role: "Full Stack & Applied AI Developer",
            roleDetail: "Designed and engineered the complete end-to-end platform architecture: built the high-performance FastAPI backend with SQLAlchemy 2.0 ORM and dual SQLite/PostgreSQL support, developed the modern React and TypeScript frontend, implemented the AI-powered semantic matching engine with multi-attribute similarity analysis and match explanations, integrated Cloudinary media handling and Google OAuth / JWT authentication, and deployed the full system across Vercel and Render.",
            technologies: [
                "React.js",
                "TypeScript",
                "Python",
                "FastAPI",
                "PostgreSQL",
                "SQLAlchemy",
                "SQLite",
                "JWT Authentication",
                "Cloudinary",
                "Google Sign-In",
                "AI-powered semantic matching",
                "Vercel",
                "Render"
            ],
            keyFeatures: [
                "Lost and Found Reporting: Users can report lost and found belongings with descriptions, images, categories, and location details.",
                "Browse, Search and Filtering: Users can browse reported items and search or filter listings based on relevant information.",
                "AI-Powered Semantic Matching: The platform identifies potentially matching lost and found reports using semantic matching and provides match explanations.",
                "Secure Authentication: JWT-based authentication, protected routes, and Google Sign-In.",
                "Ownership Verification and Claims: Users can submit claims using confidential ownership information. Item owners can review and respond to claims.",
                "In-Platform Messaging: Users can communicate through the platform during the recovery process.",
                "Notifications: Users receive notifications about relevant activities and claim updates.",
                "Secure Item Recovery: The platform supports a transparent handover and item recovery process."
            ],
            capabilities: [
                "AI-powered semantic matching with intelligent match explanations",
                "Lost and found item reporting with descriptions, images, categories & locations",
                "Multi-criteria browsing, keyword search, and dynamic category filtering",
                "Confidential ownership verification & protected claim submission",
                "In-platform messaging between finders and claimants",
                "Real-time notifications for item activity and claim updates",
                "Secure item recovery and transparent physical handover tracking",
                "JWT authentication, protected routes & Google Sign-In"
            ],
            securityConcepts: [
                "Salted Bcrypt password hashing & stateless PyJWT Bearer authorization",
                "Google Sign-In OAuth 2.0 integration & protected API endpoints",
                "Confidential claim proof masking (403 Forbidden for third parties)",
                "Cloudinary signed media uploads & MIME type validation",
                "CORS origin restrictions & environment secret isolation"
            ],
            teamContext: "Engineered as a full-stack production platform with automated testing, deployed with a React/TypeScript frontend on Vercel and a FastAPI/PostgreSQL backend on Render.",
            githubUrl: "https://github.com/karan-rajput872/findit-smart-lost-and-found",
            liveUrl: "https://findit-production.vercel.app",
            liveButtonText: "Live Demo",
            githubButtonText: "GitHub Repository",
            image: "",
            featured: true
        },
        {
            title: "CLICKBAIT",
            subtitle: "“Don’t Guess. Verify.”",
            category: "Smart India Hackathon 2026",
            context: "Internal Round",
            status: "Completed",
            statusType: "completed",
            description: "A student-focused digital verification platform designed to help students verify potentially suspicious digital communications — including emails, scholarship notices, examination circulars, fee updates, internship messages, URLs, and raw messages — before trusting them.",
            role: "Backend / Cryptography Security",
            roleDetail: "Contributed to backend verification logic including Ed25519-based cryptographic signing and verification, SHA-256 hashing, canonical payload generation, public-key verification, expiry checking, revocation checking, tamper detection, and zero-PII blockchain registry concepts.",
            technologies: [
                "Ed25519",
                "SHA-256",
                "Node.js",
                "Python",
                "Cryptography",
                "Backend Security"
            ],
            capabilities: [
                "Verify emails & raw messages",
                "Verify URLs and check authenticity",
                "Analyze screenshots & extract evidence",
                "Detect suspicious indicators & alterations",
                "AI-assisted analysis & forensic verification",
                "Explain verification results in understandable language"
            ],
            securityConcepts: [
                "Ed25519 signing and verification",
                "SHA-256 hashing",
                "Canonical payload generation",
                "Public-key verification",
                "Expiry checking",
                "Revocation checking",
                "Tamper detection",
                "Zero-PII blockchain registry concepts"
            ],
            teamContext: "The project involved frontend, backend, OCR, AI-assisted analysis, and forensic verification components. Developed collaboratively for the Smart India Hackathon 2026 Internal Round.",
            githubUrl: "",
            liveUrl: "https://lnkd.in/g23EDkZE",
            image: "",
            featured: true
        },
        {
            title: "Personal Portfolio Website",
            category: "Web Development",
            status: "Completed",
            statusType: "completed",
            description: "A responsive, accessible personal portfolio showcasing academic coursework, verified certifications, projects, and achievements with a centralized Vanilla JavaScript data architecture.",
            role: "Full Stack (Solo Project)",
            roleDetail: "Built responsive design, dynamic data-driven rendering for all sections including 10 certificates, centralized content architecture, accessible modal viewers, and print-ready resume stylesheet.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: false,
            isCurrentSite: true
        },
        {
            title: "Simple Calculator",
            category: "C Programming",
            status: "Completed",
            statusType: "completed",
            description: "A console-based calculator program built in C to perform fundamental arithmetic calculations with structured logic and user input handling.",
            role: "Developer (Academic Project)",
            roleDetail: "Implemented core arithmetic functions, conditional execution routines, and terminal interface.",
            technologies: [
                "C"
            ],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: false
        },
        {
            title: "Student Result System",
            category: "C Programming",
            status: "Completed",
            statusType: "completed",
            description: "A structured C programming project for managing, calculating, and presenting student academic performance and grade distributions.",
            role: "Developer (Academic Project)",
            roleDetail: "Implemented structured record keeping, grade calculation routines, and formatted tabular console output.",
            technologies: [
                "C"
            ],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: false
        }
    ],

    // ----------------------------------------------------------------------
    // CERTIFICATIONS (ALL 14 VERIFIED CERTIFICATES - CONNECTED TO REAL FILES)
    // ----------------------------------------------------------------------
    certifications: [
        {
            name: "Introduction to Critical Infrastructure Protection",
            organization: "OPSWAT Academy",
            type: "Introduction to CIP Program",
            issueDate: "September 18, 2026",
            expirationDate: "September 17, 2027",
            credentialId: "urD6T7D062w",
            cpeCredits: "0.50",
            credentialUrl: "https://learn.opswatacademy.com/certificate/urD6T7D062w",
            certificateFile: "assets/certificates/Introduction To CIP Certificate.png",
            description: "Graduate of the Introduction to CIP Program covering cybersecurity frameworks, operational security principles, and protection of critical infrastructure systems."
        },
        {
            name: "Roadmap to Become a Data Scientist at Amazon",
            organization: "Coding Ninjas",
            type: "Certificate of Participation",
            issueDate: "", // Date not provided on certificate
            credentialId: "563345",
            idLabel: "Certificate Number",
            credentialUrl: "",
            certificateFile: "assets/certificates/Coding Ninja Certificate.jpg",
            description: "Certificate of Participation for attending the career guidance and technical roadmap session on data science engineering paths and preparation strategies."
        },
        {
            name: "CipherQuest",
            organization: "Coding Ninjas — KIIT Chapter",
            type: "Certificate of Participation",
            issueDate: "", // Date not provided on certificate
            credentialId: "", // ID not provided on certificate
            credentialUrl: "",
            certificateFile: "assets/certificates/CipherQuest_PRIYANSHU KARAN     .pdf",
            description: "Certificate of participation in the CipherQuest event organized by Coding Ninjas : KIIT Chapter."
        },
        {
            name: "C Programming Basics",
            organization: "Simplilearn SkillUp",
            type: "Certificate of Completion",
            issueDate: "September 18, 2026",
            credentialId: "10751843",
            idLabel: "Certificate Code",
            credentialUrl: "",
            certificateFile: "assets/certificates/Skill Up Certificate.pdf",
            description: "Foundational principles of procedural programming, variables, operators, memory handling, and logic building in C."
        },
        {
            name: "CS105: Introduction to Python",
            organization: "Saylor University",
            type: "Certificate of Achievement",
            issueDate: "September 21, 2026",
            credentialId: "0943129131PK",
            additionalInfo: "41 Hours | 76.00% Grade",
            credentialUrl: "",
            certificateFile: "assets/certificates/Introduction to Python.pdf",
            description: "Core syntax, data types, control flow structures, and object-oriented programming concepts in Python."
        },
        {
            name: "Making Accessible Designs",
            organization: "Adobe Training Program / Ladli Foundation Trust",
            type: "Certificate of Completion",
            issueDate: "September 22, 2026",
            credentialId: "311249718427",
            idLabel: "UDIN",
            credentialUrl: "",
            certificateFile: "assets/certificates/Certificate for Making Accessible Design.pdf",
            description: "Adobe Training Program under the Skill for All program, an initiative by Ladli Foundation Trust in partnership with Adobe Digital Academy."
        },
        {
            name: "Social Media Content and Strategy",
            organization: "Adobe Training Program / Ladli Foundation Trust",
            type: "Certificate of Completion",
            issueDate: "September 22, 2026",
            credentialId: "859236139143",
            idLabel: "UDIN",
            credentialUrl: "",
            certificateFile: "assets/certificates/Certificate for Social Media Content and Stratergy.pdf",
            description: "Adobe Training Program under the Skill for All program, an initiative by Ladli Foundation Trust in partnership with Adobe Digital Academy."
        },
        {
            name: "AWS Certified Developer - Associate Exam Prep Plan — Completion Certificate",
            organization: "AWS Training & Certification",
            type: "Completion Certificate",
            issueDate: "September 23, 2026",
            credentialId: "",
            credentialUrl: "",
            certificateFile: "assets/certificates/AWS Training Certificate.pdf",
            description: "Completion certificate for Exam Prep Plan Overview: AWS Certified Developer - Associate (DVA-C02 - English). (Exam preparation plan completion, not certified status)."
        },
        {
            name: "AWS Certified Data Engineer - Associate Exam Prep Plan — Completion Certificate",
            organization: "AWS Training & Certification",
            type: "Completion Certificate",
            issueDate: "September 23, 2026",
            credentialId: "",
            credentialUrl: "",
            certificateFile: "assets/certificates/AWS Training Certificate 2.pdf",
            description: "Completion certificate for Exam Prep Plan Overview: AWS Certified Data Engineer - Associate (DEA-C01 - English). (Exam preparation plan completion, not certified status)."
        },
        {
            name: "TCS iON Career Edge - Young Professional",
            organization: "Tata Consultancy Services (TCS iON)",
            type: "Certificate of Achievement",
            startDate: "August 29, 2026",
            endDate: "September 16, 2026",
            issueDate: "September 16, 2026",
            credentialId: "272697-33652636-1016",
            credentialUrl: "",
            certificateFile: "assets/certificates/Priyanshu_Karan_TCS_Certificate.pdf",
            description: "Comprehensive professional program covering business communication, workplace thinking, IT foundational skills, business etiquette, and overview of AI."
        },
        {
            name: "Adobe Express Crash Course",
            title: "Adobe Express Crash Course",
            organization: "",
            issuer: "",
            type: "Certificate of Completion",
            issueDate: "28 September 2026",
            date: "28 September 2026",
            credentialId: "488148964977",
            idLabel: "UDIN",
            credentialUrl: "",
            certificateFile: "assets/certificates/Adobe Express Crash Course_Certificate.pdf",
            file: "assets/certificates/Adobe Express Crash Course_Certificate.pdf",
            description: "Completed the Adobe Express Crash Course on 28 September 2026.",
            skills: [
                "Adobe Express"
            ]
        },
        {
            name: "AWS Certified AI Practitioner — Exam Prep Plan",
            title: "AWS Certified AI Practitioner — Exam Prep Plan",
            organization: "AWS Training & Certification",
            issuer: "AWS Training & Certification",
            type: "Completion Certificate",
            issueDate: "September 28, 2026",
            date: "September 28, 2026",
            credentialId: "",
            credentialUrl: "",
            certificateFile: "assets/certificates/AWS Certified_Certificate.pdf",
            file: "assets/certificates/AWS Certified_Certificate.pdf",
            description: "Completed the Exam Prep Plan Overview for AWS Certified AI Practitioner (AIF-C01 - English). (Exam preparation plan completion, not certified status).",
            skills: [
                "Artificial Intelligence",
                "AWS"
            ]
        },
        {
            name: "Basics of Data Structures and Algorithms",
            title: "Basics of Data Structures and Algorithms",
            organization: "Simplilearn SkillUp",
            issuer: "Simplilearn SkillUp",
            recipient: "Priyanshu Karan",
            type: "Certificate of Completion",
            issueDate: "7 October 2026",
            date: "7 October 2026",
            credentialId: "10854217",
            idLabel: "Certificate Code",
            credentialUrl: "",
            certificateFile: "assets/certificates/basics-of-data-structures-and-algorithms.pdf",
            file: "assets/certificates/basics-of-data-structures-and-algorithms.pdf",
            description: "Fundamental concepts of data structures and algorithms including linear and non-linear data structures, searching and sorting techniques, and algorithmic problem-solving.",
            skills: [
                "Data Structures",
                "Algorithms",
                "Problem Solving"
            ]
        },
        {
            name: "SkillQuest - Generative AI Literacy",
            title: "SkillQuest - Generative AI Literacy",
            organization: "Simplilearn SkillUp",
            issuer: "Simplilearn SkillUp",
            recipient: "Priyanshu Karan",
            type: "Certificate of Accomplishment",
            issueDate: "20 October 2026",
            date: "20 October 2026",
            credentialId: "23301860",
            idLabel: "Certificate Number",
            credentialUrl: "",
            certificateFile: "assets/certificates/skillquest-generative-ai-literacy.pdf",
            file: "assets/certificates/skillquest-generative-ai-literacy.pdf",
            description: "Comprehensive assessment evaluating practical understanding of generative AI fundamentals, large language models, prompt engineering, and ethical AI applications.",
            skills: [
                "Generative AI",
                "Prompt Engineering",
                "Artificial Intelligence"
            ]
        }
    ],

    // ----------------------------------------------------------------------
    // EDUCATION (STEP 4D VERIFIED EDUCATION INTEGRATION)
    // ----------------------------------------------------------------------
    education: [
        {
            level: "B.Tech",
            degree: "Bachelor of Technology",
            field: "Computer Science Engineering",
            specialization: "Artificial Intelligence & Machine Learning (AI & ML)",
            institution: "Kalinga Institute of Industrial Technology (KIIT)",
            status: "Currently Pursuing",
            academicYear: "2nd Year",
            startYear: "2025",
            expectedGraduation: "2029",
            coursework: [
                "Probability and Statistics (PS)",
                "Data Structures (DS)",
                "Digital System Design (DSD)",
                "Automata and Formal Languages (AFL)",
                "Scientific and Technical Writing (STW)",
                "Industrial 4.0 (IND)"
            ]
        },
        {
            level: "Class 12",
            school: "Academic Global School",
            board: "CBSE",
            location: "Gorakhpur, Uttar Pradesh"
        },
        {
            level: "Class 10",
            school: "Creane Memorial High School",
            board: "CBSE",
            location: "Gaya, Bihar"
        }
    ],

    // ----------------------------------------------------------------------
    // ACHIEVEMENTS & ACTIVITIES (FINAL VERIFIED SIH 2026 INTEGRATION)
    // ----------------------------------------------------------------------
    achievements: [
        {
            title: "Smart India Hackathon 2026 — Internal Round",
            project: "CLICKBAIT",
            type: "Hackathon / Activity",
            status: "Internal Round Completed",
            year: "2026",
            role: "Backend / Cryptography Security",
            description: "Participated in the Smart India Hackathon 2026 Internal Round as part of the team behind CLICKBAIT, a student-focused digital verification platform for analyzing and verifying potentially suspicious digital communications.",
            tags: [
                "Backend Security",
                "Cryptographic Verification",
                "Ed25519",
                "SHA-256",
                "Integrity Verification",
                "Tamper Detection",
                "Expiry & Revocation Checks",
                "Security-focused Backend"
            ],
            link: "https://lnkd.in/g23EDkZE"
        }
    ]
};

/* ==========================================================================
   2. DYNAMIC RENDERING FUNCTIONS
   ========================================================================== */

/**
 * Render Enhanced Hero Section (Step 4I: Home Page / Hero Enhancement)
 * Source of truth: developer.json (loaded dynamically with portfolioData fallback)
 */
function renderHero() {
    const dev = portfolioData.developer || {
        name: "Priyanshu Karan",
        role: "Computer Science Engineering Student",
        tagline: "Building, Learning & Exploring Technology",
        institution: "Kalinga Institute of Industrial Technology (KIIT)",
        year: "2nd Year",
        interests: [
            "Programming",
            "Web Development",
            "Artificial Intelligence",
            "Emerging Technologies",
            "Cybersecurity"
        ],
        currentStatus: "Learning by Building"
    };

    // Hero Text Elements
    const heroName = document.getElementById('heroName');
    const heroFirstName = document.getElementById('heroFirstName');
    const heroLastName = document.getElementById('heroLastName');
    const heroRole = document.getElementById('heroRole');
    const heroTagline = document.getElementById('heroTagline');
    const heroStatusText = document.getElementById('heroStatusText');
    const heroMetaText = document.getElementById('heroMetaText');
    const heroInterests = document.getElementById('heroInterests');
    const heroTerminalBody = document.getElementById('heroTerminalBody');

    const fullName = dev.name || "Priyanshu Karan";
    const nameParts = fullName.trim().split(/\s+/);
    if (heroFirstName && heroLastName) {
        heroFirstName.textContent = nameParts[0] || "Priyanshu";
        heroLastName.textContent = nameParts.slice(1).join(' ') || "Karan";
    } else if (heroName) {
        heroName.textContent = fullName;
    }

    if (heroRole) heroRole.textContent = dev.role || "Computer Science Engineering Student";
    if (heroTagline) {
        heroTagline.textContent = "Computer Science Engineering student at KIIT, passionate about programming, problem-solving, web development, and artificial intelligence. Learning by building projects and exploring emerging technologies.";
    }
    if (heroStatusText) heroStatusText.textContent = "Open to Opportunities";
    if (heroMetaText) {
        const instShort = dev.institution && dev.institution.includes('KIIT') ? 'KIIT' : (dev.institution || 'KIIT');
        heroMetaText.textContent = `${dev.year || '2nd Year'} • ${instShort}`;
    }

    // Render Interests with staggered reveal delays & data attributes
    if (heroInterests && dev.interests && Array.isArray(dev.interests) && dev.interests.length > 0) {
        heroInterests.innerHTML = dev.interests
            .map((interest, idx) => {
                const escaped = escapeHTML(interest);
                return `<span class="hero-interest-pill" style="--pill-delay: ${(idx * 0.12).toFixed(2)}s" data-interest="${escaped}">${escaped}</span>`;
            })
            .join('');
    }
}

/**
 * Render Key Statistics Counter Section (Part 2)
 */
function renderStats() {
    const container = document.getElementById('statsGrid');
    if (!container) return;

    const projectCount = (portfolioData.projects || []).length || 5;
    const certCount = (portfolioData.certifications || []).length || 14;
    const liveDeployments = (portfolioData.projects || []).filter(p => p.liveUrl && p.liveUrl.trim() !== '' && p.liveUrl !== '#').length || 2;
    const repoCount = 5;

    const statsList = portfolioData.stats || [
        { label: "PROJECTS BUILT", value: projectCount, displayValue: String(projectCount) },
        { label: "CERTIFICATES EARNED", value: certCount, displayValue: String(certCount) },
        { label: "LIVE DEPLOYMENTS", value: liveDeployments, displayValue: String(liveDeployments) },
        { label: "CODE REPOSITORIES", value: repoCount, suffix: "+", displayValue: `${repoCount}+` }
    ];

    container.innerHTML = statsList.map(s => `
        <div class="stat-col" data-target="${s.value}" ${s.suffix ? `data-suffix="${s.suffix}"` : ''} ${s.decimals ? `data-decimals="${s.decimals}"` : ''}>
            <div class="stat-number-box">
                <span class="stat-number" data-value="${s.value}">${s.displayValue}</span>
            </div>
            <span class="stat-label">${escapeHTML(s.label)}</span>
        </div>
    `).join('');
}

/**
 * Animate Statistics Counter Smoothly on Viewport Enter
 */
let statsAnimated = false;
function initStatsAnimation() {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const statNumbers = statsSection.querySelectorAll('.stat-number');
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
        statNumbers.forEach(el => {
            const val = el.getAttribute('data-value');
            if (val) el.textContent = val;
        });
        return;
    }

    if (typeof IntersectionObserver !== 'function') {
        return; // Fallback to initial display values
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                observer.disconnect();

                statNumbers.forEach(el => {
                    const target = parseFloat(el.getAttribute('data-value') || el.textContent) || 0;
                    const parentCol = el.closest('.stat-col');
                    const decimals = parentCol && parentCol.hasAttribute('data-decimals') 
                        ? parseInt(parentCol.getAttribute('data-decimals'), 10) 
                        : 0;
                    const suffix = parentCol && parentCol.hasAttribute('data-suffix')
                        ? parentCol.getAttribute('data-suffix')
                        : '';

                    const duration = 1400; // ms
                    const startTime = performance.now();

                    function update(now) {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease-out cubic curve: 1 - (1 - p)^3
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = easeOut * target;
                        const formatted = (decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString()) + suffix;

                        el.textContent = formatted;

                        if (progress < 1) {
                            requestAnimationFrame(update);
                        } else {
                            el.textContent = (decimals > 0 ? target.toFixed(decimals) : target.toString()) + suffix;
                        }
                    }

                    requestAnimationFrame(update);
                });
            }
        });
    }, { threshold: 0.25 });

    observer.observe(statsSection);
}

/**
 * Dynamic Typewriter & Interactive Interest Reveal in Hero
 */
let heroRevealInitialized = false;
function initHeroReveal() {
    if (heroRevealInitialized) return;
    const wordElem = document.getElementById('heroDynamicWord');
    if (!wordElem) return;

    heroRevealInitialized = true;
    const dev = portfolioData.developer || {};
    const words = (dev.interests && Array.isArray(dev.interests) && dev.interests.length > 0)
        ? dev.interests
        : ["Programming", "Web Development", "Artificial Intelligence", "Emerging Technologies", "Cybersecurity"];

    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function tick() {
        const currentWord = words[wordIdx];

        if (isDeleting) {
            wordElem.textContent = currentWord.substring(0, charIdx - 1);
            charIdx--;
            typingSpeed = 40;
        } else {
            wordElem.textContent = currentWord.substring(0, charIdx + 1);
            charIdx++;
            typingSpeed = 90;
        }

        // Highlight matching pill
        const pills = document.querySelectorAll('.hero-interest-pill');
        pills.forEach(pill => {
            if (pill.getAttribute('data-interest') === currentWord) {
                pill.classList.add('active-highlight');
            } else {
                pill.classList.remove('active-highlight');
            }
        });

        if (!isDeleting && charIdx === currentWord.length) {
            typingSpeed = 2200; // Pause when complete
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % words.length;
            typingSpeed = 400; // Pause before typing next
        }

        setTimeout(tick, typingSpeed);
    }

    tick();

    // Click on any pill to immediately jump to it
    document.addEventListener('click', (e) => {
        const pill = e.target.closest('.hero-interest-pill');
        if (pill) {
            const val = pill.getAttribute('data-interest');
            const foundIdx = words.indexOf(val);
            if (foundIdx !== -1) {
                wordIdx = foundIdx;
                charIdx = val.length;
                isDeleting = false;
                wordElem.textContent = val;
                const allPills = document.querySelectorAll('.hero-interest-pill');
                allPills.forEach(p => p.classList.toggle('active-highlight', p === pill));
            }
        }
    });
}

/**
 * Render About Section Details
 */
function renderAbout() {
    const { personal } = portfolioData;
    const journeyContainer = document.getElementById('aboutJourneyContainer');
    if (journeyContainer && personal.aboutJourney && personal.aboutJourney.length > 0) {
        journeyContainer.innerHTML = personal.aboutJourney
            .map(para => `<p class="about-text">${para}</p>`)
            .join('');
    }
}

/**
 * Asynchronously load developer.json as primary source of truth
 */
async function loadDeveloperData() {
    try {
        const response = await fetch('developer.json');
        if (response.ok) {
            const data = await response.json();
            portfolioData.developer = Object.assign({}, portfolioData.developer, data);
            renderHero();
        }
    } catch (e) {
        // Fallback already rendered synchronously from portfolioData.developer
    }
}

/**
 * Render "Currently Learning" list in About section
 */
function renderCurrentlyLearning() {
    const container = document.getElementById('currentlyLearningContainer');
    if (!container) return;

    if (!portfolioData.currentlyLearning || portfolioData.currentlyLearning.length === 0) {
        container.innerHTML = `<li class="learning-item"><div><strong>Continuous Learning</strong><span class="subtext">Actively exploring new technical concepts</span></div></li>`;
        return;
    }

    container.innerHTML = portfolioData.currentlyLearning.map(item => {
        const title = typeof item === 'string' ? item : item.title;
        const detail = typeof item === 'object' && item.detail ? item.detail : 'Active learning & practical development';
        return `
            <li class="learning-item">
                <span class="bullet" aria-hidden="true">&#9658;</span>
                <div>
                    <strong>${title}</strong>
                    <span class="subtext">${detail}</span>
                </div>
            </li>
        `;
    }).join('');
}

/**
 * Render Technical Skills Section
 */
function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container) return;

    if (!portfolioData.skills || Object.keys(portfolioData.skills).length === 0) {
        container.innerHTML = `<div class="empty-state">No skills listed yet. Add skills to <code>portfolioData.skills</code> in <code>script.js</code>.</div>`;
        return;
    }

    // Category display metadata (icons & formatted titles)
    const categoryConfig = {
        programming: {
            title: "Programming",
            icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
        },
        webDevelopment: {
            title: "Web Development",
            icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
        },
        tools: {
            title: "Tools & Platforms",
            icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
        }
    };

    // Build skill category cards
    let categoriesHtml = Object.entries(portfolioData.skills).map(([key, items]) => {
        const config = categoryConfig[key] || {
            title: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
            icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
        };

        const badgesHtml = items.map(skill => {
            const skillName = typeof skill === 'string' ? skill : skill.name;
            const skillType = typeof skill === 'object' && skill.type ? skill.type : '';
            return `
                <div class="skill-badge">
                    <span class="skill-name">${skillName}</span>
                    ${skillType ? `<span class="skill-type">${skillType}</span>` : ''}
                </div>
            `;
        }).join('');

        return `
            <div class="skill-category-card reveal">
                <div class="category-header">
                    <div class="category-icon" aria-hidden="true">
                        ${config.icon}
                    </div>
                    <h3>${config.title}</h3>
                </div>
                <div class="skill-tags">
                    ${badgesHtml}
                </div>
            </div>
        `;
    }).join('');

    // Dedicated "Currently Learning" card in Skills section
    if (portfolioData.currentlyLearning && portfolioData.currentlyLearning.length > 0) {
        const learningBadgesHtml = portfolioData.currentlyLearning.map(item => {
            const name = typeof item === 'string' ? item : item.title;
            return `
                <div class="skill-badge learning">
                    <span class="skill-name">${name}</span>
                    <span class="skill-type">Exploring / In Progress</span>
                </div>
            `;
        }).join('');

        categoriesHtml += `
            <div class="skill-category-card reveal">
                <div class="category-header">
                    <div class="category-icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <h3>Currently Learning</h3>
                </div>
                <div class="skill-tags">
                    ${learningBadgesHtml}
                </div>
            </div>
        `;
    }

    container.innerHTML = categoriesHtml;
}

/**
 * Render Featured Projects Section (Step 4K Enhanced Projects & Achievements)
 */
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    if (!portfolioData.projects || portfolioData.projects.length === 0) {
        container.innerHTML = `<div class="empty-state">No projects added yet. Add projects to <code>portfolioData.projects</code> in <code>script.js</code>.</div>`;
        return;
    }

    // Sort: featured projects first
    const sorted = [...portfolioData.projects].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });

    container.innerHTML = sorted.map((project, index) => {
        // Status badge class
        let statusClass = project.statusType;
        if (!statusClass) {
            const s = (project.status || '').toLowerCase();
            if (s.includes('complete')) statusClass = 'completed';
            else if (s.includes('progress')) statusClass = 'in-progress';
            else if (s.includes('plan')) statusClass = 'planned';
            else statusClass = 'development';
        }

        // Tech stack tags
        const techTagsHtml = (project.technologies || [])
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');

        // Featured label
        const featuredLabel = project.featured ? `<span class="project-featured-label">Featured Project</span>` : '';

        // Subtitle (e.g. "Don't Guess. Verify.")
        const subtitleHtml = project.subtitle
            ? `<p class="project-subtitle">${escapeHTML(project.subtitle)}</p>`
            : '';

        // Context line (e.g. "Internal Round")
        const contextHtml = project.context
            ? `<span class="project-context">${escapeHTML(project.context)}</span>`
            : '';

        // Role badge area (compact version)
        const roleBadgeHtml = project.role
            ? `<div class="project-role-badge"><span class="project-role-label">My Role:</span> <span class="project-role-value">${escapeHTML(project.role)}</span></div>`
            : '';

        // Action buttons handling (only rendered when real URLs exist)
        const buttons = [];

        if (project.liveUrl && project.liveUrl.trim() !== '') {
            const liveLabel = project.liveButtonText || 'Live Demo';
            buttons.push(`
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" aria-label="${liveLabel} for ${escapeHTML(project.title)}">
                    <span>${liveLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            `);
        }

        if (project.githubUrl && project.githubUrl.trim() !== '') {
            const githubLabel = project.githubButtonText || 'GitHub Repository';
            buttons.push(`
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="${githubLabel} for ${escapeHTML(project.title)}">
                    <span>${githubLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            `);
        }

        // View Details button (only when roleDetail or additional info exists)
        if (project.roleDetail || (project.subtitle && project.featured) || project.capabilities || project.keyFeatures) {
            buttons.push(`
                <button type="button" class="btn btn-sm btn-outline project-details-btn" data-project-index="${index}" data-project-title="${escapeHTML(project.title)}" aria-label="View details: ${escapeHTML(project.title)}">
                    <span>View Details</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </button>
            `);
        }

        if (project.isCurrentSite && !project.liveUrl && !project.githubUrl) {
            buttons.push(`
                <span class="project-current-tag">
                    <span class="pulse-dot" style="width:6px;height:6px;"></span>
                    <span>Current Portfolio Website</span>
                </span>
            `);
        }

        const actionsHtml = buttons.length > 0 ? `<div class="project-footer">${buttons.join('')}</div>` : '';

        // Card class: featured projects get special styling
        const cardClass = project.featured ? 'project-card project-card-featured reveal' : 'project-card reveal';

        return `
            <article class="${cardClass}">
                <div>
                    ${featuredLabel}
                    <div class="project-header">
                        <div class="project-header-left">
                            <span class="project-category">${escapeHTML(project.category || 'Software')}</span>
                            ${contextHtml}
                        </div>
                        <span class="project-status ${statusClass}">${escapeHTML(project.status)}</span>
                    </div>
                    <h3 class="project-title">${escapeHTML(project.title)}</h3>
                    ${subtitleHtml}
                    <p class="project-desc">${escapeHTML(project.description)}</p>
                    ${roleBadgeHtml}
                </div>
                <div class="project-bottom">
                    <div class="project-tech-stack">
                        ${techTagsHtml}
                    </div>
                    ${actionsHtml}
                </div>
            </article>
        `;
    }).join('');
}

/**
 * Render Certifications Section (All 14 Real Certificates)
 */
function renderCertifications() {
    const container = document.getElementById('certificationsContainer');
    if (!container) return;

    if (!portfolioData.certifications || portfolioData.certifications.length === 0) {
        container.innerHTML = `<div class="empty-state">No certifications listed yet. Add certificates to <code>portfolioData.certifications</code> in <code>script.js</code>.</div>`;
        return;
    }

    container.innerHTML = portfolioData.certifications.map((cert, index) => {
        // Build metadata rows (only render non-empty fields to avoid blank placeholders)
        const metaRows = [];

        if (cert.recipient && cert.recipient.trim() !== '') {
            metaRows.push(`
                <div class="cert-meta-row">
                    <span class="cert-meta-label">Recipient:</span>
                    <span class="cert-meta-val">${escapeHTML(cert.recipient)}</span>
                </div>
            `);
        }

        if (cert.issueDate && cert.issueDate.trim() !== '') {
            metaRows.push(`
                <div class="cert-meta-row">
                    <span class="cert-meta-label">Date:</span>
                    <span class="cert-meta-val">${cert.issueDate}</span>
                </div>
            `);
        }

        if (cert.startDate && cert.endDate) {
            metaRows.push(`
                <div class="cert-meta-row">
                    <span class="cert-meta-label">Duration:</span>
                    <span class="cert-meta-val">${cert.startDate} – ${cert.endDate}</span>
                </div>
            `);
        }

        if (cert.expirationDate && cert.expirationDate.trim() !== '') {
            metaRows.push(`
                <div class="cert-meta-row">
                    <span class="cert-meta-label">Expires:</span>
                    <span class="cert-meta-val">${cert.expirationDate}</span>
                </div>
            `);
        }

        if (cert.credentialId && cert.credentialId.trim() !== '') {
            const label = cert.idLabel || 'Credential ID';
            metaRows.push(`
                <div class="cert-meta-row">
                    <span class="cert-meta-label">${label}:</span>
                    <span class="cert-meta-val">${cert.credentialId}</span>
                </div>
            `);
        }

        if (cert.cpeCredits && cert.cpeCredits.trim() !== '') {
            metaRows.push(`
                <div class="cert-meta-row">
                    <span class="cert-meta-label">CPE Credits:</span>
                    <span class="cert-meta-val">${cert.cpeCredits}</span>
                </div>
            `);
        }

        const metaHtml = metaRows.length > 0 ? `
            <div class="cert-meta">
                ${metaRows.join('')}
            </div>
        ` : '';

        // Action button logic:
        // 1. "View Certificate": opens the modal viewer displaying the actual certificate
        // 2. "Verify Credential": opens the verified external credential link if available (e.g. OPSWAT)
        // 3. Fallback: if no certificateFile exists, displays "Certificate file unavailable"
        const actionBtns = [];

        if (cert.certificateFile && cert.certificateFile.trim() !== '') {
            actionBtns.push(`
                <button class="btn btn-outline btn-sm cert-btn" data-cert-index="${index}" aria-label="View certificate: ${cert.name}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <span>View Certificate</span>
                </button>
            `);
        }

        if (cert.credentialUrl && cert.credentialUrl.trim() !== '') {
            actionBtns.push(`
                <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm cert-verify-btn" aria-label="Verify credential: ${cert.name}">
                    <span>Verify Credential</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            `);
        }

        if (!cert.certificateFile || cert.certificateFile.trim() === '') {
            if (!cert.credentialUrl) {
                actionBtns.push(`
                    <span class="cert-unavailable-badge">Certificate file unavailable</span>
                `);
            }
        }

        return `
            <div class="cert-card reveal">
                <div>
                    <div class="cert-header">
                        ${cert.type ? `<span class="cert-type-tag">${cert.type}</span>` : '<span></span>'}
                        <div class="cert-badge-icon" aria-hidden="true">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                        </div>
                    </div>
                    <div class="cert-content">
                        ${cert.organization ? `<span class="cert-issuer">${cert.organization}</span>` : ''}
                        <h3 class="cert-title">${cert.name}</h3>
                        <p class="cert-desc">${cert.description}</p>
                        ${metaHtml}
                    </div>
                </div>
                <div class="cert-action">
                    ${actionBtns.join('')}
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Render Education Section (Step 4D Verified Education Integration)
 */
function renderEducation() {
    const container = document.getElementById('educationContainer');
    if (!container) return;

    if (!portfolioData.education || portfolioData.education.length === 0) {
        container.innerHTML = `<div class="empty-state">No education records added yet.</div>`;
        return;
    }

    container.innerHTML = portfolioData.education.map(edu => {
        // Higher Education (B.Tech)
        if (edu.degree || edu.level === 'B.Tech') {
            const isCurrent = edu.status === "Currently Pursuing";
            const featuredClass = isCurrent ? ' featured' : '';
            const currentItemClass = isCurrent ? ' current' : '';

            // Format degree heading e.g. "Bachelor of Technology (B.Tech)"
            const degreeHeading = (edu.degree && edu.level && !edu.degree.includes(edu.level))
                ? `${edu.degree} (${edu.level})`
                : (edu.degree || edu.level);

            // Duration: "2025 – 2029"
            const duration = (edu.startYear && edu.expectedGraduation)
                ? `${edu.startYear} – ${edu.expectedGraduation}`
                : (edu.period || '');

            // Status: "2nd Year • Currently Pursuing"
            const statusText = [edu.academicYear, edu.status].filter(Boolean).join(' • ');

            // Coursework Subsection: "Current Coursework"
            const courseworkHtml = (edu.coursework && edu.coursework.length > 0)
                ? `
                    <div class="edu-coursework-section">
                        <h4 class="edu-coursework-title">Current Coursework</h4>
                        <div class="edu-coursework-grid">
                            ${edu.coursework.map(subject => `<span class="edu-coursework-tag">${subject}</span>`).join('')}
                        </div>
                    </div>
                `
                : '';

            return `
                <div class="timeline-item${currentItemClass} reveal">
                    <div class="timeline-dot" aria-hidden="true"></div>
                    <div class="education-card${featuredClass}">
                        <div class="edu-header">
                            <div>
                                <span class="edu-level-badge">${edu.level}</span>
                                <h3 class="edu-degree">${degreeHeading}</h3>
                                ${edu.field ? `<p class="edu-field">${edu.field}</p>` : ''}
                                ${edu.specialization ? `<p class="edu-specialization">Specialization: <span>${edu.specialization}</span></p>` : ''}
                                <p class="edu-school">${edu.institution || ''}</p>
                            </div>
                            ${duration ? `<span class="edu-period">${duration}</span>` : ''}
                        </div>

                        ${statusText ? `
                            <div class="edu-badges-row">
                                <span class="edu-status-badge">${statusText}</span>
                            </div>
                        ` : ''}

                        ${edu.details ? `<p class="edu-details">${edu.details}</p>` : ''}

                        ${courseworkHtml}
                    </div>
                </div>
            `;
        } else {
            // Secondary / Senior Secondary Education (Class 12, Class 10)
            return `
                <div class="timeline-item reveal">
                    <div class="timeline-dot" aria-hidden="true"></div>
                    <div class="education-card">
                        <div class="edu-header">
                            <div>
                                <span class="edu-level-badge">${edu.level}</span>
                                <h3 class="edu-school-name">${edu.school}</h3>
                                <div class="edu-school-meta">
                                    <span>Board: <strong>${edu.board}</strong></span>
                                    <span class="edu-meta-sep">•</span>
                                    <span>Location: <strong>${edu.location}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }).join('');
}

/**
 * Render Achievements Section (Step 4F Scalable Integration)
 */
function renderAchievements() {
    const container = document.getElementById('achievementsContainer');
    if (!container) return;

    if (!portfolioData.achievements || portfolioData.achievements.length === 0) {
        container.innerHTML = `<div class="empty-state">No achievements added yet.</div>`;
        return;
    }

    container.innerHTML = portfolioData.achievements.map(ach => {
        const typeBadge = ach.type ? `<span class="achievement-badge">${escapeHTML(ach.type)}</span>` : (ach.badge ? `<span class="achievement-badge">${escapeHTML(ach.badge)}</span>` : '');
        const statusBadge = ach.status ? `
            <span class="achievement-status-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ${escapeHTML(ach.status)}
            </span>
        ` : '';
        const yearBadge = ach.year ? `<span class="achievement-year-badge">${escapeHTML(ach.year)}</span>` : '';
        const roleBadge = ach.role ? `<span class="achievement-role-badge">Role: ${escapeHTML(ach.role)}</span>` : '';

        const projectSubtitle = ach.project 
            ? `<h4 class="achievement-subtitle">Project: <span>${escapeHTML(ach.project)}</span></h4>` 
            : (ach.subtitle ? `<h4 class="achievement-subtitle">${escapeHTML(ach.subtitle)}</h4>` : '');

        const tagsHtml = ach.tags && Array.isArray(ach.tags) && ach.tags.length > 0 ? `
            <div class="achievement-tags" aria-label="Key areas and technologies">
                ${ach.tags.map(t => `<span class="achievement-tag">${escapeHTML(t)}</span>`).join('')}
            </div>
        ` : '';

        const buttons = [];
        if (ach.link) {
            buttons.push(`
                <a href="${ach.link}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" aria-label="View project: ${escapeHTML(ach.title)}">
                    <span>View Project</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            `);
        }
        if (ach.project && ach.project.toUpperCase().includes('CLICKBAIT')) {
            buttons.push(`
                <button type="button" class="btn btn-sm btn-outline project-details-btn" data-project-title="CLICKBAIT" aria-label="View CLICKBAIT project details">
                    <span>View Details</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </button>
            `);
        }

        const actionBtn = buttons.length > 0 ? `<div class="achievement-actions">${buttons.join('')}</div>` : '';

        return `
            <div class="achievement-card reveal">
                <div class="achievement-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H7v2h10v-2h-2c-.55 0-1-.45-1-1v-2.34c3.27-.8 5.5-3.71 5.5-7.16 0-1.66-.67-3.16-1.76-4.24l-1.42 1.42C16.89 7.24 17.5 8.29 17.5 9.5c0 2.48-1.79 4.54-4.13 4.93L13 14.5v-1l-.5-.5h-1l-.5.5v1l-.37-.07C8.29 14.04 6.5 11.98 6.5 9.5c0-1.21.61-2.26 1.68-2.82L6.76 5.26C5.67 6.34 5 7.84 5 9.5c0 3.45 2.23 6.36 5.5 7.16z"></path></svg>
                </div>
                <div class="achievement-content">
                    <div class="achievement-badges-row">
                        ${typeBadge}
                        ${statusBadge}
                        ${yearBadge}
                        ${roleBadge}
                    </div>
                    <h3 class="achievement-title">${escapeHTML(ach.title)}</h3>
                    ${projectSubtitle}
                    <p class="achievement-desc">${escapeHTML(ach.description)}</p>
                    ${tagsHtml}
                    ${actionBtn}
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Helper to escape HTML characters safely
 */
function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * Modular Contact Form Submission Handler (Step 4E)
 * Easily extensible for future backend or email service integration (e.g., EmailJS, Formspree, custom API).
 */
function handleContactSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const feedbackBox = document.getElementById('contactFeedback');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Reset previous feedback and field errors
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        if (input) input.classList.remove('input-error');
    });
    [nameError, emailError, subjectError, messageError].forEach(err => {
        if (err) {
            err.textContent = '';
            err.classList.remove('visible');
        }
    });
    if (feedbackBox) {
        feedbackBox.className = 'form-feedback';
        feedbackBox.innerHTML = '';
    }

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    let isValid = true;
    let firstInvalidInput = null;

    // Validate Name
    if (!name) {
        isValid = false;
        if (nameError) {
            nameError.textContent = 'Please enter your name.';
            nameError.classList.add('visible');
        }
        if (nameInput) nameInput.classList.add('input-error');
        if (!firstInvalidInput) firstInvalidInput = nameInput;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        isValid = false;
        if (emailError) {
            emailError.textContent = 'Please enter your email address.';
            emailError.classList.add('visible');
        }
        if (emailInput) emailInput.classList.add('input-error');
        if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else if (!emailPattern.test(email)) {
        isValid = false;
        if (emailError) {
            emailError.textContent = 'Please enter a valid email address (e.g. name@example.com).';
            emailError.classList.add('visible');
        }
        if (emailInput) emailInput.classList.add('input-error');
        if (!firstInvalidInput) firstInvalidInput = emailInput;
    }

    // Validate Subject
    if (!subject) {
        isValid = false;
        if (subjectError) {
            subjectError.textContent = 'Please enter a subject.';
            subjectError.classList.add('visible');
        }
        if (subjectInput) subjectInput.classList.add('input-error');
        if (!firstInvalidInput) firstInvalidInput = subjectInput;
    }

    // Validate Message
    if (!message) {
        isValid = false;
        if (messageError) {
            messageError.textContent = 'Please write your message.';
            messageError.classList.add('visible');
        }
        if (messageInput) messageInput.classList.add('input-error');
        if (!firstInvalidInput) firstInvalidInput = messageInput;
    }

    if (!isValid) {
        if (firstInvalidInput) firstInvalidInput.focus();
        if (feedbackBox) {
            feedbackBox.className = 'form-feedback error visible';
            feedbackBox.innerHTML = '<strong>Please correct the highlighted fields above.</strong>';
        }
        return;
    }

    // Frontend-only safe submission handling (No false "Message sent" claim)
    const encodedSubject = encodeURIComponent(`[Portfolio Contact] ${subject}`);
    const encodedBody = encodeURIComponent(`Hello Priyanshu,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`);
    const mailtoUrl = `mailto:${portfolioData.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;

    if (feedbackBox) {
        feedbackBox.className = 'form-feedback success visible';
        feedbackBox.innerHTML = `
            <strong>Thanks, ${escapeHTML(name)}! Your message has been prepared.</strong>
            <p style="margin-top: 6px;">A direct backend email service is not yet connected. You can launch your email client immediately with your message prefilled, or email me directly at <strong>${portfolioData.contact.email}</strong>.</p>
            <div class="form-feedback-actions">
                <a href="${mailtoUrl}" class="btn btn-sm btn-primary">
                    <span>Open in Email Client</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </a>
                <button type="button" class="btn btn-sm btn-outline" id="clearContactFormBtn">Clear Form</button>
            </div>
        `;

        const clearBtn = document.getElementById('clearContactFormBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                const form = document.getElementById('contactForm');
                if (form) form.reset();
                feedbackBox.className = 'form-feedback';
                feedbackBox.innerHTML = '';
            });
        }
    }
}

/**
 * Render Contact Section and Footer Links (Step 4E Complete Integration)
 */
function renderSocialAndContact() {
    const contactContainer = document.getElementById('contactContainer');
    const footerContainer = document.getElementById('footerLinksContainer');
    const { contact, resume } = portfolioData;

    if (contactContainer && contact) {
        const resumePath = resume.path || resume.file || "assets/resume/Priyanshu_Karan_Resume.pdf";
        const isResumeAvailable = Boolean(resume.available && resumePath);

        contactContainer.innerHTML = `
            <!-- Left Column: Contact Info, Social Links, Resume -->
            <div class="contact-info-panel reveal">
                <!-- Direct Contact Information -->
                <div class="contact-card-box">
                    <div class="contact-card-header">
                        <div class="contact-card-icon" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <h3 class="contact-card-title">Contact Information</h3>
                    </div>
                    <div class="contact-item-list">
                        <!-- Email -->
                        <div class="contact-item">
                            <div class="contact-item-icon" aria-hidden="true">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div class="contact-item-body">
                                <span class="contact-item-label">Email</span>
                                <a href="mailto:${contact.email}" class="contact-item-val contact-item-link">${contact.email}</a>
                            </div>
                        </div>

                        <!-- Phone -->
                        <div class="contact-item">
                            <div class="contact-item-icon" aria-hidden="true">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div class="contact-item-body">
                                <span class="contact-item-label">Phone</span>
                                <a href="tel:${contact.phone}" class="contact-item-val contact-item-link">${contact.phone}</a>
                            </div>
                        </div>

                        <!-- Location -->
                        <div class="contact-item">
                            <div class="contact-item-icon" aria-hidden="true">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div class="contact-item-body">
                                <span class="contact-item-label">Location</span>
                                <span class="contact-item-val">${contact.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Social Profiles -->
                <div class="contact-card-box">
                    <div class="contact-card-header">
                        <div class="contact-card-icon" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                        </div>
                        <h3 class="contact-card-title">Social Profiles</h3>
                    </div>
                    <div class="contact-social-grid">
                        <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-social-btn" aria-label="Visit Priyanshu Karan's LinkedIn profile">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            <span>LinkedIn</span>
                        </a>
                        <a href="${contact.github}" target="_blank" rel="noopener noreferrer" class="contact-social-btn" aria-label="Visit Priyanshu Karan's GitHub profile">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                <!-- Resume Card -->
                <div class="contact-resume-card">
                    <div class="contact-resume-info">
                        <div class="contact-card-icon" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </div>
                        <div class="contact-resume-meta">
                            <h4>Resume</h4>
                            <p>View &amp; Print Ready</p>
                        </div>
                    </div>
                    <a href="#resume" class="btn btn-sm btn-outline" aria-label="View professional resume section"><span>View Resume</span></a>
                </div>
            </div>

            <!-- Right Column: Professional Contact Form -->
            <div class="contact-form-panel reveal">
                <h3 class="form-title">Send a Message</h3>
                <p class="form-subtitle">Have a question or want to collaborate? Fill in the details below.</p>
                
                <form id="contactForm" class="contact-form" novalidate>
                    <div class="form-group">
                        <label for="contactName" class="form-label">Your Name <span class="req" aria-hidden="true">*</span></label>
                        <input type="text" id="contactName" name="name" class="form-input" placeholder="Your Name" required autocomplete="name">
                        <span class="field-error" id="nameError"></span>
                    </div>

                    <div class="form-group">
                        <label for="contactEmail" class="form-label">Your Email <span class="req" aria-hidden="true">*</span></label>
                        <input type="email" id="contactEmail" name="email" class="form-input" placeholder="your@email.com" required autocomplete="email">
                        <span class="field-error" id="emailError"></span>
                    </div>

                    <div class="form-group">
                        <label for="contactSubject" class="form-label">Subject <span class="req" aria-hidden="true">*</span></label>
                        <input type="text" id="contactSubject" name="subject" class="form-input" placeholder="Subject" required>
                        <span class="field-error" id="subjectError"></span>
                    </div>

                    <div class="form-group">
                        <label for="contactMessage" class="form-label">Your Message <span class="req" aria-hidden="true">*</span></label>
                        <textarea id="contactMessage" name="message" class="form-textarea" rows="5" placeholder="Write your message here..." required></textarea>
                        <span class="field-error" id="messageError"></span>
                    </div>

                    <button type="submit" id="contactSubmitBtn" class="btn btn-primary form-submit-btn">
                        <span>Send Message</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>

                    <div id="contactFeedback" class="form-feedback" aria-live="polite"></div>
                </form>
            </div>
        `;

        // Bind form submission event listener
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactSubmit);
        }
    }

    // Footer Links (using centralized contact data)
    if (footerContainer && contact) {
        footerContainer.innerHTML = `
            <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn</a>
            <span class="footer-sep">&bull;</span>
            <a href="${contact.github}" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
            <span class="footer-sep">&bull;</span>
            <a href="mailto:${contact.email}" class="footer-link">Email</a>
        `;
    }
}

/**
 * Render Professional Resume Section (Step 4H Professional Resume Integration)
 */
function renderResume() {
    const container = document.getElementById('resumeContainer');
    if (!container) return;

    const { personal, contact, resume, education, skills, projects, certifications, achievements } = portfolioData;

    // 1. Primary B.Tech Education
    const btech = education && education[0] ? education[0] : null;
    const class12 = education && education[1] ? education[1] : null;
    const class10 = education && education[2] ? education[2] : null;

    // 2. Verified Coursework List
    const courseworkList = btech && btech.coursework ? btech.coursework : [
        "Probability and Statistics (PS)",
        "Data Structures (DS)",
        "Digital System Design (DSD)",
        "Automata and Finite Language (AFL)",
        "Scientific Technical Writing (STW)",
        "Industrial 4.0 (IND)"
    ];

    // 3. Top Projects (CLICKBAIT, Portfolio, Simple Calculator)
    const resumeProjects = (projects || []).slice(0, 3);
    const projectsHtml = resumeProjects.map(proj => {
        const isClickbait = proj.title.toUpperCase().includes('CLICKBAIT');
        const bullets = [];

        if (proj.role) {
            bullets.push(escapeHTML(proj.role));
        }

        if (proj.title.toLowerCase().includes('findit')) {
            bullets.push("Engineered full-stack Smart Lost & Found platform with FastAPI backend, React/TypeScript frontend, AI-powered semantic matching, secure ownership claims, and Cloudinary media management.");
        } else if (isClickbait) {
            bullets.push("Contributed to backend verification logic (Ed25519 signing/verification, SHA-256 hashing, public-key verification, expiry/revocation checking, and tamper detection) for digital communications.");
        } else if (proj.isCurrentSite) {
            bullets.push("Engineered modular, responsive web portfolio with custom Vanilla JS data architecture, accessible modal certificate viewer, and print-ready stylesheet.");
        }

        const bulletsList = bullets.length > 0 
            ? `<ul class="resume-item-bullets">${bullets.map(b => `<li>${b}</li>`).join('')}</ul>` 
            : '';

        const techList = proj.technologies && proj.technologies.length > 0
            ? `<div class="resume-tech-line"><strong>Technologies:</strong> ${proj.technologies.join(', ')}</div>`
            : '';

        const statusYear = proj.status === 'In Development' || proj.status === 'In Progress' ? '2026' : (proj.status || '');

        return `
            <div class="resume-entry">
                <div class="resume-entry-header">
                    <div>
                        <h4 class="resume-entry-title">${escapeHTML(proj.title)}</h4>
                        <span class="resume-entry-subtitle">${escapeHTML(proj.category || '')}</span>
                    </div>
                    <span class="resume-entry-date">${escapeHTML(statusYear)}</span>
                </div>
                <p class="resume-entry-desc">${escapeHTML(proj.description || '')}</p>
                ${bulletsList}
                ${techList}
            </div>
        `;
    }).join('');

    // 4. Compact Certifications List
    const certsHtml = (certifications || []).map(cert => {
        const dateStr = cert.issueDate || 'Verified';
        return `
            <div class="resume-cert-item">
                <div class="resume-cert-main">
                    <span class="resume-cert-name">${escapeHTML(cert.name)}</span>
                    ${cert.organization ? `<span class="resume-cert-issuer">&mdash; ${escapeHTML(cert.organization)}</span>` : ''}
                    <span class="resume-cert-type">(${escapeHTML(cert.type || 'Certification')})</span>
                </div>
                <span class="resume-cert-date">${escapeHTML(dateStr)}</span>
            </div>
        `;
    }).join('');

    // 5. Achievements (Smart India Hackathon 2026)
    const achHtml = (achievements || []).map(ach => `
        <div class="resume-entry">
            <div class="resume-entry-header">
                <div>
                    <h4 class="resume-entry-title">${escapeHTML(ach.title)}</h4>
                    <span class="resume-entry-subtitle">Project: ${escapeHTML(ach.project || '')} &bull; ${escapeHTML(ach.status || '')}</span>
                </div>
                <span class="resume-entry-date">${escapeHTML(ach.year || '2026')}</span>
            </div>
            <p class="resume-entry-desc">${escapeHTML(ach.description || '')}</p>
        </div>
    `).join('');

    container.innerHTML = `
        <article class="resume-document">
            <!-- Header -->
            <header class="resume-header">
                <h3 class="resume-name">${escapeHTML(personal.name)}</h3>
                <p class="resume-headline">${escapeHTML(resume.headline || 'Computer Science Engineering Student | AI & ML Enthusiast')}</p>
                <div class="resume-contact-row">
                    <span><a href="mailto:${contact.email}">${contact.email}</a></span>
                    <span class="resume-dot">&bull;</span>
                    <span><a href="tel:${contact.phone}">+91 ${contact.phone}</a></span>
                    <span class="resume-dot">&bull;</span>
                    <span>${contact.location}</span>
                </div>
                <div class="resume-links-row">
                    <span>LinkedIn: <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer">${contact.linkedin.replace('https://www.', '')}</a></span>
                    <span class="resume-dot">&bull;</span>
                    <span>GitHub: <a href="${contact.github}" target="_blank" rel="noopener noreferrer">${contact.github.replace('https://', '')}</a></span>
                </div>
            </header>

            <!-- Professional Summary -->
            <section class="resume-block">
                <h4 class="resume-block-title">Professional Summary</h4>
                <p class="resume-text">${escapeHTML(resume.summary)}</p>
            </section>

            <!-- Education -->
            <section class="resume-block">
                <h4 class="resume-block-title">Education</h4>
                ${btech ? `
                    <div class="resume-entry">
                        <div class="resume-entry-header">
                            <div>
                                <h5 class="resume-entry-title">${escapeHTML(btech.degree)} (${escapeHTML(btech.level)}) in ${escapeHTML(btech.field)}</h5>
                                <span class="resume-entry-subtitle">${escapeHTML(btech.institution)} &bull; ${escapeHTML(btech.specialization)}</span>
                            </div>
                            <div class="resume-entry-right">
                                <span class="resume-entry-date">${escapeHTML(btech.startYear)} &ndash; ${escapeHTML(btech.expectedGraduation)}</span>
                                <span class="resume-highlight-badge">${escapeHTML(btech.academicYear || "2nd Year")}</span>
                            </div>
                        </div>
                    </div>
                ` : ''}

                <!-- Schooling -->
                <div class="resume-schooling-grid">
                    ${class12 ? `
                        <div class="resume-school-item">
                            <span class="resume-school-level">${escapeHTML(class12.level)} (Senior Secondary)</span>
                            <span class="resume-school-name">${escapeHTML(class12.school)}, ${escapeHTML(class12.location)}</span>
                            <span class="resume-school-board">Board: ${escapeHTML(class12.board)}</span>
                        </div>
                    ` : ''}
                    ${class10 ? `
                        <div class="resume-school-item">
                            <span class="resume-school-level">${escapeHTML(class10.level)} (Secondary)</span>
                            <span class="resume-school-name">${escapeHTML(class10.school)}, ${escapeHTML(class10.location)}</span>
                            <span class="resume-school-board">Board: ${escapeHTML(class10.board)}</span>
                        </div>
                    ` : ''}
                </div>
            </section>

            <!-- Current Coursework -->
            <section class="resume-block">
                <h4 class="resume-block-title">Current 2nd-Year Coursework</h4>
                <p class="resume-text resume-coursework-line">${escapeHTML(courseworkList.join(', '))}</p>
            </section>

            <!-- Technical Skills -->
            <section class="resume-block">
                <h4 class="resume-block-title">Technical Skills</h4>
                <div class="resume-skills-table">
                    <div class="resume-skill-row">
                        <span class="resume-skill-key">Programming:</span>
                        <span class="resume-skill-value">${(skills.programming || []).join(', ')}</span>
                    </div>
                    <div class="resume-skill-row">
                        <span class="resume-skill-key">Web Development:</span>
                        <span class="resume-skill-value">${(skills.webDevelopment || []).join(', ')}, JavaScript</span>
                    </div>
                    <div class="resume-skill-row">
                        <span class="resume-skill-key">Core Foundations &amp; Learning:</span>
                        <span class="resume-skill-value">${(portfolioData.currentlyLearning || []).join(', ')}</span>
                    </div>
                    <div class="resume-skill-row">
                        <span class="resume-skill-key">Developer Tools:</span>
                        <span class="resume-skill-value">${(skills.tools || []).join(', ')}</span>
                    </div>
                </div>
            </section>

            <!-- Projects -->
            <section class="resume-block">
                <h4 class="resume-block-title">Projects</h4>
                ${projectsHtml}
            </section>

            <!-- Achievements & Activities -->
            <section class="resume-block">
                <h4 class="resume-block-title">Achievements &amp; Activities</h4>
                ${achHtml}
            </section>

            <!-- Certifications -->
            <section class="resume-block">
                <h4 class="resume-block-title">Certifications (${(certifications || []).length} Verified Credentials)</h4>
                <div class="resume-certs-list">
                    ${certsHtml}
                </div>
            </section>

            <!-- Languages -->
            <section class="resume-block">
                <h4 class="resume-block-title">Languages</h4>
                <p class="resume-text">${(resume.languages || ['English', 'Hindi']).join(', ')}</p>
            </section>
        </article>
    `;

    // Bind Download Resume and Print buttons
    const downloadBtn = document.getElementById('downloadResumeBtn');
    const printBtn = document.getElementById('printResumeBtn');

    const handleResumePrint = (e) => {
        if (e) e.preventDefault();
        // Ensure all reveal elements are fully visible before print preview opens
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
        const resumeEl = document.getElementById('resumeContainer');
        if (resumeEl) {
            resumeEl.classList.add('revealed');
        }
        window.print();
    };

    if (downloadBtn) {
        downloadBtn.onclick = (e) => {
            if (e) e.preventDefault();
            const resumePath = (portfolioData.resume && (portfolioData.resume.path || portfolioData.resume.file)) 
                || "assets/resume/Priyanshu_Karan_Resume.pdf";
            const downloadLink = document.createElement('a');
            downloadLink.href = resumePath;
            downloadLink.download = "Priyanshu_Karan_Resume.pdf";
            downloadLink.target = "_blank";
            if (typeof downloadLink.click === 'function') {
                if (document.body && document.body.appendChild) {
                    document.body.appendChild(downloadLink);
                }
                downloadLink.click();
                if (document.body && document.body.removeChild) {
                    document.body.removeChild(downloadLink);
                }
            } else {
                handleResumePrint(e);
            }
        };
    }
    if (printBtn) {
        printBtn.onclick = handleResumePrint;
    }
}

// Global beforeprint listener to ensure print preview always has complete visibility
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
});

/* ==========================================================================
   3. INTERACTIONS & EVENT LISTENERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // Step A: Render All Content Dynamically
    // ----------------------------------------------------------------------
    renderHero();
    renderStats();
    initStatsAnimation();
    loadDeveloperData();
    initHeroReveal();
    renderAbout();
    renderCurrentlyLearning();
    renderSkills();
    renderProjects();
    renderCertifications();
    renderEducation();
    renderAchievements();
    renderSocialAndContact();
    renderResume();

    // ----------------------------------------------------------------------
    // Step B: Navbar and Navigation Elements
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Mobile Menu Toggle
    const toggleMenu = () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    };

    const closeMenu = () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    };

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && navMenu.classList.contains('open')) {
            closeMenu();
        }
    });

    // Sticky Navbar Scroll Effect
    const handleNavbarScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    // Active Navigation Highlighting (Smooth & Accurate Section Tracking)
    const highlightActiveNav = () => {
        const scrollPosition = window.scrollY + 120;
        const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

        if (isBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#contact') {
                    link.classList.add('active');
                }
            });
            return;
        }

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightActiveNav, { passive: true });
    highlightActiveNav();

    // ----------------------------------------------------------------------
    // Step C: Certificate Viewer & Lightbox Modal
    // ----------------------------------------------------------------------
    const certModal = document.getElementById('certModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalCertName = document.getElementById('modalCertName');
    const modalCertIssuer = document.getElementById('modalCertIssuer');
    const modalCertType = document.getElementById('modalCertType');
    const modalCertViewer = document.getElementById('modalCertViewer');
    const modalCertExtra = document.getElementById('modalCertExtra');
    const modalFooter = document.getElementById('modalFooter');

    const closeModal = () => {
        if (!certModal) return;
        certModal.classList.remove('open');
        certModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (modalCertViewer) {
            modalCertViewer.innerHTML = '';
        }
    };

    const openModal = (certIndex) => {
        const cert = portfolioData.certifications[certIndex];
        if (!cert || !certModal) return;

        if (modalCertName) modalCertName.textContent = cert.name;
        if (modalCertIssuer) modalCertIssuer.textContent = cert.organization ? `Issued by: ${cert.organization}` : '';
        if (modalCertType) modalCertType.textContent = cert.type || 'Certification';

        // Render actual visual certificate preview (Image or PDF)
        if (modalCertViewer) {
            if (cert.certificateFile && cert.certificateFile.trim() !== '') {
                const isImage = /\.(png|jpe?g|webp)$/i.test(cert.certificateFile);
                if (isImage) {
                    modalCertViewer.innerHTML = `
                        <div class="modal-img-container">
                            <img src="${encodeURI(cert.certificateFile)}" alt="Official Certificate: ${cert.name} - ${cert.organization}" class="modal-cert-img" loading="eager" />
                        </div>
                    `;
                } else {
                    modalCertViewer.innerHTML = `
                        <div class="modal-pdf-container">
                            <iframe src="${encodeURI(cert.certificateFile)}#toolbar=0" class="modal-cert-pdf" title="Official Certificate: ${cert.name}"></iframe>
                        </div>
                    `;
                }
            } else {
                modalCertViewer.innerHTML = `
                    <div class="modal-notice">
                        <p>Certificate file unavailable.</p>
                    </div>
                `;
            }
        }

        // Build verified extra details list dynamically
        const extraRows = [];
        if (cert.recipient && cert.recipient.trim() !== '') {
            extraRows.push(`<div><strong>Recipient:</strong> <span>${escapeHTML(cert.recipient)}</span></div>`);
        }
        if (cert.issueDate && cert.issueDate.trim() !== '') {
            extraRows.push(`<div><strong>Issue Date:</strong> <span>${cert.issueDate}</span></div>`);
        }
        if (cert.startDate && cert.endDate) {
            extraRows.push(`<div><strong>Program Period:</strong> <span>${cert.startDate} – ${cert.endDate}</span></div>`);
        }
        if (cert.expirationDate && cert.expirationDate.trim() !== '') {
            extraRows.push(`<div><strong>Expiration Date:</strong> <span>${cert.expirationDate}</span></div>`);
        }
        if (cert.credentialId && cert.credentialId.trim() !== '') {
            const label = cert.idLabel || 'Credential ID';
            extraRows.push(`<div><strong>${label}:</strong> <span>${cert.credentialId}</span></div>`);
        }
        if (cert.cpeCredits && cert.cpeCredits.trim() !== '') {
            extraRows.push(`<div><strong>CPE Credits:</strong> <span>${cert.cpeCredits}</span></div>`);
        }
        if (cert.additionalInfo) {
            extraRows.push(`<div><strong>Coursework:</strong> <span>${cert.additionalInfo}</span></div>`);
        }

        if (modalCertExtra) {
            modalCertExtra.innerHTML = extraRows.join('');
        }

        // Render modal footer action buttons
        if (modalFooter) {
            const footerBtns = [];

            if (cert.certificateFile && cert.certificateFile.trim() !== '') {
                const isImage = /\.(png|jpe?g|webp)$/i.test(cert.certificateFile);
                const btnLabel = isImage ? 'Open Full Image' : 'Open Full PDF';
                footerBtns.push(`
                    <a href="${encodeURI(cert.certificateFile)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" aria-label="${btnLabel}: ${cert.name}">
                        <span>${btnLabel}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                `);
            }

            if (cert.credentialUrl && cert.credentialUrl.trim() !== '') {
                footerBtns.push(`
                    <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm cert-verify-btn" aria-label="Verify credential on ${cert.organization}">
                        <span>Verify Credential</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                `);
            }

            footerBtns.push(`
                <button class="btn btn-secondary btn-sm" id="modalCloseBtn" aria-label="Close certificate viewer">Close</button>
            `);

            modalFooter.innerHTML = footerBtns.join('');

            const newCloseBtn = modalFooter.querySelector('#modalCloseBtn');
            if (newCloseBtn) {
                newCloseBtn.addEventListener('click', closeModal);
            }
        }

        certModal.classList.add('open');
        certModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    // Event delegation for dynamically rendered cert-btn buttons
    document.addEventListener('click', (event) => {
        const targetBtn = event.target.closest('.cert-btn');
        if (targetBtn) {
            const index = targetBtn.getAttribute('data-cert-index');
            if (index !== null) {
                openModal(parseInt(index, 10));
            }
        }
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && certModal && certModal.classList.contains('open')) {
            closeModal();
        }
    });

    // ----------------------------------------------------------------------
    // Step E: Project Details Modal (Final Verification)
    // ----------------------------------------------------------------------
    const projectModal = document.getElementById('projectModal');
    const projectModalOverlay = document.getElementById('projectModalOverlay');
    const projectModalClose = document.getElementById('projectModalClose');
    const projectModalCategory = document.getElementById('projectModalCategory');
    const projectModalTitle = document.getElementById('projectModalTitle');
    const projectModalBody = document.getElementById('projectModalBody');
    const projectModalFooter = document.getElementById('projectModalFooter');

    const closeProjectModal = () => {
        if (!projectModal) return;
        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    const openProjectModal = (target) => {
        if (!projectModal) return;

        const sorted = [...portfolioData.projects].sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return 0;
        });

        let project = null;
        if (typeof target === 'number' || (typeof target === 'string' && /^\d+$/.test(target.trim()))) {
            project = sorted[parseInt(target, 10)];
        }
        if (!project && typeof target === 'string') {
            project = sorted.find(p => p.title.toLowerCase().includes(target.toLowerCase()));
        }
        if (!project) return;

        if (projectModalCategory) {
            projectModalCategory.textContent = project.category || 'Project';
        }
        if (projectModalTitle) {
            projectModalTitle.textContent = project.title;
        }

        if (projectModalBody) {
            const subtitleHtml = project.subtitle 
                ? `<p class="project-modal-subtitle">${escapeHTML(project.subtitle)}</p>` 
                : '';

            const statusClass = project.statusType || 'completed';

            const metaItems = [
                `<div class="project-modal-meta-item">
                    <span class="project-modal-meta-label">Status</span>
                    <span class="project-modal-meta-value"><span class="project-status ${statusClass}">${escapeHTML(project.status)}</span></span>
                </div>`
            ];

            if (project.context) {
                metaItems.push(`
                    <div class="project-modal-meta-item">
                        <span class="project-modal-meta-label">Context</span>
                        <span class="project-modal-meta-value">${escapeHTML(project.context)}</span>
                    </div>
                `);
            }

            if (project.role) {
                metaItems.push(`
                    <div class="project-modal-meta-item">
                        <span class="project-modal-meta-label">My Contribution</span>
                        <span class="project-modal-meta-value">${escapeHTML(project.role)}</span>
                    </div>
                `);
            }

            const overviewHtml = `
                <div class="project-modal-section">
                    <h4 class="project-modal-section-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        Project Overview
                    </h4>
                    <p>${escapeHTML(project.overview || project.description)}</p>
                </div>
            `;

            let keyFeaturesHtml = '';
            if (project.keyFeatures && project.keyFeatures.length > 0) {
                keyFeaturesHtml = `
                    <div class="project-modal-section">
                        <h4 class="project-modal-section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            Key Features
                        </h4>
                        <ul class="project-modal-list">
                            ${project.keyFeatures.map(feat => `<li>${escapeHTML(feat)}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            let capabilitiesHtml = '';
            if (project.capabilities && project.capabilities.length > 0) {
                capabilitiesHtml = `
                    <div class="project-modal-section">
                        <h4 class="project-modal-section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                            Core Capabilities
                        </h4>
                        <ul class="project-modal-list">
                            ${project.capabilities.map(cap => `<li>${escapeHTML(cap)}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            let teamContextHtml = '';
            if (project.teamContext) {
                teamContextHtml = `
                    <div class="project-modal-section">
                        <h4 class="project-modal-section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            Team & Implementation Context
                        </h4>
                        <p>${escapeHTML(project.teamContext)}</p>
                    </div>
                `;
            }

            let roleHtml = '';
            if (project.roleDetail || (project.securityConcepts && project.securityConcepts.length > 0)) {
                const securityList = project.securityConcepts && project.securityConcepts.length > 0
                    ? `<div style="margin-top: 10px;">
                        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.5px;">Key Security Concepts Implemented:</span>
                        <ul class="project-modal-list" style="margin-top: 8px;">
                            ${project.securityConcepts.map(c => `<li>${escapeHTML(c)}</li>`).join('')}
                        </ul>
                       </div>`
                    : '';

                roleHtml = `
                    <div class="project-modal-section">
                        <h4 class="project-modal-section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            My Contribution — ${escapeHTML(project.role || 'Developer')}
                        </h4>
                        ${project.roleDetail ? `<p>${escapeHTML(project.roleDetail)}</p>` : ''}
                        ${securityList}
                    </div>
                `;
            }

            const techHtml = project.technologies && project.technologies.length > 0 ? `
                <div class="project-modal-section">
                    <h4 class="project-modal-section-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        Technologies & Concepts
                    </h4>
                    <div class="project-modal-tech-stack">
                        ${project.technologies.map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('')}
                    </div>
                </div>
            ` : '';

            projectModalBody.innerHTML = `
                <div class="project-modal-body">
                    ${subtitleHtml}
                    <div class="project-modal-section">
                        <div class="project-modal-meta-grid">
                            ${metaItems.join('')}
                        </div>
                    </div>
                    ${overviewHtml}
                    ${keyFeaturesHtml}
                    ${capabilitiesHtml}
                    ${teamContextHtml}
                    ${roleHtml}
                    ${techHtml}
                </div>
            `;
        }

        if (projectModalFooter) {
            const footerBtns = [];

            if (project.liveUrl && project.liveUrl.trim() !== '') {
                const liveModalLabel = project.liveButtonText || 'Live Demo';
                footerBtns.push(`
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" aria-label="${liveModalLabel} for ${escapeHTML(project.title)}">
                        <span>${liveModalLabel}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                `);
            }

            if (project.githubUrl && project.githubUrl.trim() !== '') {
                const githubModalLabel = project.githubButtonText || 'GitHub Repository';
                footerBtns.push(`
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="${githubModalLabel} for ${escapeHTML(project.title)}">
                        <span>${githubModalLabel}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                `);
            }

            footerBtns.push(`
                <button class="btn btn-secondary btn-sm" id="projectModalCloseBtn" aria-label="Close project details">Close</button>
            `);

            projectModalFooter.innerHTML = footerBtns.join('');

            const newCloseBtn = projectModalFooter.querySelector('#projectModalCloseBtn');
            if (newCloseBtn) {
                newCloseBtn.addEventListener('click', closeProjectModal);
            }
        }

        projectModal.classList.add('open');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    // Event delegation for project-details-btn
    document.addEventListener('click', (event) => {
        const targetBtn = event.target.closest('.project-details-btn');
        if (targetBtn) {
            const title = targetBtn.getAttribute('data-project-title');
            const index = targetBtn.getAttribute('data-project-index');
            if (title) {
                openProjectModal(title);
            } else if (index !== null) {
                openProjectModal(parseInt(index, 10));
            }
        }
    });

    if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
    if (projectModalOverlay) projectModalOverlay.addEventListener('click', closeProjectModal);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
            closeProjectModal();
        }
    });

    // ----------------------------------------------------------------------
    // Step D: Scroll Reveal Animations
    // ----------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('revealed'));
    }

    console.log("Priyanshu Karan Portfolio — Complete.");
});
