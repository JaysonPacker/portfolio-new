const titles = [
   
    "Full-Stack Developer", 
    "Creative Technologist",
    "Interaction Engineer",
];

const navLinks = [
    { name: "Skills", link: "#skills" },
    { name: "Featured", link: "#work" },
    { name: "Projects", link: "#projects" },
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
        name: "Interactive",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
        skills: ["Unity","Three.js", "AR.js", "A-Frame", "TinkerCad", "Arduino"],
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
        slug: "censusviz",
        name: "Census Viz",
        tools: ["React","Desk.gl", "Mapbox", "TigerWeb API", "U.S. Census API","Chakra UI","Zustand"],
        tags: ["software", "prototype"],
        url: [
            ["NOT YET online", ""],
        ],
        imagePaths: ["/images/projects/CensusS1.png"
                        ],
        description: "CensusScope is a prototype 3D visualization platform designed to make public U.S. Census data truly accessible to everyone. Navigating official Census databases and dense spreadsheets can be frustratingly unintuitive. CensusScope solves this by taking a visual-first approach—drastically simplifying data navigation so anyone, from researchers to non-experts, can spot regional trends and patterns at a glance. Built with React and Deck.gl, the prototype streams live data from the Census Bureau’s API and TIGERweb service to render states, counties, and tracts as dynamic 3D extrusions where both height and color can encode data variables. Users can seamlessly focus from state down to tract levels, swap across demographic categories (income, population, education, housing, and employment), and customize the visualization modes—complete with smooth camera fly-to transitions and dynamic live legends."},
{
        slug: "gizmo-go-kartz",
        name: "Gizmo Go Kartz",
        tools: ["C#", "Unity", "R&D", "Leadership"],
        tags: ["software", "prototype"],
        url: [
            ["Project Site", "https://nickynicegames.com/ggk/home"],
            ["Itch.io", "https://ggk-project.itch.io/gizmo-go-kartz"]
        ],
        imagePaths: [
            "/images/ggk-cover.png", 
            "https://static.wixstatic.com/media/15995e_6bd430024cba493ca4cecd393fcf0a49~mv2.png",
             "https://static.wixstatic.com/media/15995e_e42fed074c4b4ca8b6d6dd9e78e81728~mv2.png"
            ],
        description: "Gizmo Go-Kartz was a summer project who's original plan was to make a racing kart game accompanied with its own arcade machines in one of RIT's academic buildings. As team lead of Research and Development I oversaw and and contributed to all aspects pertaining to the Arcade Cabinet, from its design and component selections to how its components communicated would communicate with the game. I also had the secondary responsibility of assisting other teams by completing research and prototyping features for the game on on their behalf."    },
    {
        slug: "mira",
        name: "Mira",
        tools: ["React","Javascript","Chromium", "Node.js", "TBD"],
        tags: ["software", "prototype"],
        url: [],
        imagePaths: ["/images/mira1.png"],
        description:"Mira is a smart mirror platform I'm developing to explore a different medium to connect people and the digital information they rely on. The system will run on a Raspberry Pi with a two-way mirror display, connected to a companion mobile PWA and navigated through a custom Arduino controller communicating over USB serial. The first application I'm working toward is a closet assistant that will let users photograph clothing items through the phone app, sending them to Google's Gemini API to automatically identify each piece's type, color, material, pattern, formality, and seasonal fit. Those items will sync in real time through Firebase to the mirror, where a recommendation engine(TBD) will suggest outfits adjusted daily for the weather forecast and Google Calendar events.The mirror's interface will be built in JavaScript, running fullscreen in Chromium kiosk mode and primary purpose will be to display events, weather, time, and outfit recommendations, while the phone PWA will handle all data entry and outfit building. Firebase will tie the two together with real-time sync and photo storage, and the Arduino controller will give the mirror a physical, tactile navigation system that feels more intentional than a touchscreen. The closet assistant is the first step in a larger vision for Mira as a multi-application platform, one that reimagines how we interact with everyday and personal information by meeting us where we already are. "
   },
    {
        slug: "rochestar",
        name: "RochestAR",
        tools: ["JavaScript",
  "A-Frame",
  "AR.js",
  "GSAP",
  "HTML",
  "CSS",
  "3D Animation",
  "Augmented Reality (AR)", "UI/UX Design",],
        tags: ["software",],
        url:  [
            ["Project Site", "https://jacobjablon.github.io/480-jnj-final/"],
            ["Blog", "https://rcal.ccastellanos.com/rochestar/"],
            ["Github", "https://github.com/JacobJablon/480-jnj-final/"]
        ],
        imagePaths: ["/images/rochestar.jpg",
             "https://static.wixstatic.com/media/15995e_a0a8beea727f4d948a1051ab09c6bfc8~mv2.webp",
             "https://static.wixstatic.com/media/15995e_2e37fbfbffc5409ab6bf3314f2396225~mv2.jpg",
             "https://static.wixstatic.com/media/15995e_4d49e301a6544bd483954b86a0a31f3a~mv2.webp",
             
            ],
        description: "RochestAR: Path of Perseverance is a location-based augmented reality experience that explores the history of Rochester through the impact of Kodak, Xerox, and Bausch + Lomb. The goal of the project was to create an interactive walking tour that helps users understand how these companies shaped the city and how the community responded to their decline. This required combining storytelling with physical space, while also working through the technical challenges of GPS-based AR and ensuring the experience functioned reliably on mobile devices. I led the design and development of the AR scenes, focusing on how users would interact with the experience at each location. I organized design sprints to define the user interface, interaction patterns, and overall flow of the story. I also worked on implementing the scenes using A-Frame, AR.js, and GSAP, building animations and coordinating how visuals, sound, and narration came together. A major part of my role was making sure each stop felt consistent and connected, while also adjusting for issues like differences between desktop and mobile behavior and inconsistencies in location tracking.The final result was a complete AR walking experience that guides users through multiple points of interest across the city. Users can navigate to each location, view animated scenes, and follow along with a narrated story. The project was presented at the Rochester Contemporary Arts Center, where it was featured among various historical ARexperiences."
    } ,{
        slug: "pokemon-api",
        name: "Pokemon API",
        tools: ["React", "Node.js"],
        tags: ["software"],
        url: [
            ["Project Site", "https://project1-430igm-40897da9c2c7.herokuapp.com/"],
            ["Github", "https://github.com/JaysonPacker/430-project1"]
        ],
        imagePaths: ["https://static.wixstatic.com/media/15995e_a08ef26a336c4239905e50779aa55693~mv2.png", 
            "https://static.wixstatic.com/media/15995e_53e70df504804a92a378e2151810b74a~mv2.png"
        ],
        description: "This full-stack project provides a custom API for accessing and managing Pokémon data, along with a client-facing interface for interacting with it. The goal was to build a system that demonstrates how front-end and back-end components communicate through defined endpoints, while also making the API accessible and easy to test.On the back end, I developed a Node.js server that exposes six endpoints, including four GET routes for retrieving data and two POST routes for submitting new data. I focused on organizing the API to be clear and consistent, ensuring that each endpoint handled requests and responses in a predictable way. On the front end, I built a  documentation website that allows users to interact with the API through form inputs, making it possible to send requests and view responses without needing external tools.The final result is a functional full-stack application that demonstrates core concepts in API design and integration. It provides both a working service and a simple interface for testing and documentation, making it easier for users to understand how the system works and how to interact with each endpoint."
    },
    {
        slug: "heartbeat",
        name: "Heartbeat - Axure Prototype",
        tools: ["Axure RP", "UI/UX Design"],
        tags: ["prototype", "design"],
        url:  [
            ["Protoype", "https://ti9wxm.axshare.com/?id=l4zddx&p=homepage"]
        ],
        imagePaths: [
            "https://static.wixstatic.com/media/15995e_a8f886eafe92439f8229c2ecdd57e97e~mv2.png",
            "https://static.wixstatic.com/media/15995e_1382153f123e4b4086237b925e95d42c~mv2.png",
            "https://static.wixstatic.com/media/15995e_dbcd3df4518045e49679329f5b2161d3~mv2.png",
            "https://static.wixstatic.com/media/15995e_fee28fbf1989413a92a662c48a8ea7f7~mv2.png",
            "https://static.wixstatic.com/media/15995e_c1d6a21f2cbd4ceb89342b8615257d66~mv2.png",
            "https://static.wixstatic.com/media/15995e_ea0ac792079f44f182076187cdc578b1~mv2.png",
        ],
        description:"Heartbeat is a mobile-first UX prototype designed to help students manage their coursework and access academic resources more effectively. After identifying pain points in the university’s primary work management system, my team of five set out to design a more intuitive and useful alternative. We followed a full design process from initial research to interactive prototyping, using Axure RP as our primary tool. We began with background research and user interviews to better understand student needs and frustrations with existing platforms. These insights informed our low-fidelity wireframes, which later evolved into high-fidelity prototypes. I led the development of the Resource Page and its related views, using repeaters and dynamic panels in Axure to create scalable, data-responsive components, particularly for the Labs and Printers pages. Our process included multiple rounds of usability testing, allowing us to refine the design based on real user feedback and observed behaviors. The final prototype presents a user-centered experience focused on improving academic engagement through features such as deadline tracking, grade monitoring, reminders, and easier access to campus resources."
    },
    {
        slug: "arduino-prototypes",
        name: "Arduino Prototypes",
        tools: ["Arduino", "TinkerCad", "3D Printing"],
        tags: ["prototype"],
        url:  [
            ["App Launcher Blog", "https://jaysonsblog0.wordpress.com/2024/11/20/project-2-pratical-controler/?preview_id=222&preview_nonce=8698d30ea9&preview=true"],
            ["Moisture Sensor Blog", "https://jaysonsblog0.wordpress.com/2024/11/03/project-1-plant-problem/"],
            ["Controller Blog", "https://jaysonsblog0.wordpress.com/2024/12/17/project-4-you-or-a-friends-problem/"]
        ],
        imagePaths: [
            "https://static.wixstatic.com/media/15995e_220b7c17e52f4b0583436316ebd8667f~mv2.jpg/v1/fit/w_2880,h_1470,q_90,enc_avif,quality_auto/15995e_220b7c17e52f4b0583436316ebd8667f~mv2.jpg",
           "https://static.wixstatic.com/media/15995e_b138b672bb314a95917f6c9636368d91~mv2.jpg",
            "https://static.wixstatic.com/media/15995e_4627d98abfca4a86b40c1edc4296acee~mv2.png",
            "https://static.wixstatic.com/media/15995e_169b862fb7d942d18c0e8f6165787ea1~mv2.png",
            "https://static.wixstatic.com/media/15995e_3ec9039a2d944c7cbe04e6a3613d3922~mv2.png",
            "https://static.wixstatic.com/media/15995e_afed757768664e5a9537a7c33396e7df~mv2.webp",
            "https://static.wixstatic.com/media/15995e_9f4b732cea8b4fa9814da0b462ad5a75~mv2.jpg",
            "https://static.wixstatic.com/media/15995e_e7d1883e52294c4997d552073849ddd9~mv2.webp",
            
        ],
        description:"Across a series of Arduino-based projects, I explored how physical computing can create more intentional and engaging ways to interact with digital systems. Using tools such as Arduino, TinkerCad, and basic 3D modeling, I designed and built multiple prototypes that combined hardware inputs with real-time feedback. These projects focused on translating physical actions into meaningful outputs, while also building a foundation in circuit design, microcontroller programming, and iterative prototyping.The primary project in this series was a Practical Controller (App Launcher), a device that allows users to scroll through applications using a rotary encoder and launch them directly from a physical interface. I designed and 3D-printed a custom enclosure, integrated an Arduino Nano, OLED display, and rotary encoder, and developed the logic to manage input, display states, and system communication. Due to hardware limitations with the Arduino Nano and the Keyboard library, I built a C# console application to handle serial communication and trigger application launches on a computer. This required coordinating hardware input with software behavior, as well as troubleshooting issues with faulty components and inconsistent encoder readings.In addition to this project, I developed a portable soil moisture sensor that visualizes real-time data on an OLED display, and a prototype arcade-style controller using a Pro Micro designed to emulate keyboard input. While the controller faced deployment issues, it reinforced my understanding of HID-based input and hardware constraints. Together, these projects demonstrate my ability to design and build interactive systems that bridge physical and digital experiences, while adapting to technical challenges and refining solutions through iteration."
            }
   
];

export {
    titles,
    counterItems,
    socialImgs,
    techStackIcons,
    navLinks,
    projects,
};