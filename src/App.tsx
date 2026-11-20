import { useState, useEffect, useCallback } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  X, 
  Copy, 
  Check, 
  Terminal, 
  ExternalLink,
  Menu,
  ArrowUp,
  MapPin,
  Clock
} from 'lucide-react';

// --- DATA STRUCTURES & VERIFIED CV CONTENT ---

const PROJECTS_DATA = [
  {
    id: 'saaideni',
    number: '01',
    title: 'SAAIDENI',
    alias: 'SILENT SIGNAL',
    subtitle: 'Offline Emergency Communication Android Application',
    status: 'IN DEVELOPMENT (CONCEPT & PROTOTYPE)',
    category: 'Mobile / Android Engineering',
    year: '2025–2026',
    brief: 'An offline-first Android application designed to help travelers and individuals communicate essential emergency needs across language barriers without internet connectivity.',
    stack: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Offline-First Architecture', 'Vector Graphics'],
    problem: 'Travelers, refugees, and individuals facing emergencies abroad frequently encounter critical communication breakdowns due to language barriers, loss of cellular coverage, or lack of roaming data.',
    solution: 'Saaideni (Silent Signal) transforms urgent medical, safety, and operational needs into universally understandable visual pictograms and structured signals that function 100% offline without remote servers or mandatory account creation.',
    contribution: 'Conceived the product concept, designed the visual pictogram taxonomy, and implemented the Android prototype using Kotlin and Jetpack Compose with strict offline data persistence.',
    keyFeatures: [
      'Offline-First Architecture — Zero network dependency or external API calls required for core function.',
      'Universal Pictogram Matrix — High-contrast icon sets for medical, directional, dietary, and security assistance.',
      'Localized Text Pairs — Instant dual-language displaying (User native language + Target country language).',
      'Privacy-First Design — Zero user data leaves the device; no account registration required.'
    ],
    artworkType: 'COMPASS_RADIUS'
  },
  {
    id: 'quimbielle',
    number: '02',
    title: 'QUIMBIELLE',
    alias: 'COMMERCIAL PAPER PLATFORM',
    subtitle: 'Commercial Paper Digitisation & Workflow Platform',
    status: 'DEVELOPED — FINAL-YEAR / GROUPE SIP',
    category: 'Full-Stack Web Engineering',
    year: '2026',
    brief: 'A full-stack enterprise web platform designed to digitise Tunisian commercial paper management (Kambiale / Bill of Exchange) with precision form editing, validation, and automated PDF workflows.',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM'],
    problem: 'Tunisian commercial transactions heavily rely on paper Bills of Exchange (Kambiale). Physical preparation leads to alignment errors, compliance failures, manual tracking delays, and inefficient printing.',
    solution: 'Engineered a full-stack platform featuring pixel-accurate form layout positioning, coordinate-calibrated document printing, automated bill record keeping, role-based user management, and instant PDF generation.',
    contribution: 'Designed and implemented the end-to-end full-stack application for Groupe SIP: built reusable React components, Prisma database schemas, authentication middleware, and precise printer calibration tools.',
    keyFeatures: [
      'Coordinate Calibration Engine — Exact millimeter positioning for bill field printing on physical forms.',
      'Role-Based Authorization — Granular controls for accountants, approvers, and system administrators.',
      'Relational Audit Trail — PostgreSQL schema managed via Prisma for complete transaction history.',
      'Automated Document Generation — Instant vector PDF output formatted to legal financial specs.'
    ],
    artworkType: 'BLUEPRINT_GRID'
  },
  {
    id: 'machine-maintenance',
    number: '03',
    title: 'MACHINE MAINTENANCE',
    alias: 'INDUSTRIAL MMS',
    subtitle: 'Industrial Maintenance Management System',
    status: 'COMPLETED ACADEMIC / FULL-STACK BUILD',
    category: 'Full-Stack Web & Industrial Systems',
    year: '2025',
    brief: 'A full-stack industrial machine maintenance application built to monitor equipment status, coordinate preventive schedules, and log corrective interventions.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT Authentication', 'REST APIs'],
    problem: 'Manufacturing operations experience costly downtime when machine maintenance schedules are tracked informally or logged across fragmented paper spreadsheets.',
    solution: 'Developed a centralized management system that structures machine telemetry, automates preventive maintenance queues, tracks repair histories, and secures operational tasks through JWT authentication.',
    contribution: 'Built the full application stack including MySQL relational tables, Express backend controllers, authentication logic, and dynamic React reporting interfaces.',
    keyFeatures: [
      'Preventive & Corrective Tracking — Distinct workflows for routine service vs. urgent repairs.',
      'Machine Status Telemetry — Real-time operational state indicators (Active, Maintenance, Offline).',
      'JWT Authentication & Roles — Secure session handling for engineers, technicians, and managers.',
      'Historical Repair Logs — Queryable record of all replaced parts and downtime durations.'
    ],
    artworkType: 'GEAR_NODE'
  },
  {
    id: 'medece',
    number: '04',
    title: 'MEDECE',
    alias: 'SCIENTIFIC PUBLISHING',
    subtitle: 'Scientific Community & Content Management Platform',
    status: 'COMPLETED FULL-STACK BUILD',
    category: 'Web Application & Editorial CMS',
    year: '2025',
    brief: 'A specialized content publishing platform for scientific research communities, facilitating article authoring, categorized peer browsing, and content filtering.',
    stack: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT Authentication', 'CSS3'],
    problem: 'Academic communities require clean, structured reading environments free of commercial clutter, with distinct categorization tailored to scientific fields.',
    solution: 'Designed an editorial web application focused on high typographic legibility, multi-tag filtering, peer contribution workflows, and secure author authentication.',
    contribution: 'Engineered backend REST endpoints in Express, designed the relational database structure in MySQL, and crafted a minimal editorial frontend UI in React.',
    keyFeatures: [
      'Editorial Reading Experience — Clean typographic hierarchy optimized for lengthy scientific text.',
      'Granular Category Filtering — Instant navigation across research domains and peer tags.',
      'Author Account Management — Secure article draft, edit, and publishing state control.',
      'Protected API Routes — Middleware verification for content submission and moderation.'
    ],
    artworkType: 'EDITORIAL_MATRIX'
  },
  {
    id: 'meteona',
    number: '05',
    title: 'METEONA',
    alias: 'WEATHER DASHBOARD',
    subtitle: 'Weather Intelligence & Geolocation Dashboard',
    status: 'COMPLETED — 3-PERSON TEAM PROJECT',
    category: 'Frontend Engineering & API Integration',
    year: '2025',
    brief: 'A dynamic weather intelligence dashboard integrating real-time atmospheric data visualisations, multi-city tracking, and geolocation capabilities.',
    stack: ['Angular', 'Laravel', 'TypeScript', 'HTML5', 'CSS3', 'REST Weather APIs'],
    problem: 'Standard weather apps often clutter information with advertisements and lack clear visual trend comparisons for multi-location analysis.',
    solution: 'Built a responsive dashboard combining an Angular frontend with a Laravel API proxy layer to deliver instant weather diagnostics and atmospheric charts.',
    contribution: 'Co-developed in a three-person team: focused on Angular component structure, dynamic chart rendering, geolocation positioning, and integration with the Laravel backend API.',
    keyFeatures: [
      'Dynamic Atmospheric Visualizations — Clean graphical trend curves for temperature and humidity.',
      'Geolocation Positioning — Automatic local weather detection paired with global search.',
      'Laravel API Gateway — Backend caching and normalization of external meteorological feeds.',
      'Responsive Dashboard Grid — Desktop-first analytics layout adapted for tablet and mobile viewports.'
    ],
    artworkType: 'ISOBAR_CONTOUR'
  }
];

const EXPERIENCE_DATA = [
  {
    role: 'GENERAL MANAGER',
    organization: 'Mic Check06',
    period: 'March 2025 – Present',
    type: 'Cultural & Event Operations',
    description: 'Directing overall planning, team allocation, and operational execution for live music concerts and cultural festivals. Coordinating cross-functional teams spanning visual arts, business development, marketing, sponsorship, and site logistics.'
  },
  {
    role: 'PROJECT MANAGER & FOUNDER',
    organization: 'BARQ Brand',
    period: 'August 2025 – Present',
    type: 'Product & Brand Development',
    description: 'Founded and managing an independent apparel brand. Directing end-to-end product design, visual identity, brand positioning, supplier relationships, production workflows, e-commerce strategy, and digital promotional campaigns.'
  },
  {
    role: 'ACTIVE MEMBER',
    organization: 'JCI Bouhjar',
    period: 'May 2025 – Present',
    type: 'Community Leadership',
    description: 'Contributing to youth leadership projects, civic community initiatives, promotional media creation, event planning, and official administrative documentation.'
  }
];

const SKILLS_DATA = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'C#', 'C++', 'Python', 'PHP', 'Kotlin', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Angular', 'Vue.js (basic)', 'Jetpack Compose', 'HTML5', 'CSS3 / Tailwind CSS', 'Bootstrap'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Laravel', 'REST APIs', 'JWT Auth', 'Middleware Architecture'] },
  { category: 'Databases & ORM', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM', 'phpMyAdmin', 'PL/SQL'] },
  { category: 'Tools & Workflow', items: ['Git / GitHub', 'VS Code', 'Visual Studio', 'XAMPP', 'Composer', 'pnpm', 'Turborepo', 'Figma', 'Canva'] }
];

const CERTIFICATIONS_DATA = [
  { date: 'Nov 2026', title: 'AI Foundation Certificate', issuer: 'CertiProf', note: 'AI Principles & Machine Learning Fundamentals' },
  { date: 'Sep 2026', title: 'Getting Started with Artificial Intelligence / Generative AI', issuer: 'IBM', note: 'AI Workflows & Generative Models' },
  { date: 'Mar 2026', title: 'Microsoft Office Specialist — Excel Expert (Excel 2019)', issuer: 'Microsoft', note: 'Advanced Data Analysis & Models' },
  { date: 'May 2024', title: 'CCNA — Switching, Routing, and Wireless Essentials', issuer: 'Cisco', note: 'Networking Protocols & Infrastructure' },
  { date: '2020', title: 'Communication Skills Certificate', issuer: 'JCI Bouhjar', note: 'Public Speaking & Media' },
  { date: '2020', title: 'Content Creation Training', issuer: 'House of Culture & Cinema Club of Bouhjar', note: 'Digital Media Production' }
];

// --- CUSTOM ARTWORK COMPONENT FOR EACH PROJECT ---

const ProjectArtwork = ({ type, title }: { type: string; title: string }) => {
  return (
    <div className="relative w-full h-full min-h-[260px] bg-[#171915] border border-[#34382E] overflow-hidden flex items-center justify-center group/art">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #34382E 1px, transparent 1px), linear-gradient(to bottom, #34382E 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {type === 'COMPASS_RADIUS' && (
        <svg className="w-full h-full max-h-[380px] p-6 transition-transform duration-700 ease-out group-hover/art:scale-105" viewBox="0 0 400 300" fill="none" stroke="currentColor">
          <circle cx="200" cy="150" r="30" stroke="#C8F169" strokeWidth="1.5" className="animate-pulse" />
          <circle cx="200" cy="150" r="60" stroke="#F0F0E9" strokeOpacity="0.4" strokeDasharray="4 4" />
          <circle cx="200" cy="150" r="95" stroke="#F0F0E9" strokeOpacity="0.2" />
          <circle cx="200" cy="150" r="130" stroke="#34382E" strokeWidth="1" />
          <line x1="200" y1="20" x2="200" y2="280" stroke="#34382E" />
          <line x1="40" y1="150" x2="360" y2="150" stroke="#34382E" />
          <path d="M190 150H210M200 140V160" stroke="#C8F169" strokeWidth="2" />
          <text x="210" y="40" fill="#92958A" fontSize="9" fontFamily="DM Mono">SIGNAL: OFF-GRID</text>
          <text x="210" y="270" fill="#92958A" fontSize="9" fontFamily="DM Mono">LAT 35.67° N</text>
        </svg>
      )}

      {type === 'BLUEPRINT_GRID' && (
        <svg className="w-full h-full max-h-[380px] p-6 transition-transform duration-700 ease-out group-hover/art:scale-105" viewBox="0 0 400 300" fill="none">
          <rect x="40" y="40" width="320" height="220" stroke="#F0F0E9" strokeOpacity="0.3" strokeWidth="1" />
          <rect x="55" y="55" width="290" height="190" stroke="#34382E" strokeWidth="1" strokeDasharray="3 3" />
          {/* Header Lines */}
          <line x1="75" y1="75" x2="220" y2="75" stroke="#C8F169" strokeWidth="2" />
          <line x1="75" y1="95" x2="180" y2="95" stroke="#92958A" strokeWidth="1" />
          {/* Data Fields */}
          <rect x="75" y="120" width="110" height="24" fill="#1E211B" stroke="#34382E" />
          <rect x="200" y="120" width="125" height="24" fill="#1E211B" stroke="#34382E" />
          <rect x="75" y="155" width="250" height="30" fill="#1E211B" stroke="#34382E" />
          {/* Calibration Stamp */}
          <circle cx="280" cy="210" r="22" stroke="#C8F169" strokeWidth="1.5" />
          <text x="264" y="214" fill="#C8F169" fontSize="8" fontFamily="DM Mono">VALIDATED</text>
          <text x="75" y="220" fill="#92958A" fontSize="9" fontFamily="DM Mono">KAMBIALE / BILL OF EXCHANGE</text>
        </svg>
      )}

      {type === 'GEAR_NODE' && (
        <svg className="w-full h-full max-h-[380px] p-6 transition-transform duration-700 ease-out group-hover/art:scale-105" viewBox="0 0 400 300" fill="none" stroke="currentColor">
          <g transform="translate(200, 150)">
            <circle cx="0" cy="0" r="55" stroke="#F0F0E9" strokeOpacity="0.4" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="25" stroke="#C8F169" strokeWidth="2" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <line 
                key={i} 
                x1={Math.cos(angle * Math.PI / 180) * 55} 
                y1={Math.sin(angle * Math.PI / 180) * 55} 
                x2={Math.cos(angle * Math.PI / 180) * 70} 
                y2={Math.sin(angle * Math.PI / 180) * 70} 
                stroke="#F0F0E9" 
                strokeWidth="4" 
              />
            ))}
          </g>
          <path d="M80 80L145 120M320 80L255 120M80 220L145 180M320 220L255 180" stroke="#34382E" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="80" cy="80" r="8" fill="#1E211B" stroke="#C8F169" />
          <circle cx="320" cy="80" r="8" fill="#1E211B" stroke="#F0F0E9" />
          <circle cx="80" cy="220" r="8" fill="#1E211B" stroke="#F0F0E9" />
          <circle cx="320" cy="220" r="8" fill="#1E211B" stroke="#C8F169" />
          <text x="35" y="40" fill="#92958A" fontSize="9" fontFamily="DM Mono">SYSTEM TELEMETRY</text>
        </svg>
      )}

      {type === 'EDITORIAL_MATRIX' && (
        <svg className="w-full h-full max-h-[380px] p-6 transition-transform duration-700 ease-out group-hover/art:scale-105" viewBox="0 0 400 300" fill="none">
          {/* Article Columns */}
          <rect x="50" y="50" width="130" height="200" fill="#1E211B" stroke="#34382E" />
          <line x1="65" y1="75" x2="150" y2="75" stroke="#C8F169" strokeWidth="2" />
          <line x1="65" y1="95" x2="165" y2="95" stroke="#F0F0E9" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="65" y1="110" x2="160" y2="110" stroke="#F0F0E9" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="65" y1="125" x2="140" y2="125" stroke="#F0F0E9" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="65" y1="140" x2="165" y2="140" stroke="#F0F0E9" strokeOpacity="0.4" strokeWidth="1" />

          <rect x="220" y="50" width="130" height="200" fill="#1E211B" stroke="#34382E" />
          <line x1="235" y1="75" x2="310" y2="75" stroke="#F0F0E9" strokeWidth="2" />
          <line x1="235" y1="95" x2="335" y2="95" stroke="#92958A" strokeWidth="1" />
          <line x1="235" y1="110" x2="320" y2="110" stroke="#92958A" strokeWidth="1" />
          <line x1="235" y1="125" x2="330" y2="125" stroke="#92958A" strokeWidth="1" />
          
          <path d="M180 100 H220" stroke="#C8F169" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="50" y="35" fill="#92958A" fontSize="9" fontFamily="DM Mono">PUBLISHING MATRIX / MEDECE</text>
        </svg>
      )}

      {type === 'ISOBAR_CONTOUR' && (
        <svg className="w-full h-full max-h-[380px] p-6 transition-transform duration-700 ease-out group-hover/art:scale-105" viewBox="0 0 400 300" fill="none">
          <path d="M 20 80 Q 150 20 220 100 T 380 90" stroke="#F0F0E9" strokeOpacity="0.2" strokeWidth="1.5" />
          <path d="M 20 130 Q 140 70 240 140 T 380 150" stroke="#C8F169" strokeWidth="2" />
          <path d="M 20 180 Q 160 120 210 200 T 380 210" stroke="#F0F0E9" strokeOpacity="0.3" strokeWidth="1.5" />
          <path d="M 20 230 Q 130 180 230 240 T 380 260" stroke="#92958A" strokeOpacity="0.2" strokeWidth="1" />
          
          <circle cx="240" cy="140" r="4" fill="#C8F169" />
          <text x="250" y="135" fill="#C8F169" fontSize="9" fontFamily="DM Mono">1013 HPA</text>
          <text x="30" y="40" fill="#92958A" fontSize="9" fontFamily="DM Mono">ISOBAR CONTOURS / METEONA</text>
        </svg>
      )}

      {/* Concept Badge */}
      <div className="absolute bottom-3 left-3 bg-[#10110F]/90 backdrop-blur-md px-2.5 py-1 border border-[#34382E]">
        <span className="font-mono text-[10px] text-[#92958A] tracking-wider uppercase">
          CONCEPTUAL STUDY // {title}
        </span>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

export default function App() {
  const [activeSection, setActiveSection] = useState('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS_DATA)[number] | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [localTime, setLocalTime] = useState('');

  // Live Tunisia Time (GMT+1)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Tunis',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setLocalTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll Progress Indicator & Active Section Observer
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['top', 'about', 'work', 'experience', 'skills', 'education', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for Case Study modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight') {
        const currentIndex = PROJECTS_DATA.findIndex(p => p.id === selectedProject.id);
        const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
        setSelectedProject(PROJECTS_DATA[nextIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = PROJECTS_DATA.findIndex(p => p.id === selectedProject.id);
        const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
        setSelectedProject(PROJECTS_DATA[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText('mhamdirayen@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#10110F] text-[#F0F0E9] font-sans selection:bg-[#C8F169] selection:text-[#10110F] relative">
      
      {/* Top Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#C8F169] z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* --- STICKY HEADER --- */}
      <header className="sticky top-0 z-40 bg-[#10110F]/90 backdrop-blur-md border-b border-[#34382E]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          
          <button 
            onClick={() => scrollTo('top')}
            className="font-mono text-xs tracking-wider uppercase text-[#F0F0E9] hover:text-[#C8F169] transition-colors flex items-center gap-2 group"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8F169] group-hover:scale-125 transition-transform" />
            <span className="font-bold">RAYEN MHAMDI®</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs tracking-wider text-[#92958A]">
            {[
              { id: 'about', label: '01. ABOUT' },
              { id: 'work', label: '02. WORK' },
              { id: 'experience', label: '03. EXPERIENCE' },
              { id: 'skills', label: '04. STACK' },
              { id: 'education', label: '05. EDUCATION' },
              { id: 'contact', label: '06. CONTACT' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-colors py-1 ${
                  activeSection === item.id 
                    ? 'text-[#C8F169] border-b border-[#C8F169]' 
                    : 'hover:text-[#F0F0E9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Location & Time Indicator */}
          <div className="hidden lg:flex items-center gap-3 font-mono text-[11px] text-[#92958A] border-l border-[#34382E] pl-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#C8F169]" />
              TUNISIA
            </span>
            <span className="text-[#34382E]">/</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#92958A]" />
              {localTime || 'GMT+1'}
            </span>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F0F0E9] hover:text-[#C8F169] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-[#10110F] border-b border-[#34382E] p-6 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <div className="space-y-6 pt-4">
            <p className="font-mono text-xs text-[#92958A] uppercase tracking-widest">// NAVIGATION</p>
            <div className="flex flex-col space-y-4 font-sans text-2xl font-bold tracking-tight">
              {[
                { id: 'about', label: '01 / ABOUT' },
                { id: 'work', label: '02 / SELECTED WORK' },
                { id: 'experience', label: '03 / EXPERIENCE & LEADERSHIP' },
                { id: 'skills', label: '04 / TECHNICAL STACK' },
                { id: 'education', label: '05 / EDUCATION & CERTIFICATIONS' },
                { id: 'contact', label: '06 / CONTACT' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-[#F0F0E9] hover:text-[#C8F169] transition-colors py-1 border-b border-[#34382E]/50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="font-mono text-xs text-[#92958A] space-y-2 border-t border-[#34382E] pt-6">
            <p>EPI DIGITAL SCHOOL • SOFTWARE ENGINEERING</p>
            <p>TUNISIA — 35.67° N, 10.89° E</p>
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section id="top" className="relative border-b border-[#34382E] pt-12 pb-20 md:py-24 overflow-hidden">
        {/* Subtle Background Grid Lines */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #34382E 1px, transparent 1px), linear-gradient(to bottom, #34382E 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 relative">
          
          {/* Status Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#34382E] font-mono text-xs text-[#92958A]">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#C8F169] animate-ping" />
              <span className="text-[#F0F0E9] font-medium">AVAILABLE FOR INTERNSHIPS & COLLABORATIONS</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>LICENCE SOFTWARE ENGINEERING</span>
              <span className="text-[#34382E]">|</span>
              <span>2024–2027</span>
            </div>
          </div>

          {/* Monumental Display Headline */}
          <div className="py-12 md:py-16">
            <span className="font-mono text-xs sm:text-sm text-[#C8F169] uppercase tracking-widest block mb-4">
              RAYEN MHAMDI® — DIGITAL IDENTITY
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-extrabold tracking-tight leading-[0.88] text-[#F0F0E9] uppercase mb-6">
              MAKE IT <br />
              <span className="text-transparent stroke-text hover:text-[#C8F169] transition-colors duration-500">
                MATTER.
              </span>
            </h1>
          </div>

          {/* Asymmetric Bottom Grid Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-[#34382E]">
            
            {/* Left: Professional Intro */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xl sm:text-2xl font-medium leading-relaxed text-[#F0F0E9]">
                I'm Rayen Mhamdi, a software engineering student and full-stack developer building thoughtful applications around real problems — with curiosity for the details behind the interface.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => scrollTo('work')}
                  className="px-6 py-3.5 bg-[#C8F169] text-[#10110F] font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-[#e0ff88] transition-colors"
                >
                  EXPLORE WORK <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-6 py-3.5 border border-[#34382E] text-[#F0F0E9] font-mono text-xs tracking-wider uppercase flex items-center gap-2 hover:border-[#C8F169] hover:text-[#C8F169] transition-colors"
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>

            {/* Right: Quick Index Directory */}
            <div className="lg:col-span-6 bg-[#171915] p-6 sm:p-8 border border-[#34382E] space-y-4">
              <div className="flex items-center justify-between border-b border-[#34382E] pb-3">
                <span className="font-mono text-xs text-[#92958A] uppercase tracking-widest">// FEATURED DIRECTORY</span>
                <span className="font-mono text-xs text-[#C8F169]">05 PROJECTS</span>
              </div>
              <ul className="divide-y divide-[#34382E]/60 font-mono text-xs sm:text-sm">
                {PROJECTS_DATA.map((proj) => (
                  <li key={proj.id} className="py-2.5 flex items-center justify-between group">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="w-full flex items-center justify-between text-left text-[#92958A] group-hover:text-[#F0F0E9] transition-colors"
                    >
                      <span className="text-[#C8F169] font-bold mr-3">{proj.number}</span>
                      <span className="truncate flex-1 font-medium">{proj.title}</span>
                      <span className="text-[11px] text-[#92958A] group-hover:text-[#C8F169] flex items-center gap-1 transition-colors">
                        INSPECT <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 md:py-28 border-b border-[#34382E] bg-[#10110F]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Index Column */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs text-[#C8F169] tracking-widest uppercase block">// 01. ABOUT</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-[#F0F0E9]">
                CURIOSITY FIRST.<br />
                THEN THE CRAFT.
              </h2>
              <div className="pt-4 font-mono text-xs text-[#92958A] space-y-2 border-t border-[#34382E]/60">
                <p>INSTITUTION: EPI DIGITAL SCHOOL</p>
                <p>DEGREE: LICENCE IN SOFTWARE ENGINEERING</p>
                <p>LOCATION: TUNISIA</p>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-8 space-y-6 text-lg text-[#92958A] leading-relaxed">
              <p className="text-xl sm:text-2xl font-medium text-[#F0F0E9] leading-snug">
                I approach software development as a practical engineering discipline. Code is the vehicle, but the real target is building reliable products that solve genuine friction.
              </p>
              <p>
                Currently pursuing my Licence in Software Engineering (Génie Logiciel) at EPI Digital School in Tunisia (2024–2027), I split my energy between deep academic principles and building production-grade web and mobile applications. From structuring relational PostgreSQL and MySQL databases to architecting responsive React and Angular frontends, I care about the complete flow.
              </p>
              <p>
                My work extends beyond pure programming. As General Manager of Mic Check06, Founder of BARQ Brand, and an active member of JCI Bouhjar, I spend real time organizing logistics, designing visual identities, and leading teams. This practical experience grounds my technical decisions in real operational clarity.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#34382E]">
                <div>
                  <span className="font-mono text-xs text-[#92958A] block">ACADEMIC YEAR</span>
                  <span className="font-mono text-base font-bold text-[#F0F0E9]">3RD YEAR</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-[#92958A] block">GRADUATION</span>
                  <span className="font-mono text-base font-bold text-[#C8F169]">JUNE 2027</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-[#92958A] block">FOCUS AREA</span>
                  <span className="font-mono text-base font-bold text-[#F0F0E9]">FULL-STACK</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-[#92958A] block">LANGUAGES</span>
                  <span className="font-mono text-base font-bold text-[#F0F0E9]">AR / EN / FR</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SELECTED WORK SECTION --- */}
      <section id="work" className="py-20 md:py-28 border-b border-[#34382E] bg-[#171915]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#34382E] gap-4">
            <div>
              <span className="font-mono text-xs text-[#C8F169] tracking-widest uppercase block">// 02. SELECTED WORK</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-[#F0F0E9]">
                ENGINEERED<br />SOLUTIONS.
              </h2>
            </div>
            <p className="font-mono text-xs text-[#92958A] max-w-xs">
              05 VERIFIED PROJECTS FEATURING CONCEPTUAL TECHNICAL ARTWORK & FULL CASE STUDY SPECS.
            </p>
          </div>

          {/* Project List with Asymmetric Layouts */}
          <div className="divide-y divide-[#34382E]">
            {PROJECTS_DATA.map((project, idx) => {
              // Asymmetric variations based on index
              const isEven = idx % 2 === 0;

              return (
                <article key={project.id} className="py-16 md:py-24 group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Visual Artwork Column */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <ProjectArtwork type={project.artworkType} title={project.title} />
                    </div>

                    {/* Project Information Column */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                      
                      <div className="flex items-center justify-between border-b border-[#34382E] pb-3">
                        <span className="font-mono text-3xl font-extrabold text-[#C8F169]">
                          {project.number}
                        </span>
                        <span className="font-mono text-xs text-[#92958A] uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F0F0E9] group-hover:text-[#C8F169] transition-colors uppercase">
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs text-[#C8F169] mt-1 uppercase">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-[#92958A] text-base sm:text-lg leading-relaxed">
                        {project.brief}
                      </p>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.stack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2.5 py-1 bg-[#1E211B] border border-[#34382E] font-mono text-xs text-[#F0F0E9]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#34382E]/60">
                        <span className="font-mono text-xs text-[#92958A]">
                          STATUS: <strong className="text-[#F0F0E9] font-normal">{project.status}</strong>
                        </span>
                        
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-5 py-2.5 bg-[#C8F169] text-[#10110F] font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-[#e0ff88] transition-colors"
                        >
                          INSPECT CASE STUDY <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- EXPERIENCE & LEADERSHIP SECTION --- */}
      <section id="experience" className="py-20 md:py-28 border-b border-[#34382E] bg-[#10110F]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs text-[#C8F169] tracking-widest uppercase block">// 03. EXPERIENCE</span>
              <h2 className="text-4xl font-extrabold tracking-tight uppercase text-[#F0F0E9]">
                LEADERSHIP &<br />INITIATIVES.
              </h2>
              <p className="text-sm text-[#92958A]">
                Beyond software development — managing operations, launching brands, and participating in civic networks.
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#34382E]">
              {EXPERIENCE_DATA.map((exp, index) => (
                <div key={index} className="py-8 first:pt-0 space-y-3 group hover:bg-[#171915]/50 transition-colors px-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-[#C8F169] uppercase">{exp.period}</span>
                    <span className="text-[#92958A] uppercase">{exp.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F0F0E9] group-hover:text-[#C8F169] transition-colors">
                    {exp.role} <span className="text-[#92958A] font-normal">— {exp.organization}</span>
                  </h3>
                  <p className="text-[#92958A] text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* --- TECHNICAL STACK SECTION --- */}
      <section id="skills" className="py-20 md:py-28 border-b border-[#34382E] bg-[#171915]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#34382E] gap-4">
            <div>
              <span className="font-mono text-xs text-[#C8F169] tracking-widest uppercase block">// 04. TECHNICAL STACK</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#F0F0E9]">
                ENGINEERING TOOLS.
              </h2>
            </div>
            <p className="font-mono text-xs text-[#92958A] max-w-xs">
              CATEGORIZED TECHNICAL PROFICIENCIES BASED ON VERIFIED ACADEMIC & PROJECT EXPERIENCE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
            {SKILLS_DATA.map((group, idx) => (
              <div key={idx} className="bg-[#10110F] p-6 border border-[#34382E] space-y-4">
                <div className="flex items-center justify-between border-b border-[#34382E] pb-3">
                  <span className="font-mono text-xs text-[#C8F169] uppercase font-bold">{group.category}</span>
                  <Terminal className="w-4 h-4 text-[#92958A]" />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1 bg-[#1E211B] text-[#F0F0E9] font-mono text-xs border border-[#34382E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- EDUCATION & CERTIFICATIONS SECTION --- */}
      <section id="education" className="py-20 md:py-28 border-b border-[#34382E] bg-[#10110F]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Education Column */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="font-mono text-xs text-[#C8F169] tracking-widest uppercase block">// 05. ACADEMICS</span>
                <h2 className="text-3xl font-extrabold tracking-tight uppercase text-[#F0F0E9] mt-1">
                  EDUCATION & DEGREE
                </h2>
              </div>

              <div className="bg-[#171915] p-6 sm:p-8 border border-[#34382E] space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#C8F169]">
                  <span>2024 – 2027 (EXPECTED JUNE 2027)</span>
                  <span>TUNISIA</span>
                </div>
                <h3 className="text-2xl font-bold text-[#F0F0E9]">EPI DIGITAL SCHOOL</h3>
                <p className="font-mono text-xs text-[#92958A] uppercase">
                  Licence in Informatics of Management – Software Engineering Track (Génie Logiciel)
                </p>
                <div className="pt-4 border-t border-[#34382E] grid grid-cols-2 gap-4 font-mono text-xs text-[#92958A]">
                  <div>
                    <span className="block text-[#F0F0E9] font-bold">YEAR 1 AVERAGE:</span>
                    <span>12.09 / 20 (36/60 Credits)</span>
                  </div>
                  <div>
                    <span className="block text-[#F0F0E9] font-bold">YEAR 2 AVERAGE:</span>
                    <span>12.97 / 20 (50/60 Credits)</span>
                  </div>
                </div>
              </div>

              {/* Languages Box */}
              <div className="bg-[#171915] p-6 border border-[#34382E] space-y-3">
                <span className="font-mono text-xs text-[#C8F169] uppercase font-bold block">// LANGUAGE PROFICIENCY</span>
                <div className="grid grid-cols-3 gap-4 font-mono text-xs">
                  <div>
                    <span className="text-[#92958A] block">ARABIC</span>
                    <span className="text-[#F0F0E9] font-bold">NATIVE</span>
                  </div>
                  <div>
                    <span className="text-[#92958A] block">ENGLISH</span>
                    <span className="text-[#F0F0E9] font-bold">B2 LEVEL</span>
                  </div>
                  <div>
                    <span className="text-[#92958A] block">FRENCH</span>
                    <span className="text-[#F0F0E9] font-bold">B2 LEVEL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Ledger */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="font-mono text-xs text-[#C8F169] tracking-widest uppercase block">// CERTIFICATIONS</span>
                <h2 className="text-3xl font-extrabold tracking-tight uppercase text-[#F0F0E9] mt-1">
                  VERIFIED CREDENTIALS
                </h2>
              </div>

              <div className="divide-y divide-[#34382E] border-t border-b border-[#34382E]">
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <div key={idx} className="py-4 space-y-1">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#C8F169]">{cert.date}</span>
                      <span className="text-[#92958A]">{cert.issuer}</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#F0F0E9]">{cert.title}</h4>
                    <p className="font-mono text-xs text-[#92958A]">{cert.note}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- CONTACT & FINAL IMPRESSION SECTION --- */}
      <section id="contact" className="py-24 md:py-32 bg-[#C8F169] text-[#10110F] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          
          <div className="space-y-8 max-w-4xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest block text-[#10110F]/70">
              // 06. CONTACT & INQUIRIES
            </span>
            
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight uppercase leading-[0.9]">
              LET'S MAKE<br />
              SOMETHING MATTER.
            </h2>

            <p className="text-xl sm:text-2xl font-medium max-w-2xl text-[#10110F]/80">
              Open to master's program admissions, software engineering internships, and full-stack development collaborations.
            </p>

            {/* Clickable Main Email */}
            <div className="pt-4">
              <a 
                href="mailto:mhamdirayen@gmail.com"
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-mono underline decoration-2 underline-offset-8 hover:opacity-80 transition-opacity break-all"
              >
                mhamdirayen@gmail.com
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <button
                onClick={handleCopyEmail}
                className="px-6 py-3.5 bg-[#10110F] text-[#F0F0E9] font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-[#1E211B] transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#C8F169]" /> : <Copy className="w-4 h-4" />}
                {copiedEmail ? 'EMAIL COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}
              </button>

              <a
                href="https://github.com/rayen01mhamdi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#10110F] text-[#10110F] font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-[#10110F] hover:text-[#C8F169] transition-colors"
              >
                GITHUB <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/rayen-mhamdi-223458326/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#10110F] text-[#10110F] font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-[#10110F] hover:text-[#C8F169] transition-colors"
              >
                LINKEDIN <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#10110F] border-t border-[#34382E] py-8 text-xs font-mono text-[#92958A]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#F0F0E9] font-bold">© 2026 RAYEN MHAMDI</span>
            <span>•</span>
            <span>DARK SWISS MODERN</span>
          </div>

          <div className="flex items-center gap-6">
            <span>TUNISIA (35.67° N, 10.89° E)</span>
            <button
              onClick={() => scrollTo('top')}
              className="text-[#C8F169] hover:underline uppercase flex items-center gap-1"
            >
              BACK TO TOP <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </footer>

      {/* --- FULL-SCREEN CASE STUDY DRAWER MODAL --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-[#10110F]/95 backdrop-blur-lg overflow-y-auto p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="max-w-4xl mx-auto bg-[#171915] border border-[#34382E] p-6 sm:p-10 my-8 space-y-8 relative shadow-2xl">
            
            {/* Header / Modal Close */}
            <div className="flex items-center justify-between border-b border-[#34382E] pb-6">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-[#C8F169] font-bold">PROJECT {selectedProject.number}</span>
                <span className="text-[#34382E]">|</span>
                <span className="text-[#92958A]">{selectedProject.year}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-[#92958A] hover:text-[#C8F169] border border-[#34382E] hover:border-[#C8F169] transition-colors"
                aria-label="Close Case Study drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2 id="modal-title" className="text-3xl sm:text-5xl font-extrabold text-[#F0F0E9] uppercase">
                {selectedProject.title}
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[#C8F169] uppercase">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Project Artwork Representation */}
            <div className="w-full">
              <ProjectArtwork type={selectedProject.artworkType} title={selectedProject.title} />
            </div>

            {/* Key Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#34382E]">
              <div>
                <span className="font-mono text-xs text-[#92958A] uppercase block mb-1">DEVELOPMENT STATUS</span>
                <span className="font-mono text-sm text-[#F0F0E9] font-bold">{selectedProject.status}</span>
              </div>
              <div>
                <span className="font-mono text-xs text-[#92958A] uppercase block mb-1">ENGINEERING CATEGORY</span>
                <span className="font-mono text-sm text-[#F0F0E9] font-bold">{selectedProject.category}</span>
              </div>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-6 pt-4 border-t border-[#34382E]">
              <div>
                <h3 className="font-mono text-xs text-[#C8F169] uppercase font-bold mb-2">// THE CHALLENGE / PROBLEM</h3>
                <p className="text-[#92958A] text-base leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div>
                <h3 className="font-mono text-xs text-[#C8F169] uppercase font-bold mb-2">// THE ARCHITECTURAL SOLUTION</h3>
                <p className="text-[#92958A] text-base leading-relaxed">{selectedProject.solution}</p>
              </div>

              <div>
                <h3 className="font-mono text-xs text-[#C8F169] uppercase font-bold mb-2">// RAYEN'S CONTRIBUTION</h3>
                <p className="text-[#F0F0E9] text-base leading-relaxed">{selectedProject.contribution}</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-4 border-t border-[#34382E]">
              <h3 className="font-mono text-xs text-[#C8F169] uppercase font-bold">// KEY IMPLEMENTATION HIGHLIGHTS</h3>
              <ul className="space-y-2 font-mono text-xs text-[#92958A]">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C8F169] mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Tags */}
            <div className="space-y-3 pt-4 border-t border-[#34382E]">
              <h3 className="font-mono text-xs text-[#C8F169] uppercase font-bold">// FULL TECHNOLOGY STACK</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#1E211B] border border-[#34382E] font-mono text-xs text-[#F0F0E9]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Drawer Footer Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-[#34382E] font-mono text-xs">
              <span className="text-[#92958A]">USE ← / → KEYS TO SWITCH</span>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 bg-[#C8F169] text-[#10110F] font-bold uppercase tracking-wider"
              >
                CLOSE CASE STUDY
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Scoped Custom CSS for SVG Stroke Text & Fine Utilities */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #F0F0E9;
        }
        @media (max-width: 640px) {
          .stroke-text {
            -webkit-text-stroke: 1px #F0F0E9;
          }
        }
      `}</style>

    </div>
  );
}