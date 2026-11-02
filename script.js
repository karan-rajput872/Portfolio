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
        tagline: "Exploring technology, building practical solutions, and continuously developing my skills through hands-on experience.",
        aboutJourney: [
            "I'm a second-year Computer Science Engineering student at <span class=\"narrative-highlight\">Kalinga Institute of Industrial Technology (KIIT)</span>, interested in understanding how technology works and turning ideas into practical solutions.",
            "My journey revolves around programming, software development, problem-solving, and exploring emerging technologies. I enjoy learning through <span class=\"narrative-highlight\">hands-on projects, technical challenges, and continuous experimentation</span>.",
            "I'm particularly interested in Artificial Intelligence, Machine Learning, Web Development, and the evolving possibilities of technology."
        ],
        philosophy: "I believe meaningful growth comes from curiosity, consistent practice, and the willingness to build, experiment, and learn from every challenge.",
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
        degree: "B.Tech — Computer Science Engineering",
        tagline: "Building, Learning & Exploring Technology",
        heroContent: "Exploring technology, building practical solutions, and continuously developing my skills through hands-on experience.",
        institution: "Kalinga Institute of Industrial Technology (KIIT)",
        year: "2nd Year — Currently Pursuing",
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
            value: 6,
            displayValue: "6",
            description: "Verified academic, competition, and research projects"
        },
        {
            id: "certifications",
            label: "CERTIFICATES EARNED",
            value: 16,
            displayValue: "16",
            description: "Official credentials across CS, AI, Cloud & Security"
        },
        {
            id: "deployments",
            label: "LIVE DEPLOYMENTS",
            value: 3,
            displayValue: "3",
            description: "Verified live project demo deployments (FindIt, CLICKBAIT, Dark Store Strategy)"
        },
        {
            id: "repositories",
            label: "CODE REPOSITORIES",
            value: 6,
            suffix: "+",
            displayValue: "6+",
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
            "CSS",
            "JavaScript"
        ],
        tools: [
            "Git",
            "GitHub"
        ],
        aiMl: [
            "Machine Learning",
            "Generative AI",
            "AI-Assisted Tools",
            "Data Analysis"
        ]
    },

    // ----------------------------------------------------------------------
    // CURRENTLY EXPLORING (LEARNING ROADMAP)
    // ----------------------------------------------------------------------
    // Topics and areas you are actively exploring and developing.
    // These appear clearly marked as active learning in About Me and Skills.
    currentlyLearning: [
        "Data Structures & Algorithms",
        "JavaScript",
        "Artificial Intelligence / Machine Learning",
        "Web Development"
    ],
    currentlyExploring: [
        {
            topic: "Data Structures & Algorithms",
            status: "In Progress",
            description: "Algorithmic thinking, complexity analysis, and linear/non-linear structures through coursework.",
            icon: "dsa"
        },
        {
            topic: "JavaScript (ES6+)",
            status: "In Progress",
            description: "Modern asynchronous paradigms, DOM performance, and web application logic.",
            icon: "javascript"
        },
        {
            topic: "AI / Machine Learning",
            status: "In Progress",
            description: "Foundational predictive modeling and competitive challenge problem-solving.",
            icon: "ml"
        },
        {
            topic: "Web Development",
            status: "In Progress",
            description: "Responsive frontend engineering, semantic UI design, and web accessibility standards.",
            icon: "web"
        }
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
            description: "FindIt is a smart lost and found platform designed to help people report, discover, and recover misplaced belongings through an organized digital system with intelligent assistance.",
            overview: "FindIt is a full-stack smart lost and found platform designed to simplify reporting, discovering, and recovering misplaced belongings. It helps users report lost or found items, discover matching reports with AI assistance, submit confidential ownership claims, and coordinate the recovery process.",
            problemSolution: "Traditional lost and found processes make tracking missing items and contacting finders difficult; FindIt provides centralized reporting, semantic matching, and secure ownership claim verification.",
            capabilities: [
                "AI-powered semantic item matching with similarity explanations",
                "Multi-attribute search and category filtering of reported items",
                "Photo-based item reporting with confidential ownership claim proofs",
                "In-platform communication, activity notifications and recovery tracking"
            ],
            role: "Full Stack & Applied AI Developer",
            roleDetail: "Designed and engineered the complete end-to-end platform architecture: built the high-performance FastAPI backend with SQLAlchemy 2.0 ORM and dual SQLite/PostgreSQL support, developed the modern React and TypeScript frontend, implemented the AI-powered semantic matching engine with multi-attribute similarity analysis and match explanations, integrated Cloudinary media handling and Google OAuth / JWT authentication, and deployed the full system across Vercel and Render.",
            technologies: [
                "React",
                "TypeScript",
                "FastAPI",
                "Python",
                "PostgreSQL",
                "SQLAlchemy",
                "Cloudinary",
                "JWT Auth"
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
            image: "assets/images/findit_cover.png",
            imageAlt: "FindIt Smart Lost and Found Platform interface showing the item discovery and reporting experience.",
            featured: true
        },
        {
            title: "CLICKBAIT — Digital Verification Platform",
            subtitle: "\"Don't Guess. Verify.\"",
            category: "Smart India Hackathon 2026",
            context: "Internal Round",
            status: "Internal Round Completed",
            statusType: "completed",
            description: "A student-focused digital verification platform designed to help users assess potentially suspicious communications, including emails, circulars, fee updates, and URLs, before trusting them.",
            overview: "A student-focused digital verification platform designed to help users assess potentially suspicious communications, including emails, scholarship notices, examination circulars, fee updates, internship messages, and URLs, before trusting or acting on them.",
            problemSolution: "Students routinely encounter deceptive academic notices and phishing links; CLICKBAIT inspects submitted text, URLs, and media to extract forensic evidence and explain risk indicators in plain language.",
            capabilities: [
                "Suspicious message and URL authenticity verification",
                "Evidence extraction and cryptographic tampering checks",
                "AI-assisted explanations and forensic verification indicators",
                "Support for raw messages, circular text, and URL authenticity"
            ],
            role: "Backend / Cryptography / Security",
            roleDetail: "Contributed to backend verification logic including Ed25519-based cryptographic signing and verification, SHA-256 hashing, canonical payload generation, public-key verification, expiry checking, revocation checking, tamper detection, and zero-PII blockchain registry concepts.",
            technologies: [
                "Node.js",
                "Python",
                "Ed25519",
                "SHA-256",
                "Cryptography",
                "Backend Security"
            ],
            keyFeatures: [
                "Suspicious message and URL verification across student communication channels.",
                "Evidence extraction and authenticity analysis with cryptographic verification.",
                "AI-assisted risk explanations and forensic indicators in accessible language.",
                "Tamper detection and canonical payload hashing for digital records."
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
            liveButtonText: "Live Demo",
            image: "assets/images/clickbait_cover.png",
            imageAlt: "CLICKBAIT digital verification platform interface showing suspicious communication analysis.",
            featured: true
        },
        {
            title: "Planet Hunters — Find New Worlds in Stellar Data",
            subtitle: "\"Exploring Stellar Signals Through Machine Learning\"",
            category: "Machine Learning / Artificial Intelligence",
            context: "HACK4HACK 2026 — ML Challenge",
            status: "Round 1 Completed · Shortlisted for Round 2",
            statusType: "completed",
            description: "An astronomy-focused machine learning project focused on identifying potential planetary signals and classifying space telescope stellar observations across 25,000 light curves.",
            overview: "Planet Hunters is an end-to-end machine learning and telemetry solution developed for the HACK4HACK ML Challenge that classifies space telescope stellar light curves into astrophysical categories. Operating across 25,000 stars, the pipeline implements astronomical cotrending to eliminate systematic detector drift, extracts 88 domain features, and trains a gradient-boosted ensemble.",
            problemSolution: "Raw telescope light curves suffer from thermal breathing and camera pointing jitter; the pipeline applies astro-cotrending, extracts 88 physical features, and trains a gradient-boosted ensemble.",
            capabilities: [
                "Astro-cotrending systematic noise correction across detector channels",
                "88 domain-engineered features across transit, astrometric & harmonic pillars",
                "Heterogeneous tri-model ensemble (LightGBM, HistGradientBoosting, CatBoost)",
                "Deterministic 14-point submission schema validation & telemetry dashboards"
            ],
            role: "Machine Learning Engineer & Web Application Developer",
            roleDetail: "Designed and engineered the full competition pipeline: developed camera/CCD astro-cotrending reducing systematic drift by 60.3% and lifting detector generalization from 0.5161 to 0.6336; extracted 88 domain features across 4 physical pillars (cotrended summary stats, transit BLS SNR, astrometric centroid in-dip shift vetting, and Fourier harmonics); evaluated candidates via leak-free 5-fold stratified cross-validation; trained the champion tri-architecture ensemble (50% LGBM + 40% HistGB + 10% CatBoost); developed an automated 14-point schema validator guaranteeing deterministic predictions; and built a dual telemetry platform with an interactive Next.js 16 web application and Python Streamlit mission control.",
            technologies: [
                "Python",
                "LightGBM",
                "HistGradientBoosting",
                "CatBoost",
                "Scikit-Learn",
                "Feature Engineering",
                "Data Analysis"
            ],
            keyFeatures: [
                "Astro-Cotrending: Subtracted instantaneous median flux and centroid vectors per channel, eliminating thermal breathing and spacecraft pointing jitter.",
                "Domain-Informed Feature Engineering: Extracted 88 features across 4 pillars including 1-day rolling median detrending, transit dip SNR, and Fourier harmonic ratios.",
                "Tri-Architecture Ensemble: Blended leaf-wise LightGBM (50%), depth-wise regularized HistGradientBoosting (40%), and CatBoost oblivious trees (10%).",
                "Dual Cross-Validation Rigor: Evaluated using both 5-Fold Stratified OOF (0.6455 Macro F1) and Stratified Detector-Channel CV (0.6336 Macro F1).",
                "Automated Schema Validator: 14 automated schema and physics checks validating formatting, bounds, non-null values, and astronomical class distribution.",
                "Dual Telemetry Platform: Modern Next.js 16 scientific web application and interactive Streamlit mission control dashboard."
            ],
            metrics: [
                "0.6455 Out-of-Fold Macro F1 across 18,000 training stars",
                "0.6336 Detector-Channel Generalization F1 (holding out unseen hardware)",
                "60.3% Reduction in Kolmogorov-Smirnov train-to-test feature distribution drift",
                "14 / 14 Automated Submission Schema & Physics Checks Passed",
                "7,000 Deterministic Test Sample Predictions (SHA-256 Verified)"
            ],
            teamContext: "ML Challenge Hack4Hack 2026 entry for Planet Hunters (Round 2 Shortlisted). Cleared Round 1 and shortlisted for Round 2 (Certificate of Participation received; Round 2 participation not completed). All experiment records, cross-validation artifacts, telemetry dashboards, and verified submission files preserved in repository.",
            githubUrl: "https://github.com/karan-rajput872/Planet-Hunters-Round1",
            githubButtonText: "GitHub Repository",
            detailUrl: "planet-hunters.html",
            detailButtonText: "View Project",
            liveUrl: "https://planet-hunters-round1.vercel.app/",
            liveButtonText: "Live Demo",
            image: "assets/images/planet-hunters/project_cover.png",
            imageAlt: "Planet Hunters machine learning platform interface showing astronomical data analysis and classification.",
            featured: true
        },
        {
            title: "Dark Store Private-Label Defence Strategy",
            subtitle: "\"Defending National FMCG Margins in Delhi NCR Quick Commerce\"",
            category: "Business Strategy Research",
            context: "Unstop — Prompt to Podium",
            status: "Completed / Participated",
            statusType: "completed",
            description: "A competition-based business strategy research project examining how a national dairy brand can defend its market position against private-label competition in Delhi NCR's quick-commerce ecosystem.",
            overview: "A competition-based business strategy research project for Unstop Prompt to Podium examining how a national dairy brand can defend its market position against platform private-label encroachment in Delhi NCR. The research analyzes quick-commerce platform dual identity, channel contribution economics, priority customer segmentation, multi-scenario cohort financials, and a phased implementation roadmap.",
            problemSolution: "Algorithmic downranking and margin erosion threaten FMCG brands in quick commerce; the research models channel economics and provides a 5-pillar cold-chain and SKU defence roadmap.",
            capabilities: [
                "Quick-commerce unit economics and 24-month customer cohort financial model",
                "FMCG retail channel margin and trade distribution analysis (4.5% QC vs 25% retail)",
                "5-point strategic defence framework for batch QR traceability and SKU architecture",
                "Executive 14-slide research presentation developed with Kreyato AI"
            ],
            role: "Lead Researcher & Business Strategist",
            roleDetail: "Conducted competitive market research across Delhi NCR dark-store clusters, evaluated platform listing economics and FMCG distribution data, constructed a 24-month customer cohort financial model with sensitivity scenarios, engineered a 5-point strategic defence framework, and delivered an executive 14-slide presentation on Kreyato AI.",
            technologies: [
                "Business Research",
                "Financial Modelling",
                "Strategic Analysis",
                "Market Research",
                "Competitive Analysis",
                "Data Interpretation"
            ],
            keyFeatures: [
                "Quick-Commerce Market Context: Sized national dairy ($31.95B) and Delhi NCR ($558.5B at 14.79% CAGR) alongside 3,500+ dark store density.",
                "Private-Label Threat Analysis: Analyzed platform algorithmic downranking, 10–15% pricing discounts, and platform dual identity.",
                "Customer Segmentation (ICPs): Identified Priority ICP 1 (Health-Conscious Urban Families) and Priority ICP 2 (Convenience Professionals).",
                "Channel Contribution Economics: Quantified margin disparity between Quick Commerce (4.5%), Traditional Retail (25.04%), and D2C (25.56%).",
                "24-Month Cohort Model: Modeled unit economics showing base-case ROI of -50.6% and Year-1 LTV/CAC of 1.12x on ₹1,148L investment.",
                "Five Strategic Recommendations: Formulated R1 (Freshness & Traceability), R2 (SKU Architecture), R3 (Platform JBPs), R4 (LTV Engine), and R5 (Channel Realignment).",
                "Phased Implementation Roadmap: Structured into Immediate (0–3M), Medium (3–12M), and Long-Term (12+M) phases.",
                "Enterprise Risk Register: Matrix of Commercial, Operational, Regulatory, and Competitive risks with mitigation and monitoring metrics."
            ],
            teamContext: "Completed as a standalone competition research submission for Unstop Prompt to Podium: Research. Create. Present. Developed with research and presentation assistance from Kreyato AI.",
            platformAttribution: "Research and presentation workflow developed with the assistance of <a href=\"https://kreyato.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"project-attribution-link\">Kreyato AI</a>.",
            githubUrl: "https://github.com/karan-rajput872/prompt-to-podium-dark-store-strategy",
            githubButtonText: "GitHub Repository",
            liveUrl: "https://prompt-to-podium-dark-store-strategy-priyanshukaran25-5139.vercel.app",
            liveButtonText: "View Live Case Study",
            presentationUrl: "https://kreyato.ai/s/8GzJFW3w",
            presentationButtonText: "Research Presentation",
            detailUrl: "dark-store-dairy-strategy.html",
            detailButtonText: "Case Study Overview",
            image: "assets/images/unstop_prompt_to_podium_cover.png",
            imageAlt: "Dark Store Private-Label Defence Strategy — Unstop Prompt to Podium Presentation Cover Slide",
            featured: true
        },
        {
            title: "Personal Portfolio Website",
            subtitle: "\"Centralized Professional Profile & Technical Showcase\"",
            category: "Web Development",
            context: "Active Production Site",
            status: "Completed",
            statusType: "completed",
            description: "A responsive personal portfolio website built to showcase my academic journey, technical skills, projects, achievements, and verified certifications.",
            overview: "A responsive personal portfolio website designed and developed from scratch to showcase my academic journey, verified technical certifications, engineering projects, hackathons, and research case studies. Engineered with a centralized Vanilla JavaScript architecture, the platform dynamically renders content from structured datasets while maintaining high accessibility, smooth transitions, and instant performance.",
            problemSolution: "Heavy frontend frameworks create unnecessary bundle bloat for static portfolios; this site achieves instant loading, smooth micro-interactions, and ATS resume generation with zero external UI dependencies.",
            capabilities: [
                "Zero-framework Vanilla JS architecture with single-source-of-truth state",
                "Full-spectrum responsive layout across desktop, tablet, and mobile viewports",
                "Automated ATS-compliant PDF resume generation using headless Chromium",
                "Verified credentials hub displaying 16 authentic certificates with direct links"
            ],
            role: "Full Stack Development | UI/UX Design | Performance & Integration",
            roleDetail: "Designed and engineered the end-to-end portfolio: crafted the custom dark-theme design system with orange accent highlights, built the modular Vanilla JavaScript data-driven rendering pipeline, developed interactive modal dialogs and responsive navigation, configured Puppeteer for automated ATS PDF resume compilation, and set up continuous production deployment on Vercel and GitHub Pages.",
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "Lenis Scroll",
                "Puppeteer",
                "Vercel"
            ],
            keyFeatures: [
                "Responsive Cross-Device Layout: Engineered for seamless presentation across desktop (1600px+), tablet, and mobile (360px+).",
                "Centralized Data Architecture: Single-source-of-truth state management rendering all sections dynamically in pure Vanilla JavaScript.",
                "Projects & Case Study Showcase: Interactive project cards with authentic previews, live demo links, repository access, and deep-dive modal dialogs.",
                "Verified Credentials Hub: Comprehensive showcase of 16 authentic credentials across CS, AI, Cloud, and Cybersecurity with direct verification links.",
                "Dual Resume Experience: Interactive ATS-friendly on-page resume viewer accompanied by automated, downloadable PDF generation.",
                "Functional Contact Integration: Client-side validated contact form ready for serverless delivery.",
                "Zero-Framework Performance: Ultra-fast page loads, accessible semantic HTML5 markup, and smooth CSS micro-interactions."
            ],
            metrics: [
                "100% Zero-Framework Implementation (Pure HTML5 / CSS3 / ES6+ JavaScript)",
                "6 Projects & 16 Official Certifications Dynamically Managed",
                "3 Verified Live Deployments & 6+ Code Repositories Integrated",
                "Zero Horizontal Layout Overflow across all mobile viewports (down to 360px)",
                "Automated 497 KB ATS-Compliant PDF Resume Synchronization"
            ],
            teamContext: "Solo project designed, architected, and continuously maintained by Priyanshu Karan. All code, design systems, and data pipelines are published in the open-source GitHub repository.",
            githubUrl: "https://github.com/karan-rajput872/Portfolio",
            githubButtonText: "GitHub Repository",
            liveUrl: "https://portfolio-priyanshukaran25-5139.vercel.app",
            liveButtonText: "Live Demo",
            image: "assets/images/portfolio_website_cover.png",
            imageAlt: "Personal portfolio website interface showing hero section, navigation, and developer profile.",
            featured: true,
            isCurrentSite: true
        },
        {
            title: "Student Result System",
            subtitle: "\"Academic Records & Grade Distribution Manager in C\"",
            category: "C Programming",
            context: "Academic Project",
            status: "Completed",
            statusType: "completed",
            description: "A structured C programming project for managing, calculating, and presenting student academic performance and grade distributions.",
            overview: "A structured C programming project for managing, calculating, and presenting student academic performance, aggregate subject scores, and overall grade distributions.",
            problemSolution: "Managing student marks manually is prone to calculation errors; this utility automates grade computation, class averages, and tabular transcript formatting.",
            capabilities: [
                "Student record storage with structure arrays and field validation",
                "Automatic grade calculation and GPA percentage evaluation",
                "Formatted tabular console reporting with formatted score summaries"
            ],
            role: "Developer (Academic Project)",
            roleDetail: "Implemented structured record keeping, grade calculation routines, and formatted tabular console output.",
            technologies: [
                "C",
                "File I/O",
                "Structures",
                "Console UI"
            ],
            githubUrl: "",
            liveUrl: "",
            image: "",
            featured: false
        }
    ],

    // ----------------------------------------------------------------------
    // CERTIFICATIONS (ALL 16 VERIFIED CERTIFICATES - CONNECTED TO REAL FILES)
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
        },
        {
            name: "AI Tools & Claude Workshop — Certificate of Completion",
            title: "AI Tools & Claude Workshop — Certificate of Completion",
            shortName: "AI Tools & Claude Workshop",
            organization: "Be10x",
            issuer: "Be10x",
            recipient: "Priyanshu Karan",
            type: "Certificate of Completion",
            issueDate: "28 October 2026",
            date: "28 October 2026",
            credentialId: "",
            credentialUrl: "",
            certificateFile: "assets/certificates/be10x-ai-tools-claude-workshop.pdf",
            file: "assets/certificates/be10x-ai-tools-claude-workshop.pdf",
            previewImage: "assets/certificates/be10x-ai-tools-claude-workshop-preview.png",
            image: "assets/certificates/be10x-ai-tools-claude-workshop-preview.png",
            description: "Successfully completed the Be10x AI Tools & Claude Workshop, gaining practical exposure to using AI tools for presentations, data analysis, coding, and debugging.",
            resumeDesc: "Practical exposure to AI-assisted presentations, data analysis, coding, and debugging.",
            skills: [
                "Artificial Intelligence",
                "Generative AI",
                "Claude",
                "AI-Assisted Coding",
                "Data Analysis",
                "AI Productivity Tools"
            ]
        },
        {
            name: "ML Challenge Hack4Hack 2026 — Certificate of Participation",
            title: "ML Challenge Hack4Hack 2026 — Certificate of Participation",
            shortName: "ML Challenge Hack4Hack 2026",
            organization: "Hack4Hack",
            issuer: "Hack4Hack",
            recipient: "Priyanshu Karan",
            team: "Kaalchakra",
            type: "Certificate of Participation",
            issueDate: "28 October 2026",
            date: "28 October 2026",
            credentialId: "0548DB0D",
            idLabel: "Certificate ID",
            credentialUrl: "",
            certificateFile: "assets/certificates/hack4hack-2026-ml-challenge.pdf",
            file: "assets/certificates/hack4hack-2026-ml-challenge.pdf",
            previewImage: "assets/certificates/hack4hack-2026-ml-challenge-preview.png",
            image: "assets/certificates/hack4hack-2026-ml-challenge-preview.png",
            description: "Participated in the ML Challenge Hack4Hack 2026, organized by Hack4Hack, as a member of Team Kaalchakra. Successfully cleared Round 1 and was shortlisted for Round 2.",
            resumeDesc: "Participated as a member of Team Kaalchakra; successfully cleared Round 1 and was shortlisted for Round 2.",
            skills: [
                "Machine Learning",
                "Artificial Intelligence",
                "Python",
                "Problem Solving",
                "Technical Competition"
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
        },
        {
            title: "Shortlisted for Round 2 — ML Challenge Hack4Hack 2026",
            project: "Planet Hunters — Find New Worlds in Starlight",
            competition: "ML Challenge Hack4Hack 2026",
            organizer: "Hack4Hack",
            team: "Team Kaalchakra",
            type: "Hackathon / ML Challenge",
            status: "Round 1 Cleared • Shortlisted for Round 2",
            year: "2026",
            role: "Machine Learning Engineer",
            description: "Participated in the ML Challenge Hack4Hack 2026, organized by Hack4Hack, as a member of Team Kaalchakra with Planet Hunters — Find New Worlds in Starlight. Successfully cleared Round 1 and was shortlisted for Round 2 (Certificate of Participation received; Round 2 participation not completed).",
            resumeTitle: "Hack4Hack 2026 — ML Challenge",
            resumeDesc: "Participated as a member of Team Kaalchakra; successfully cleared Round 1 and was shortlisted for Round 2 (Round 2 participation not completed).",
            highlights: [
                "Successfully cleared Round 1.",
                "Shortlisted for Round 2 (did not participate in Round 2).",
                "Participated as a member of Team Kaalchakra.",
                "Certificate of Participation received.",
                "Developed Planet Hunters using a heterogeneous Machine Learning ensemble.",
                "Built an interactive scientific telemetry dashboard."
            ],
            tags: [
                "Machine Learning",
                "Team Kaalchakra",
                "Round 1 Cleared",
                "Round 2 Shortlisted",
                "Certificate of Participation",
                "Astronomy Time-Series",
                "Ensemble Learning",
                "Python",
                "Technical Competition"
            ],
            certificateUrl: "assets/certificates/hack4hack-2026-ml-challenge.pdf",
            detailUrl: "planet-hunters.html",
            githubUrl: "https://github.com/karan-rajput872/Planet-Hunters-Round1",
            liveUrl: "https://planet-hunters-round1.vercel.app/"
        },
        {
            title: "Unstop — Prompt to Podium: Research. Create. Present.",
            topic: "Dark Store Private-Label Defence Strategy for a National Dairy Brand in Delhi NCR's Quick-Commerce Ecosystem",
            project: "Dark Store Private-Label Defence Strategy",
            platform: "Unstop",
            competition: "Unstop — Prompt to Podium: Research. Create. Present.",
            type: "Research & Strategy / Presentation",
            status: "Completed / Participated",
            year: "2026",
            role: "Lead Researcher & Strategist",
            description: "Successfully completed a competition-based research and business strategy project focused on defending a national dairy brand against private-label competition in Delhi NCR's quick-commerce ecosystem.",
            resumeTitle: "Unstop — Prompt to Podium: Research. Create. Present.",
            resumeDesc: "Completed a competition-based research and business strategy project focused on defending a national dairy brand against private-label competition in Delhi NCR's quick-commerce ecosystem (Status: Completed / Participated).",
            thumbnail: "assets/images/unstop_prompt_to_podium_cover.png",
            thumbnailAlt: "Dark Store Private-Label Defence Strategy — Unstop Prompt to Podium Presentation Cover Slide",
            highlights: [
                "Researched quick-commerce dark store operations across Blinkit, Zepto, and Swiggy Instamart in Delhi NCR.",
                "Built a 24-month cohort model evaluating unit economics (Base-case ROI -50.6%, 12-month LTV/CAC 1.12x).",
                "Formulated 5 strategic recommendations prioritizing freshness, traceability, and channel profitability over volume races.",
                "Delivered a structured 14-slide executive presentation hosted on Kreyato AI for senior FMCG and dairy stakeholders."
            ],
            tags: [
                "Market Research",
                "Competitive Analysis",
                "Business Strategy",
                "Quick Commerce",
                "Market Positioning",
                "Strategic Thinking",
                "Research Synthesis",
                "Presentation Development",
                "Business Communication"
            ],
            presentationUrl: "https://kreyato.ai/s/8GzJFW3w",
            liveUrl: "https://prompt-to-podium-dark-store-strategy-priyanshukaran25-5139.vercel.app",
            liveButtonText: "View Live Case Study",
            githubUrl: "https://github.com/karan-rajput872/prompt-to-podium-dark-store-strategy",
            detailUrl: "dark-store-dairy-strategy.html",
            detailLabel: "Case Study Overview",
            platformAttribution: "Research and presentation developed with the assistance of <a href=\"https://kreyato.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"achievement-attribution-link\">Kreyato AI</a>."
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
        heroTagline.textContent = dev.heroContent || "Exploring technology, building practical solutions, and continuously developing my skills through hands-on experience.";
    }
    if (heroStatusText) heroStatusText.textContent = dev.currentStatus || "Open to Opportunities";
    if (heroMetaText) {
        heroMetaText.textContent = "2nd Year • B.Tech CSE • KIIT";
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

    const projectCount = (portfolioData.projects || []).length || 6;
    const certCount = (portfolioData.certifications || []).length || 16;
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
    if (!journeyContainer) return;

    if (personal.aboutJourney && personal.aboutJourney.length >= 3) {
        const p1 = personal.aboutJourney[0];
        const p2 = personal.aboutJourney[1];
        const p3 = personal.aboutJourney[2];
        const quote = personal.philosophy || "I believe meaningful growth comes from curiosity, consistent practice, and the willingness to build, experiment, and learn from every challenge.";

        journeyContainer.innerHTML = `
            <p>${p1}</p>
            <p>${p2}</p>
            <div class="about-philosophy-box">
                "${quote}"
                <span class="about-philosophy-author">&mdash; Priyanshu Karan &bull; Learning Philosophy</span>
            </div>
            <p>${p3}</p>
        `;
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
 * Render "Currently Exploring" list in About section
 */
function renderCurrentlyLearning() {
    const container = document.getElementById('currentlyLearningContainer');
    if (!container) return;

    const items = (portfolioData.currentlyExploring && portfolioData.currentlyExploring.length > 0)
        ? portfolioData.currentlyExploring
        : [
            {
                topic: "Data Structures & Algorithms",
                description: "Complexity analysis, linear & non-linear structures through active university coursework."
            },
            {
                topic: "JavaScript (ES6+)",
                description: "Asynchronous paradigms, modern DOM APIs, and scalable web application architectures."
            },
            {
                topic: "AI & Machine Learning",
                description: "Predictive modeling, tabular algorithms, and competitive challenge problem-solving."
            },
            {
                topic: "Web Development",
                description: "Responsive frontend engineering, semantic design systems, and web accessibility standards."
            }
        ];

    container.innerHTML = items.map(item => {
        const title = item.topic || item.title || (typeof item === 'string' ? item : 'Technical Focus');
        const desc = item.description || item.detail || "Complexity analysis, algorithmic thinking, and hands-on implementation.";
        return `
            <li class="exploring-item-box">
                <div class="exploring-item-top">
                    <span class="exploring-item-title">${escapeHTML(title)}</span>
                </div>
                <p class="exploring-item-desc">${escapeHTML(desc)}</p>
            </li>
        `;
    }).join('');
}

/**
 * Render Technical Expertise Section (Redesigned Developer Architecture)
 */
function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container) return;

    if (!portfolioData.skills || Object.keys(portfolioData.skills).length === 0) {
        container.innerHTML = `<div class="empty-state">No skills listed yet. Add skills to <code>portfolioData.skills</code> in <code>script.js</code>.</div>`;
        return;
    }

    // Authentic Technology SVGs
    const techIcons = {
        c: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="C programming language logo"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00599C"/><path d="M12.5 7.5a4.5 4.5 0 0 0-4.5 4.5 4.5 4.5 0 0 0 4.5 4.5c1.65 0 3.08-.89 3.86-2.22l-1.78-1.03a2.43 2.43 0 0 1-2.08 1.25 2.45 2.45 0 0 1-2.45-2.45 2.45 2.45 0 0 1 2.45-2.45c.86 0 1.62.48 2.02 1.2l1.81-1.05A4.47 4.47 0 0 0 12.5 7.5z" fill="#659AD2"/></svg>`,
        python: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Python logo"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.82v.825H3.852S0 5.768 0 11.884c0 6.115 3.367 5.918 3.367 5.918h2.01v-2.825s-.11-3.367 3.31-3.367h5.688s3.197.052 3.197-3.118V3.118S17.95 0 11.914 0zm-3.2 1.74a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08z" fill="#3776AB"/><path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.82v-.825h8.174s3.852.463 3.852-5.653c0-6.115-3.367-5.918-3.367-5.918h-2.01v2.825s.11 3.367-3.31 3.367H9.681s-3.197-.052-3.197 3.118v5.334S6.05 24 12.086 24zm3.2-1.74a1.04 1.04 0 1 1 0-2.08 1.04 1.04 0 0 1 0 2.08z" fill="#FFD43B"/></svg>`,
        html: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="HTML5 logo"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#E34F26"/><path d="M12 22.018l7.027-1.948 1.62-18.07H12v20.018z" fill="#EF652A"/><path d="M12 8.76H7.904l.235 2.668H12V8.76zm0 5.347h-2.08l-.133-1.493H7.424l.261 2.94 4.315 1.198V14.107z" fill="#EBEBEB"/><path d="M12 3.424v2.668h7.824l-.235 2.668H12v2.668h5.234l-.495 5.578-4.739 1.315V20.32l6.16-1.708.844-9.376.01-.137.49-5.675H12z" fill="#FFFFFF"/></svg>`,
        html5: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="HTML5 logo"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#E34F26"/><path d="M12 22.018l7.027-1.948 1.62-18.07H12v20.018z" fill="#EF652A"/><path d="M12 8.76H7.904l.235 2.668H12V8.76zm0 5.347h-2.08l-.133-1.493H7.424l.261 2.94 4.315 1.198V14.107z" fill="#EBEBEB"/><path d="M12 3.424v2.668h7.824l-.235 2.668H12v2.668h5.234l-.495 5.578-4.739 1.315V20.32l6.16-1.708.844-9.376.01-.137.49-5.675H12z" fill="#FFFFFF"/></svg>`,
        css: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3 logo"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#1572B6"/><path d="M12 22.018l7.027-1.948 1.62-18.07H12v20.018z" fill="#33A9DC"/><path d="M12 8.76H7.904l.235 2.668H12V8.76zm0 5.347h-2.08l-.133-1.493H7.424l.261 2.94 4.315 1.198V14.107z" fill="#EBEBEB"/><path d="M12 3.424v2.668h7.824l-.235 2.668H12v2.668h5.234l-.495 5.578-4.739 1.315V20.32l6.16-1.708.844-9.376.01-.137.49-5.675H12z" fill="#FFFFFF"/></svg>`,
        css3: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3 logo"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#1572B6"/><path d="M12 22.018l7.027-1.948 1.62-18.07H12v20.018z" fill="#33A9DC"/><path d="M12 8.76H7.904l.235 2.668H12V8.76zm0 5.347h-2.08l-.133-1.493H7.424l.261 2.94 4.315 1.198V14.107z" fill="#EBEBEB"/><path d="M12 3.424v2.668h7.824l-.235 2.668H12v2.668h5.234l-.495 5.578-4.739 1.315V20.32l6.16-1.708.844-9.376.01-.137.49-5.675H12z" fill="#FFFFFF"/></svg>`,
        javascript: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript logo"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M6.5 17.5c.3.5.7.8 1.3.8.7 0 1.2-.4 1.2-1.3v-6.5h2v6.6c0 1.9-1.1 2.9-2.9 2.9-1.4 0-2.4-.7-2.8-1.7l1.2-.8zm8.1 2.4c-1.3 0-2.2-.6-2.6-1.6l1.3-.8c.3.5.7.8 1.3.8.6 0 1-.3 1-.7 0-.5-.4-.7-1.2-1-1.4-.5-2.3-1.1-2.3-2.4 0-1.3 1-2.3 2.5-2.3 1.1 0 1.9.4 2.4 1.3l-1.2.8c-.3-.4-.6-.6-1.1-.6-.6 0-.9.3-.9.7 0 .5.3.7 1.1 1 1.5.5 2.4 1.2 2.4 2.5 0 1.5-1.1 2.3-2.7 2.3z" fill="#000000"/></svg>`,
        git: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Git logo"><path d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.126 0L8.808 2.585l3.25 3.25a2.213 2.213 0 0 1 2.801 2.812l3.134 3.134a2.21 2.21 0 0 1 2.82 2.766 2.22 2.22 0 0 1-3.328 1.037 2.21 2.21 0 0 1-.53-.53l-3.05-3.05v7.228a2.213 2.213 0 1 1-1.8-1.765V9.99a2.22 2.22 0 0 1-1.077-2.887L7.818 3.892.454 11.256a1.5 1.5 0 0 0 0 2.127l10.48 10.48a1.5 1.5 0 0 0 2.125 0l10.487-10.48a1.503 1.503 0 0 0 0-2.453z" fill="#F05032"/></svg>`,
        github: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GitHub logo"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#FFFFFF"/></svg>`,
        ml: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Machine Learning icon"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
        genai: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fb923c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Generative AI icon"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>`,
        aiTools: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="AI Tools icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
        dataAnalysis: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Data Analysis icon"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
        dsa: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="DSA icon"><circle cx="12" cy="5" r="3"></circle><circle cx="5" cy="19" r="3"></circle><circle cx="19" cy="19" r="3"></circle><line x1="7.5" y1="17" x2="10.5" y2="7.5"></line><line x1="16.5" y1="17" x2="13.5" y2="7.5"></line></svg>`,
        web: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Web architecture icon"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
    };

    // Metadata dictionary for technology labels & roles
    const techMeta = {
        "c": { name: "C", role: "Procedural & Logic", icon: techIcons.c },
        "python": { name: "Python", role: "Scripting & Data / ML", icon: techIcons.python },
        "html": { name: "HTML5", role: "Semantic Markup", icon: techIcons.html5 },
        "html5": { name: "HTML5", role: "Semantic Markup", icon: techIcons.html5 },
        "css": { name: "CSS3", role: "Responsive UI", icon: techIcons.css3 },
        "css3": { name: "CSS3", role: "Responsive UI", icon: techIcons.css3 },
        "javascript": { name: "JavaScript", role: "DOM & App Logic", icon: techIcons.javascript },
        "git": { name: "Git", role: "Version Control", icon: techIcons.git },
        "github": { name: "GitHub", role: "CI/CD & Collaboration", icon: techIcons.github },
        "machine learning": { name: "Machine Learning", role: "Supervised & Tabular", icon: techIcons.ml },
        "generative ai": { name: "Generative AI", role: "LLM Workflows", icon: techIcons.genai },
        "ai-assisted tools": { name: "AI Tools", role: "Claude & Productivity", icon: techIcons.aiTools },
        "ai tools": { name: "AI Tools", role: "Claude & Productivity", icon: techIcons.aiTools },
        "data analysis": { name: "Data Analysis", role: "Model Evaluation", icon: techIcons.dataAnalysis }
    };

    // Category display configuration
    const categoryConfig = {
        programming: {
            title: "Programming",
            badge: "2 Languages",
            desc: "Core languages used for foundational algorithms, computational problem solving, and software engineering.",
            note: "Academic coursework & computational foundations",
            noteIcon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
            rowClass: "expertise-card-r1",
            isTwoCol: false
        },
        webDevelopment: {
            title: "Web Development",
            badge: "3 Technologies",
            desc: "Modern web standards applied to build responsive, accessible, and interactive portfolio experiences.",
            note: "Applied across personal portfolio & web projects",
            noteIcon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
            rowClass: "expertise-card-r1",
            isTwoCol: false
        },
        tools: {
            title: "Tools & Platforms",
            badge: "2 Platforms",
            desc: "Industry-standard version control and collaborative development workflows across all active repositories.",
            note: "Active Git commit history & branch workflows",
            noteIcon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`,
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
            rowClass: "expertise-card-r1",
            isTwoCol: false
        },
        aiMl: {
            title: "Applied AI & ML Tools",
            badge: "4 Focus Areas",
            desc: "Practical exposure to machine learning workflows, tabular model experimentation, and AI tooling.",
            note: "Supported by Hack4Hack 2026 challenge participation & Be10x workshop",
            noteIcon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="8.5" y1="7.5" x2="15.5" y2="16.5"></line><line x1="8.5" y1="16.5" x2="15.5" y2="7.5"></line></svg>`,
            rowClass: "expertise-card-r2",
            isTwoCol: true
        }
    };

    // Render the 4 Core Technical Categories
    let cardsHtml = Object.entries(portfolioData.skills).map(([key, items]) => {
        const config = categoryConfig[key] || {
            title: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
            badge: `${items.length} Skills`,
            desc: "Technical competencies and development tooling.",
            note: "Verified portfolio technologies",
            noteIcon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon></svg>`,
            rowClass: "expertise-card-r1",
            isTwoCol: false
        };

        const itemsHtml = items.map(skill => {
            const rawName = typeof skill === 'string' ? skill : skill.name;
            const lookupKey = rawName.toLowerCase().trim();
            const meta = techMeta[lookupKey] || {
                name: rawName,
                role: typeof skill === 'object' && skill.role ? skill.role : "Technology",
                icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`
            };

            return `
                <div class="exp-item-row">
                    <div class="exp-item-left">
                        <span class="exp-item-icon" aria-hidden="true">${meta.icon}</span>
                        <span class="exp-item-name">${escapeHTML(meta.name)}</span>
                    </div>
                    <span class="exp-item-role">${escapeHTML(meta.role)}</span>
                </div>
            `;
        }).join('');

        const stackClass = config.isTwoCol ? "exp-items-2col" : "exp-items-stack";

        return `
            <div class="expertise-card ${config.rowClass} reveal">
                <div>
                    <div class="exp-card-header">
                        <div class="exp-card-header-left">
                            <div class="exp-card-icon-box" aria-hidden="true">${config.icon}</div>
                            <h3 class="exp-card-title">${escapeHTML(config.title)}</h3>
                        </div>
                        <span class="exp-card-badge">${escapeHTML(config.badge)}</span>
                    </div>
                    <p class="exp-card-desc">${escapeHTML(config.desc)}</p>
                    <div class="${stackClass}">
                        ${itemsHtml}
                    </div>
                </div>
                <div class="exp-context-note">
                    ${config.noteIcon}
                    <span>${escapeHTML(config.note)}</span>
                </div>
            </div>
        `;
    }).join('');

    // Render 5th Card: "Currently Exploring" Learning Roadmap
    const exploringItems = portfolioData.currentlyExploring || [
        { topic: "Data Structures & Algorithms", status: "In Progress", description: "Algorithmic thinking, complexity analysis, and linear/non-linear structures.", icon: "dsa" },
        { topic: "JavaScript (ES6+)", status: "In Progress", description: "Modern asynchronous paradigms, DOM performance, and web app logic.", icon: "javascript" },
        { topic: "AI / Machine Learning", status: "In Progress", description: "Foundational predictive modeling and competitive challenge problem-solving.", icon: "ml" },
        { topic: "Web Development", status: "In Progress", description: "Responsive frontend engineering, semantic UI design, and accessibility standards.", icon: "web" }
    ];

    const exploringHtml = exploringItems.map(item => {
        const topic = item.topic || item;
        const desc = item.description || "Active engineering roadmap & practical development.";
        return `
            <div class="exploring-mini-card">
                <div class="exploring-mini-top">
                    <span class="exploring-mini-title">${escapeHTML(topic)}</span>
                </div>
                <p class="exploring-mini-desc">${escapeHTML(desc)}</p>
            </div>
        `;
    }).join('');

    cardsHtml += `
        <div class="expertise-card expertise-card-r2 reveal">
            <div>
                <div class="exp-card-header">
                    <div class="exp-card-header-left">
                        <div class="exp-card-icon-box" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <h3 class="exp-card-title">Currently Exploring</h3>
                    </div>
                    <span class="status-pulse-pill"><span class="status-pulse-dot" aria-hidden="true"></span>In Progress</span>
                </div>
                <p class="exp-card-desc">Areas I'm actively studying and developing through coursework and projects.</p>
                <div class="exp-items-2col">
                    ${exploringHtml}
                </div>
            </div>
            <div class="exp-context-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>Continuous engineering roadmap &amp; university curriculum</span>
            </div>
        </div>
    `;

    container.innerHTML = cardsHtml;
}

/**
 * Render Selected Projects Section (Uniform Content-Driven Cards, Zero Void)
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

        // Tech stack tags (5-8 tags)
        const techTagsHtml = (project.technologies || [])
            .map(tech => `<span class="tech-tag">${escapeHTML(tech)}</span>`)
            .join('');

        // Featured label badge
        const featuredLabel = project.featured ? `<span class="project-featured-label">Featured Project</span>` : '';

        // Tagline / Subtitle
        const taglineText = project.subtitle || project.tagline;
        const taglineHtml = taglineText
            ? `<div class="project-tagline">${escapeHTML(taglineText)}</div>`
            : '';

        // Context badge (e.g. "Internal Round", "Campus Platform")
        const contextHtml = project.context
            ? `<span class="project-context">${escapeHTML(project.context)}</span>`
            : '';

        // Overview paragraph (30-50 words)
        const overviewText = project.overview || project.description || '';
        const overviewHtml = overviewText ? `<p class="project-overview">${escapeHTML(overviewText)}</p>` : '';

        // Problem & Solution callout box (20-35 words)
        const problemSolutionHtml = project.problemSolution
            ? `
                <div class="project-solution-box">
                    <div class="project-solution-header">
                        <span class="project-solution-tag">Problem & Solution</span>
                    </div>
                    <p class="project-solution-text">${escapeHTML(project.problemSolution)}</p>
                </div>
            `
            : '';

        // Key capabilities (3-4 bullet points)
        const capabilitiesList = project.capabilities && project.capabilities.length > 0
            ? project.capabilities.slice(0, 4)
            : (project.highlights && project.highlights.length > 0 ? project.highlights.slice(0, 4) : []);

        const capabilitiesHtml = capabilitiesList.length > 0
            ? `
                <div class="project-capabilities-box">
                    <span class="project-capabilities-label">Key Capabilities</span>
                    <ul class="project-capabilities-list">
                        ${capabilitiesList.map(cap => `<li><span class="cap-bullet">•</span><span>${escapeHTML(cap)}</span></li>`).join('')}
                    </ul>
                </div>
            `
            : '';

        // My Role callout
        const roleHtml = project.role
            ? `<div class="project-role-callout"><strong>My Role:</strong> <span>${escapeHTML(project.role)}</span></div>`
            : '';

        // Action buttons handling
        const buttons = [];

        // Primary Action: Live Demo
        if (project.liveUrl && project.liveUrl.trim() !== '') {
            const liveLabel = project.liveButtonText || 'Live Demo';
            buttons.push(`
                <a href="${escapeHTML(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" aria-label="${liveLabel} for ${escapeHTML(project.title)}">
                    <span>${liveLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            `);
        }

        // Secondary Action: GitHub Repository
        if (project.githubUrl && project.githubUrl.trim() !== '') {
            const githubLabel = project.githubButtonText || 'GitHub Repository';
            buttons.push(`
                <a href="${escapeHTML(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="${githubLabel} for ${escapeHTML(project.title)}">
                    <span>${githubLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            `);
        }

        // Dedicated Project Details / Case Study Link (if exists, e.g. planet-hunters.html)
        if (project.detailUrl && project.detailUrl.trim() !== '') {
            const detailLabel = project.detailButtonText || 'View Project';
            buttons.push(`
                <a href="${escapeHTML(project.detailUrl)}" class="btn btn-sm btn-outline" aria-label="${detailLabel} for ${escapeHTML(project.title)}">
                    <span>${detailLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </a>
            `);
        }

        // Dedicated Research Presentation Link (e.g. Dark store strategy presentation)
        if (project.presentationUrl && project.presentationUrl.trim() !== '') {
            const presLabel = project.presentationButtonText || 'Research Presentation';
            buttons.push(`
                <a href="${escapeHTML(project.presentationUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="${presLabel} for ${escapeHTML(project.title)}">
                    <span>${presLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            `);
        }

        // View Details Modal button (for deep dive when modal details exist)
        if (!project.detailUrl && (project.roleDetail || project.keyFeatures || project.securityConcepts || project.metrics)) {
            buttons.push(`
                <button type="button" class="btn btn-sm btn-outline project-details-btn" data-project-index="${index}" data-project-title="${escapeHTML(project.title)}" aria-label="View details: ${escapeHTML(project.title)}">
                    <span>View Details</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </button>
            `);
        }

        // Current Site Indicator
        if (project.isCurrentSite) {
            buttons.push(`
                <span class="project-current-tag">
                    <span class="pulse-dot" style="width:6px;height:6px;"></span>
                    <span>Current Portfolio Website</span>
                </span>
            `);
        }

        const actionsHtml = buttons.length > 0 ? `<div class="project-footer">${buttons.join('')}</div>` : '';

        // Card styling class
        const cardClass = project.featured ? 'project-card project-card-featured reveal' : 'project-card reveal';

        // Image thumbnail linking
        const imageTargetUrl = project.liveUrl || project.detailUrl || project.githubUrl || '';
        const imageHtml = project.image ? `
            <div class="project-thumbnail">
                ${imageTargetUrl ? `<a href="${escapeHTML(imageTargetUrl)}" ${imageTargetUrl.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="Open ${escapeHTML(project.title)}">` : ''}
                <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || project.title)}" loading="lazy">
                ${imageTargetUrl ? `</a>` : ''}
            </div>
        ` : '';

        return `
            <article class="${cardClass}">
                ${featuredLabel}
                <div class="project-header">
                    <div class="project-header-left">
                        <span class="project-category">${escapeHTML(project.category || 'Software')}</span>
                        ${contextHtml}
                    </div>
                    <span class="project-status ${statusClass}">${escapeHTML(project.status)}</span>
                </div>
                ${imageHtml}
                <h3 class="project-title">${escapeHTML(project.title)}</h3>
                ${taglineHtml}
                ${overviewHtml}
                ${problemSolutionHtml}
                ${capabilitiesHtml}
                ${roleHtml}
                ${project.platformAttribution ? `
                    <div class="project-attribution">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        <span>${project.platformAttribution}</span>
                    </div>
                ` : ''}
                <div class="project-tech-stack">
                    ${techTagsHtml}
                </div>
                ${actionsHtml}
            </article>
        `;
    }).join('');
}

/**
 * Render Certifications Section (All 16 Real Certificates)
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

        if (cert.team && cert.team.trim() !== '') {
            metaRows.push(`
                <div class="cert-meta-row">
                    <span class="cert-meta-label">Team:</span>
                    <span class="cert-meta-val">${escapeHTML(cert.team)}</span>
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
        // 1. "View Certificate": direct link opening the actual PDF or image in a new tab (target="_blank")
        // 2. "Preview": opens the interactive modal viewer
        // 3. "Download": downloads the actual certificate file directly
        // 4. "Verify Credential": opens the verified external credential link if available (e.g. OPSWAT)
        const actionBtns = [];

        if (cert.certificateFile && cert.certificateFile.trim() !== '') {
            const encodedFile = encodeURI(cert.certificateFile);
            actionBtns.push(`
                <a href="${encodedFile}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm cert-view-link" aria-label="View certificate in new tab: ${escapeHTML(cert.name)}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span>View Certificate</span>
                </a>
            `);
            actionBtns.push(`
                <button class="btn btn-outline btn-sm cert-btn" data-cert-index="${index}" aria-label="Preview certificate: ${escapeHTML(cert.name)}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <span>Preview</span>
                </button>
            `);
            actionBtns.push(`
                <a href="${encodedFile}" download class="btn btn-outline btn-sm cert-download-link" aria-label="Download certificate: ${escapeHTML(cert.name)}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>Download</span>
                </a>
            `);
        }

        if (cert.credentialUrl && cert.credentialUrl.trim() !== '') {
            actionBtns.push(`
                <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm cert-verify-btn" aria-label="Verify credential: ${escapeHTML(cert.name)}">
                    <span>Verify</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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

        let projectSubtitle = '';
        if (ach.topic && ach.platform) {
            projectSubtitle = `<h4 class="achievement-subtitle">Platform: <span style="color: var(--accent); font-weight: 600;">${escapeHTML(ach.platform)}</span> &bull; Topic: <span>${escapeHTML(ach.topic)}</span></h4>`;
        } else if (ach.topic) {
            projectSubtitle = `<h4 class="achievement-subtitle">Topic: <span>${escapeHTML(ach.topic)}</span></h4>`;
        } else if (ach.project && ach.competition) {
            projectSubtitle = `<h4 class="achievement-subtitle">Project: <span>${escapeHTML(ach.project)}</span> &bull; <span style="color: var(--text-secondary); font-weight: 500;">${escapeHTML(ach.competition)}</span></h4>`;
        } else if (ach.project) {
            projectSubtitle = `<h4 class="achievement-subtitle">Project: <span>${escapeHTML(ach.project)}</span></h4>`;
        } else if (ach.subtitle) {
            projectSubtitle = `<h4 class="achievement-subtitle">${escapeHTML(ach.subtitle)}</h4>`;
        }

        const thumbnailHtml = ach.thumbnail ? `
            <div class="achievement-thumbnail-wrap">
                <a href="${escapeHTML(ach.presentationUrl || ach.detailUrl || '#')}" target="_blank" rel="noopener noreferrer" class="achievement-thumbnail-link" aria-label="Open presentation deck: ${escapeHTML(ach.title)}">
                    <img src="${escapeHTML(ach.thumbnail)}" alt="${escapeHTML(ach.thumbnailAlt || ach.title)}" class="achievement-thumbnail-img" loading="eager" decoding="async" />
                    <div class="achievement-thumbnail-overlay">
                        <span class="achievement-thumbnail-badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            View Deck
                        </span>
                    </div>
                </a>
            </div>
        ` : '';

        const highlightsHtml = ach.highlights && Array.isArray(ach.highlights) && ach.highlights.length > 0 ? `
            <ul class="achievement-highlights">
                ${ach.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join('')}
            </ul>
        ` : '';

        const tagsHtml = ach.tags && Array.isArray(ach.tags) && ach.tags.length > 0 ? `
            <div class="achievement-tags" aria-label="Key areas and technologies">
                ${ach.tags.map(t => `<span class="achievement-tag">${escapeHTML(t)}</span>`).join('')}
            </div>
        ` : '';

        const attributionHtml = ach.platformAttribution ? `
            <div class="achievement-attribution">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <span>${ach.platformAttribution}</span>
            </div>
        ` : '';

        const buttons = [];

        // 1. Dedicated Presentation Link (Unstop / Kreyato)
        if (ach.presentationUrl && ach.presentationUrl.trim() !== '') {
            buttons.push(`
                <a href="${ach.presentationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" aria-label="View research presentation: ${escapeHTML(ach.title)}">
                    <span>View Research Presentation</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            `);
        }

        // 2. Dedicated Case Study / Project Detail Link
        if (ach.detailUrl && ach.detailUrl.trim() !== '') {
            const btnLabel = ach.detailLabel || "View Project";
            const btnClass = ach.presentationUrl ? "btn btn-sm btn-outline" : "btn btn-sm btn-primary";
            buttons.push(`
                <a href="${ach.detailUrl}" class="${btnClass}" aria-label="${escapeHTML(btnLabel)}: ${escapeHTML(ach.title)}">
                    <span>${escapeHTML(btnLabel)}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </a>
            `);
        } else if (ach.link) {
            buttons.push(`
                <a href="${ach.link}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" aria-label="View project: ${escapeHTML(ach.title)}">
                    <span>View Project</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            `);
        }

        // Live Project Demo (if verified/configured)
        if (ach.liveUrl && ach.liveUrl.trim() !== '') {
            buttons.push(`
                <a href="${ach.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="View live project: ${escapeHTML(ach.title)}">
                    <span>Live Demo</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            `);
        }

        // GitHub Repository Link
        if (ach.githubUrl && ach.githubUrl.trim() !== '') {
            buttons.push(`
                <a href="${ach.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="View GitHub repository: ${escapeHTML(ach.title)}">
                    <span>GitHub Repository</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            `);
        }

        // Modal Details button (for CLICKBAIT / SIH)
        if (ach.project && ach.project.toUpperCase().includes('CLICKBAIT')) {
            buttons.push(`
                <button type="button" class="btn btn-sm btn-outline project-details-btn" data-project-title="CLICKBAIT" aria-label="View CLICKBAIT project details">
                    <span>View Details</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </button>
            `);
        }

        // Optional official confirmation document/link
        if (ach.confirmationUrl && ach.confirmationUrl.trim() !== '') {
            buttons.push(`
                <a href="${ach.confirmationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="View official confirmation">
                    <span>View Confirmation</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </a>
            `);
        }

        // Optional certificate link (e.g. Hack4Hack Certificate of Participation)
        if (ach.certificateUrl && ach.certificateUrl.trim() !== '') {
            buttons.push(`
                <a href="${encodeURI(ach.certificateUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="View official certificate: ${escapeHTML(ach.title)}">
                    <span>View Certificate</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            `);
        }

        const actionBtn = buttons.length > 0 ? `<div class="achievement-actions">${buttons.join('')}</div>` : '';

        return `
            <div class="achievement-card reveal revealed">
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
                    ${thumbnailHtml}
                    ${highlightsHtml}
                    ${attributionHtml}
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
 * Fully Functional Contact Form Submission Handler (Vercel Serverless / Resend Integration)
 */
async function handleContactSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const gotchaInput = document.getElementById('contactGotcha');
    const submitBtn = document.getElementById('contactSubmitBtn');
    const feedbackBox = document.getElementById('contactFeedback');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Prevent duplicate submissions if already pending
    if (submitBtn && submitBtn.disabled) {
        return;
    }

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
    const _gotcha = gotchaInput ? gotchaInput.value.trim() : '';

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
    } else if (name.length < 2) {
        isValid = false;
        if (nameError) {
            nameError.textContent = 'Name must be at least 2 characters long.';
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
    } else if (subject.length < 2) {
        isValid = false;
        if (subjectError) {
            subjectError.textContent = 'Subject must be at least 2 characters long.';
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
    } else if (message.length < 5) {
        isValid = false;
        if (messageError) {
            messageError.textContent = 'Message must be at least 5 characters long.';
            messageError.classList.add('visible');
        }
        if (messageInput) messageInput.classList.add('input-error');
        if (!firstInvalidInput) firstInvalidInput = messageInput;
    }

    if (!isValid) {
        if (firstInvalidInput) firstInvalidInput.focus();
        if (feedbackBox) {
            feedbackBox.className = 'form-feedback error visible';
            feedbackBox.innerHTML = '<strong>Please correct the highlighted fields above before submitting.</strong>';
        }
        return;
    }

    // Enter loading state & prevent duplicate submissions
    const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="spinner" aria-hidden="true"></span>
            <span>Sending Message...</span>
        `;
    }
    if (feedbackBox) {
        feedbackBox.className = 'form-feedback info visible';
        feedbackBox.innerHTML = '<span>Delivering your message to Priyanshu, please wait...</span>';
    }

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message,
                _gotcha
            })
        });

        let data = {};
        try {
            data = await response.json();
        } catch (e) {
            data = {};
        }

        if (response.ok && data.success) {
            // Form delivery confirmed by server!
            const form = document.getElementById('contactForm');
            if (form) form.reset();

            if (feedbackBox) {
                feedbackBox.className = 'form-feedback success visible';
                feedbackBox.innerHTML = `
                    <strong>Message Sent Successfully!</strong>
                    <p style="margin-top: 6px;">Thank you, ${escapeHTML(name)}. Your message has been delivered directly to my inbox. I will reply to you at <strong>${escapeHTML(email)}</strong> soon.</p>
                `;
            }
        } else {
            // Delivery failed or service unconfigured: PRESERVE user input in form fields
            const errorMsg = (data && data.error) || 'Failed to send message. Please try again.';
            if (feedbackBox) {
                feedbackBox.className = 'form-feedback error visible';
                feedbackBox.innerHTML = `
                    <strong>Delivery Issue</strong>
                    <p style="margin-top: 6px;">${escapeHTML(errorMsg)}</p>
                    <p style="margin-top: 6px; font-size: 0.85rem; color: var(--text-secondary);">Your entered information has been preserved. You can also contact me directly at <a href="mailto:${portfolioData.contact.email}" style="color: var(--accent); text-decoration: underline;">${portfolioData.contact.email}</a>.</p>
                `;
            }
        }
    } catch (err) {
        // Network or offline error: PRESERVE user input
        if (feedbackBox) {
            feedbackBox.className = 'form-feedback error visible';
            feedbackBox.innerHTML = `
                <strong>Network Error</strong>
                <p style="margin-top: 6px;">Unable to reach the server. Please check your internet connection or email me directly at <a href="mailto:${portfolioData.contact.email}" style="color: var(--accent); text-decoration: underline;">${portfolioData.contact.email}</a>.</p>
            `;
        }
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnContent;
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
                    <!-- Honeypot spam trap -->
                    <div style="display:none;" aria-hidden="true">
                        <label for="contactGotcha">Leave this field blank</label>
                        <input type="text" id="contactGotcha" name="_gotcha" tabindex="-1" autocomplete="off">
                    </div>

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

    // 3. Featured & Competition Projects (FindIt, Planet Hunters, Dark Store, CLICKBAIT, Portfolio)
    const resumeProjects = (projects || []).filter(p =>
        p.featured || p.isCurrentSite || p.title.toLowerCase().includes('dark store')
    ).slice(0, 5);
    const projectsHtml = resumeProjects.map(proj => {
        const isClickbait = proj.title.toUpperCase().includes('CLICKBAIT');
        const bullets = [];

        if (proj.role) {
            bullets.push(escapeHTML(proj.role));
        }

        if (proj.title.toLowerCase().includes('findit')) {
            bullets.push("Engineered full-stack Smart Lost & Found platform with FastAPI backend, React/TypeScript frontend, AI-powered semantic matching, secure ownership claims, and Cloudinary media management.");
        } else if (proj.title.toLowerCase().includes('planet hunter')) {
            bullets.push("Developed an astronomy-focused Machine Learning solution using detector-aware cotrending, 88 domain-engineered features, and a heterogeneous LightGBM, HistGradientBoosting, and CatBoost ensemble. Completed Round 1 and was shortlisted for Round 2 of the HACK4HACK ML Challenge 2026.");
            bullets.push("Engineered 88 domain-informed features with Camera/CCD cotrending; deployed a 5-fold tri-architecture ensemble (LightGBM, HistGradientBoosting, CatBoost) achieving 0.6455 OOF Macro F1 and 0.6336 detector-channel generalization across 8 classes.");
            bullets.push("Engineered dual telemetry interfaces (Next.js 16 web application and Python Streamlit mission control) with automated 14-point schema & physics validator ensuring bitwise reproducibility.");
        } else if (proj.title.toLowerCase().includes('dark store') || proj.title.toLowerCase().includes('prompt to podium')) {
            bullets.push("Conducted competition-based business strategy research for Unstop Prompt to Podium, examining quick-commerce dark store dynamics, platform private-label competition, and channel margin disparities (4.5% quick commerce vs ~25% traditional retail & D2C) in Delhi NCR.");
            bullets.push("Constructed a verified 24-month multi-scenario customer cohort model evaluating unit economics (Base-case ROI: -50.6%, Year-1 LTV/CAC: 1.12x on ₹1,148L cumulative investment).");
            bullets.push("Formulated an actionable 5-point strategic defence framework (freshness moats, batch QR traceability, SKU architecture, and Kirana profit engine protection) supported by a 12-month phased roadmap and enterprise risk register.");
            bullets.push("Research and presentation developed with the assistance of Kreyato AI.");
        } else if (isClickbait) {
            bullets.push("Contributed to backend verification logic (Ed25519 signing/verification, SHA-256 hashing, public-key verification, expiry/revocation checking, and tamper detection) for digital communications.");
        } else if (proj.isCurrentSite) {
            bullets.push("Engineered a responsive personal portfolio featuring dynamic Vanilla JavaScript data rendering, custom dark-theme styling, accessible modal viewers, and automated ATS PDF generation with Puppeteer.");
            bullets.push("Integrated comprehensive showcase hubs for 6 projects, 16 verified certifications, hackathons, and research case studies with continuous CI/CD deployment on Vercel and GitHub Pages.");
        }

        const bulletsList = bullets.length > 0
            ? `<ul class="resume-item-bullets">${bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
            : '';

        const techList = proj.technologies && proj.technologies.length > 0
            ? `<div class="resume-tech-line"><strong>Technologies:</strong> ${proj.technologies.join(', ')}</div>`
            : '';

        const statusYear = proj.title.toLowerCase().includes('planet hunter') ? '2026' : (proj.status === 'In Development' || proj.status === 'In Progress' ? '2026' : (proj.status || ''));
        let resumeProjectTitle = proj.title;
        if (proj.title.toLowerCase().includes('planet hunter')) {
            resumeProjectTitle = "Planet Hunters — Find New Worlds in Starlight | HACK4HACK 2026";
        } else if (proj.title.toLowerCase().includes('dark store') || proj.title.toLowerCase().includes('prompt to podium')) {
            resumeProjectTitle = "Dark Store Private-Label Defence Strategy — Unstop Prompt to Podium";
        }

        return `
            <div class="resume-entry">
                <div class="resume-entry-header">
                    <div>
                        <h4 class="resume-entry-title">${escapeHTML(resumeProjectTitle)}</h4>
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

    // 5. Achievements (Smart India Hackathon 2026, HACK4HACK 2026 & Unstop Prompt to Podium)
    const achHtml = (achievements || []).map(ach => {
        const title = ach.resumeTitle || ach.title;
        const desc = ach.resumeDesc || ach.description;
        const subtitleText = ach.topic
            ? `Topic: ${escapeHTML(ach.topic)} &bull; ${escapeHTML(ach.status || '')}`
            : `Project: ${escapeHTML(ach.project || '')} &bull; ${escapeHTML(ach.status || '')}`;
        return `
        <div class="resume-entry">
            <div class="resume-entry-header">
                <div>
                    <h4 class="resume-entry-title">${escapeHTML(title)}</h4>
                    <span class="resume-entry-subtitle">${subtitleText}</span>
                </div>
                <span class="resume-entry-date">${escapeHTML(ach.year || '2026')}</span>
            </div>
            <p class="resume-entry-desc">${escapeHTML(desc)}</p>
        </div>
        `;
    }).join('');

    container.innerHTML = `
        <article class="resume-document">
            <!-- Header -->
            <header class="resume-header">
                <h3 class="resume-name">${escapeHTML(personal.name)}</h3>
                <p class="resume-headline">${escapeHTML(resume.headline || 'Computer Science Engineering Student | AI & ML Enthusiast')}</p>
                <div class="resume-contact-row">
                    <span><a href="mailto:${contact.email}">${contact.email}</a></span>
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
                        <span class="resume-skill-value">${(skills.programming || []).map(s => typeof s === 'string' ? s : s.name).join(', ')}</span>
                    </div>
                    <div class="resume-skill-row">
                        <span class="resume-skill-key">Web Development:</span>
                        <span class="resume-skill-value">${((list) => {
            const arr = (list || []).map(s => typeof s === 'string' ? s : s.name);
            return arr.includes('JavaScript') ? arr.join(', ') : `${arr.join(', ')}, JavaScript`;
        })(skills.webDevelopment)}</span>
                    </div>
                    <div class="resume-skill-row">
                        <span class="resume-skill-key">Core Foundations &amp; Learning:</span>
                        <span class="resume-skill-value">${(portfolioData.currentlyLearning || []).map(s => typeof s === 'string' ? s : (s.topic || s.title)).join(', ')}</span>
                    </div>
                    <div class="resume-skill-row">
                        <span class="resume-skill-key">Developer Tools:</span>
                        <span class="resume-skill-value">${(skills.tools || []).map(s => typeof s === 'string' ? s : s.name).join(', ')}</span>
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
    // Step B: Navbar, Lenis Ultra-Smooth Scrolling & Micro-Interactions
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    const backToTopBtn = document.getElementById('backToTop');

    // Mobile Menu Toggle
    const toggleMenu = () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    };

    const closeMenu = () => {
        if (!navMenu) return;
        navMenu.classList.remove('open');
        if (navToggle) {
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    };

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    document.addEventListener('click', (event) => {
        if (navbar && !navbar.contains(event.target) && navMenu && navMenu.classList.contains('open')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
            closeMenu();
        }
    });

    // 1. Sticky Navbar Visual Treatment on Scroll
    const handleNavbarScroll = (scrollY = window.scrollY) => {
        if (!navbar) return;
        if (scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // 2. Reading Progress Indicator Bar
    const updateScrollProgress = (scrollY = window.scrollY) => {
        if (!scrollProgressBar) return;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
        scrollProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    };

    // 3. Floating Back to Top Button
    const updateBackToTop = (scrollY = window.scrollY) => {
        if (!backToTopBtn) return;
        if (scrollY > 380) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };

    // 4. Active Navigation Highlighting (Accurate Section Scrollspy)
    const highlightActiveNav = (scrollY = window.scrollY) => {
        const scrollPosition = scrollY + 140;
        const isBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60;

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

    // Unified scroll tick dispatcher
    const onScrollTick = (scrollY = window.scrollY) => {
        handleNavbarScroll(scrollY);
        updateScrollProgress(scrollY);
        updateBackToTop(scrollY);
        highlightActiveNav(scrollY);
    };

    // 5. Initialize Lenis Smooth Scrolling Engine
    let lenis = null;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && typeof window.Lenis !== 'undefined') {
        try {
            lenis = new window.Lenis({
                lerp: 0.075, // Silky linear interpolation factor (~15-20% more gradual, elegant controlled inertia)
                wheelMultiplier: 0.82, // Gentle wheel acceleration for natural, luxurious glide
                touchMultiplier: 1, // 100% native gesture response on mobile touch
                smoothTouch: false, // Maintain native mobile touch inertia
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                infinite: false
            });

            window.lenis = lenis;

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            lenis.on('scroll', (e) => {
                onScrollTick(e.scroll);
            });
        } catch (e) {
            console.warn('Lenis smooth scrolling fallback to native:', e);
            lenis = null;
        }
    }

    // Fallback standard scroll listener when Lenis is inactive
    if (!lenis) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    onScrollTick(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // Initial check
    onScrollTick(window.scrollY);

    // 6. Smooth Scrolling for Internal Links (Anchor Navigation)
    const scrollToTarget = (targetEl) => {
        if (!targetEl) return;
        targetEl.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
        const navbarHeight = navbar ? navbar.offsetHeight : 72;
        if (lenis) {
            lenis.scrollTo(targetEl, {
                offset: -navbarHeight - 16,
                duration: 1.4,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        } else {
            const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
            window.scrollTo({
                top: targetPos,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        }
    };

    // Back to top button action
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            if (lenis) {
                lenis.scrollTo(0, {
                    duration: 1.4,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            } else {
                window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            }
        });
    }

    // Global anchor click interception
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (!href || href === '#' || href === '#main-content') return;

        const targetEl = document.querySelector(href);
        if (targetEl) {
            e.preventDefault();
            closeMenu();
            scrollToTarget(targetEl);
            if (history.pushState) {
                history.pushState(null, '', href);
            }
        }
    });

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
        if (window.lenis) {
            window.lenis.start();
        }
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
                const encodedFile = encodeURI(cert.certificateFile);
                if (isImage) {
                    modalCertViewer.innerHTML = `
                        <div class="modal-img-container">
                            <img src="${encodedFile}" alt="Official Certificate: ${escapeHTML(cert.name)} - ${escapeHTML(cert.organization || '')}" class="modal-cert-img" loading="eager" />
                        </div>
                    `;
                } else if (cert.previewImage) {
                    const encodedPreview = encodeURI(cert.previewImage);
                    modalCertViewer.innerHTML = `
                        <div class="modal-img-container">
                            <img src="${encodedPreview}" alt="Official Certificate: ${escapeHTML(cert.name)} - ${escapeHTML(cert.organization || '')}" class="modal-cert-img" loading="eager" />
                        </div>
                        <iframe src="${encodedFile}#toolbar=0" class="modal-cert-pdf" title="Official Certificate: ${escapeHTML(cert.name)}" style="display:none;" aria-hidden="true"></iframe>
                    `;
                } else {
                    const previewBtn = cert.previewImage ? `
                        <a href="${encodeURI(cert.previewImage)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-xs" aria-label="Open preview image in new tab">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                            <span>Preview Image</span>
                        </a>
                    ` : '';
                    modalCertViewer.innerHTML = `
                        <div class="modal-pdf-container">
                            <iframe src="${encodedFile}#toolbar=0" class="modal-cert-pdf" title="Official Certificate: ${escapeHTML(cert.name)}"></iframe>
                            <div class="modal-pdf-fallback-bar">
                                <span class="modal-pdf-fallback-text">Official document viewer</span>
                                <div class="modal-pdf-fallback-links">
                                    ${previewBtn}
                                    <a href="${encodedFile}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-xs" aria-label="Open PDF in new tab">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        <span>Open in New Tab</span>
                                    </a>
                                    <a href="${encodedFile}" download class="btn btn-outline btn-xs" aria-label="Download PDF">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                        <span>Download</span>
                                    </a>
                                </div>
                            </div>
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
        if (cert.team && cert.team.trim() !== '') {
            extraRows.push(`<div><strong>Team:</strong> <span>${escapeHTML(cert.team)}</span></div>`);
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
                const encodedFile = encodeURI(cert.certificateFile);
                footerBtns.push(`
                    <a href="${encodedFile}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" aria-label="${btnLabel}: ${escapeHTML(cert.name)}">
                        <span>${btnLabel}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                `);
                footerBtns.push(`
                    <a href="${encodedFile}" download class="btn btn-outline btn-sm" aria-label="Download Certificate: ${escapeHTML(cert.name)}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <span>Download Certificate</span>
                    </a>
                `);
            }

            if (cert.previewImage && cert.previewImage.trim() !== '') {
                footerBtns.push(`
                    <a href="${encodeURI(cert.previewImage)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="View preview image: ${escapeHTML(cert.name)}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        <span>Preview Image</span>
                    </a>
                `);
            }

            if (cert.credentialUrl && cert.credentialUrl.trim() !== '') {
                footerBtns.push(`
                    <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm cert-verify-btn" aria-label="Verify credential on ${escapeHTML(cert.organization || 'issuing body')}">
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
        if (window.lenis) {
            window.lenis.stop();
        }
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
        if (window.lenis) {
            window.lenis.start();
        }
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

            const imageBannerHtml = project.image ? `
                <div class="project-modal-image-banner" style="margin-bottom: 20px; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--border-subtle); aspect-ratio: 16 / 9; max-height: 240px; background: rgba(0,0,0,0.3);">
                    <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || project.title)}" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy">
                </div>
            ` : '';

            const overviewHtml = `
                ${imageBannerHtml}
                <div class="project-modal-section">
                    <h4 class="project-modal-section-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        Project Overview
                    </h4>
                    <p>${escapeHTML(project.overview || project.description)}</p>
                </div>
            `;

            let problemSolutionModalHtml = '';
            if (project.problemSolution) {
                problemSolutionModalHtml = `
                    <div class="project-modal-section">
                        <h4 class="project-modal-section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            Problem & Solution
                        </h4>
                        <p>${escapeHTML(project.problemSolution)}</p>
                    </div>
                `;
            }

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

            let metricsHtml = '';
            if (project.metrics && project.metrics.length > 0) {
                metricsHtml = `
                    <div class="project-modal-section">
                        <h4 class="project-modal-section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                            Key Verified Metrics & Validation
                        </h4>
                        <ul class="project-modal-list">
                            ${project.metrics.map(m => `<li>${escapeHTML(m)}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            projectModalBody.innerHTML = `
                <div class="project-modal-body">
                    ${subtitleHtml}
                    <div class="project-modal-section">
                        <div class="project-modal-meta-grid">
                            ${metaItems.join('')}
                        </div>
                    </div>
                    ${overviewHtml}
                    ${problemSolutionModalHtml}
                    ${keyFeaturesHtml}
                    ${capabilitiesHtml}
                    ${metricsHtml}
                    ${teamContextHtml}
                    ${roleHtml}
                    ${techHtml}
                </div>
            `;
        }

        if (projectModalFooter) {
            const footerBtns = [];

            if (project.detailUrl && project.detailUrl.trim() !== '') {
                const detailModalLabel = project.detailButtonText ? `View Full Project` : 'View Case Study';
                footerBtns.push(`
                    <a href="${project.detailUrl}" class="btn btn-primary btn-sm" aria-label="${detailModalLabel} for ${escapeHTML(project.title)}">
                        <span>${detailModalLabel}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </a>
                `);
            }

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

            if (project.presentationUrl && project.presentationUrl.trim() !== '') {
                const presModalLabel = project.presentationButtonText || 'View Research Presentation';
                footerBtns.push(`
                    <a href="${project.presentationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="${presModalLabel} for ${escapeHTML(project.title)}">
                        <span>${presModalLabel}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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
        if (window.lenis) {
            window.lenis.stop();
        }
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
            threshold: 0.05,
            rootMargin: '0px 0px 40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('revealed'));
    }

    // Fail-safe visibility check: immediately reveal all elements currently inside or near viewport
    const checkViewportReveals = () => {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < viewportHeight + 100 && rect.bottom > -100) {
                el.classList.add('revealed');
            }
        });
    };
    checkViewportReveals();
    setTimeout(checkViewportReveals, 250);
    setTimeout(checkViewportReveals, 750);
    window.addEventListener('scroll', checkViewportReveals, { passive: true });
    window.addEventListener('resize', checkViewportReveals, { passive: true });

    console.log("Priyanshu Karan Portfolio — Complete.");
});
