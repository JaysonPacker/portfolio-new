const titles = [
    "Creative Technologist",
    "Front End Developer",
    "Interaction Engineer",
];

const navLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Work", link: "#work" },
];

const counterItems = [
    { value: 12, suffix: "+", label: "Projects Built" },
    { value: "Increasing", suffix: "", label: "Caffeine Intake" },
    { value: "Value too Large", suffix: "", label: "Bugs Fixed" },
    { value: "Always", suffix: "", label: "Learning" },
];

const techStackIcons = [
    {
        name: "Frontend",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
        skills: ["JavaScript", "React", "HTML", "CSS"],
    },
    {
        name: "Backend",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
        skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
        name: "C-Sharp",
        modelPath: "/models/c-sharp.glb",
        scale: 0.08,
        rotation: [0, 0, 0],
        skills: ["Axure RP", "TinkerCad", "Figma", "Illustrator", "Photoshop"],
    },
    {
        name: "Interactive",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
        skills: ["Three.js", "AR.js", "A-Frame", "TinkerCad", "Arduino"],
    },
    {
        name: "UI/UX R&D",
        modelPath: "/models/figma.glb",
        scale: 1.3,
        rotation: [Math.PI / 2, Math.PI * 2, Math.PI * 2],
        skills: ["Axure RP", "TinkerCad", "Figma", "Illustrator", "Photoshop"],
    },
];

const socialImgs = [
    {
        name: "Github",
        url: "https://github.com/JaysonPacker?tab=repositories",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/jaysonpacker",
        imgPath: "/images/linkedin.png",
    },
];

const projects = [
    {
        slug: "gizmo-go-kartz",
        name: "Gizmo Go Kartz",
        tools: ["C#", "Unity", "R&D", "Team Lead"],
        tags: ["software", "prototype"],
        url: "https://jnp1380.wixsite.com/jaysons-portfolio",
        imagePaths: ["/images/ggk-cover.png", "/images/finflow2.png", "/images/rochestar.jpg"],
        description:
            "Led Research & Development across a 30+ student team building a physical arcade go-kart machine. Coordinated cross-team hardware integration and interactive gameplay systems.",
    },
    {
        slug: "finflow",
        name: "FinFlow",
        tools: ["React", "Node.js", "PostgreSQL"],
        tags: ["software"],
        url: "https://jnp1380.wixsite.com/jaysons-portfolio",
        imagePaths: ["/images/finflow2.png", "/images/ggk-cover.png", "/images/rochestar.jpg"],
        description:
            "A full-stack personal finance web app featuring real-time transaction tracking, data visualization dashboards, and smart budgeting tools.",
    },
    {
        slug: "rochestar",
        name: "RochestAR",
        tools: ["AR", "Unity", "Geolocation", "UX"],
        tags: ["software", "prototype"],
        url: "https://jnp1380.wixsite.com/jaysons-portfolio",
        imagePaths: ["/images/rochestar.jpg", "/images/ggk-cover.png", "/images/finflow2.png"],
        description:
            "An AR mobile experience bringing Rochester's history to life through geolocation-based interactive storytelling and 3D overlays.",
    },
    {
        slug: "project-four",
        name: "Project Four",
        tools: ["React", "Three.js"],
        tags: ["software"],
        url: "https://jnp1380.wixsite.com/jaysons-portfolio",
        imagePaths: ["/images/ggk-cover.png"],
        description: "A creative interactive web project built with React and Three.js.",
    },
    {
        slug: "project-five",
        name: "Project Five",
        tools: ["Figma", "CSS"],
        tags: ["software", "design"],
        url: "https://jnp1380.wixsite.com/jaysons-portfolio",
        imagePaths: ["/images/finflow2.png"],
        description: "A UI/UX design and prototyping project.",
    },
    {
        slug: "project-six",
        name: "Project Six",
        tools: ["C#", "Unity"],
        tags: ["software", "design"],
        url: "https://jnp1380.wixsite.com/jaysons-portfolio",
        imagePaths: ["/images/rochestar.jpg"],
        description: "A Unity game development project.",
    },
    {
        slug: "project-seven",
        name: "Project Seven",
        tools: ["Node.js", "Express"],
        tags: ["software"],
        url: "https://jnp1380.wixsite.com/jaysons-portfolio",
        imagePaths: ["/images/ggk-cover.png"],
        description: "A backend API project built with Node.js and Express.",
    },
];

export {
    titles,
    counterItems,
    socialImgs,
    techStackIcons,
    navLinks,
    projects,
};