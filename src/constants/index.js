
const words =["FrontEnd", "Creative", "Interaction","FrontEnd", "Creative", "Interaction","FrontEnd", "Creative"];

const navLinks = [
    {
        name: "About",
        link: "#about",
    },

    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Work",
        link: "#work",
    },

];

const counterItems =  [
    { value: 12, suffix: "+", label: "Projects Built" },
    { value: "Increasing", suffix: "", label: "Caffine Intake" },
    { value: "Value too Large", suffix: "", label: "Bugs Fixed" },
    { value: "Always", suffix: "", label: "Learning" },
];




const techStackIcons = [
    {
        name: "Frontend",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    }, {
        name: "C-Sharp",
        modelPath: "/models/c-sharp.glb",
        scale: 0.08,
        rotation: [0, 0, 0],
    },
    {
        name: "Interactive",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "UI/UX R&D",
        modelPath: "/models/figma.glb",
        scale: 1.3,
        rotation: [Math.PI/2, Math.PI*2, Math.PI*2],
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
        url: "www.linkedin.com/in/jaysonpacker",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    counterItems,
    socialImgs,
    techStackIcons,
    navLinks,
};