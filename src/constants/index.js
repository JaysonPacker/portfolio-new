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
        description: "CensusScope\nSolo project\n\nOfficial Census data is buried in dense spreadsheets and clunky government tools, so I wanted to build a way to actually see regional patterns instead of digging through tables to find them. CensusScope renders states, counties, and tracts as 3D extrusions, using height and color to encode variables like income, education, and employment. Color shows difference, but height makes disparities way faster to spot at a glance.\n\nI built it with React and Deck.gl, streaming live data from the Census Bureau API and TIGERweb. I originally planned to use Three.js, but given my time constraints at the time, Deck.gl's built-in mapping and rendering let me focus more on the interaction design instead of rebuilding map infrastructure from scratch. The drill-down from state to county to tract uses smooth camera fly-to transitions and legends that update per category, so the zoom itself helps communicate the change in scale.\n\nOne issue I ran into: taller extrusions can visually block shorter ones nearby, which is a real problem since low data points can matter just as much as high ones. My first attempt at fixing this was scaling transparency with value, so higher extrusions get more transparent. Looking back, I think a light-diffusing texture would've solved it more cleanly than transparency alone.\n\nI'm not actively continuing this project, but if I did, I'd want to add multi-map comparison, saved visualizations, and export options for images and data. Overall it was a solid proof of concept for the interaction model I was going for."},
{
        slug: "interative game",
        name: "Interactive Media",
        tools: ["C#", "Unity", "Arduino", "Camera Vision","3D Modeling"],
        tags: ["software","prototype","design"],
        url: [
            ["Rampage project site", "https://rampage.framer.website/"],
            ["Comically Large Instagram", "https://www.instagram.com/comicallylarge.rit/"]
        ],
        imagePaths: [
            "/images/projects/rncl.png",
            "https://framerusercontent.com/images/MJ5DL2ePh6iqjKiJaBEzVQ3XIvs.svg?width=183&height=74", 
            "https://framerusercontent.com/images/hA9IfuvaYJlXd2yvAXtWG369cFs.png?scale-down-to=1024&width=816&height=1082",
            "/images/projects/ram1.png",
            "/images/projects/ram2.png",
            "https://framerusercontent.com/images/FQ85PTN1gVXUB4FdvzkcBFyocYg.png?width=932&height=565",
           "/images/projects/CL0.png",
            "/images/projects/CL1.jpg",
            "/images/projects/CL2.png",

            ],
        description: "Rampage\nHardware & physical design lead, 8-person team (4 designers, 4 developers)\n\nRampage is an alternative-controller arcade game where players ride a giant rideable head, pulling its hair to steer and smash through a village. It was built in one semester as a collaborative effort between designers and developers to create a fun, physical, interactive media experience.\n\nAs the physical design and hardware lead, I modeled and fabricated the structural rideable head and a dynamic tilting seat using TinkerCad and woodshop tools. I also engineered custom Arduino sensor arrays that integrated directly with Unity, mapping physical player inputs like hair pulls and seat tilt into responsive in-game mechanics.\n\nWe ran 3 playtests with 30 to 50 players each. During development we ran into accessibility issues with the physical controls that ended up delaying parts of the build. That experience directly shaped how my team approached our next project, Comically Large, where we planned ahead of time for how to avoid similar delays.\n\n\nComically Large\nHardware & physical design lead, 8-person team (4 designers, 4 developers)\n\nComically Large is an interactive two-player drawing exhibit built for RIT's university-wide project showcase, where players use giant oversized pencils to complete prompted comic panels on a digital canvas. Finished drawings could also be printed as small physical takeaways for players to keep.\n\nI led hardware and physical controller development, modeling custom components in Tinkercad and 3D printing enclosures durable enough to handle public showcase traffic. I also embedded Arduino microcontrollers and sensors into the giant pencils so the physical input mapped seamlessly into the software environment.\n\nWe playtested with 50 participants, then ran the exhibit at the showcase for over 100 pairs of players ranging from young kids to elderly visitors. The physical novelty and the printed takeaways were a big part of what made it land with such a wide range of ages. Having learned from accessibility-related delays on Rampage the previous semester, my team planned ahead of time to avoid similar setbacks going into this project." },

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
        description: "Gizmo Go-Kartz\nTeam Lead of Research and Development (team of 1, supported by floating members from other teams)\n\nGizmo Go-Kartz started as a summer project to build a racing kart game paired with its own custom arcade cabinets for one of RIT's academic buildings. The plan was to create an altered build of the web version specifically tuned for cabinet hardware.\n\nPartway through, budget changes cut the cabinets from scope, and the team shifted focus to publishing the web version of the game on its own. My role shifted with it, moving from arcade hardware and component research into supporting tasks like playtesting, UI improvements, and research for other teams.\n\nFor the QA team, I researched and set up a skeleton implementation of Unity's test framework for them to build on. For the production team, I looked into on-campus promotional opportunities to help get the game in front of players.\n\nThe game launched and shipped as a web release."    },
  {
        slug: "string house design",
        name: "String House Redesign",
        tools: ["Adobe Illustrator"],
        tags: ["design"],
        url: [],
        imagePaths: ["https://static.wixstatic.com/media/15995e_123d099c5d0a426db83da345e6ec6c8b~mv2.png/v1/fit/w_635,h_1121,q_90/15995e_123d099c5d0a426db83da345e6ec6c8b~mv2.webp",
"https://static.wixstatic.com/media/15995e_9dede3cb8b034f66910ad753b63b7a39~mv2.jpg/v1/fit/w_635,h_942,q_90/15995e_9dede3cb8b034f66910ad753b63b7a39~mv2.webp",
"https://static.wixstatic.com/media/15995e_0369c5a7eec04c838bf008f115b3e365~mv2.jpg/v1/fit/w_635,h_942,q_90/15995e_0369c5a7eec04c838bf008f115b3e365~mv2.webp",
"https://static.wixstatic.com/media/15995e_c5b3cfd48094430c9ac58814b75e1b0a~mv2.jpg/v1/fit/w_599,h_1132,q_90/15995e_c5b3cfd48094430c9ac58814b75e1b0a~mv2.webp"
],
        description:"String House Logo & Brand Identity\nClass project, 2023\n\nThis project was a logo redesign for String House, a local string instrument shop in Rochester, New York, assigned as part of a class. The existing logo was outdated and didn't reflect any real brand identity, so the goal was to build one from scratch: something simple, modern, and a bit playful.\n\nSince String House is a smaller but long-standing music shop, I leaned into on-the-nose musical imagery rather than something abstract, figuring that a shop with that kind of history would appreciate visuals that clearly music related. Using Adobe Illustrator, I built the design around violin-inspired imagery and a color palette pulled from violins themselves.\n\nOnce the logo was finalized, I extended the visuals into a set of branded print materials to keep the identity consistent across applications, including a business card, letterhead, and takeaway card."
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
        description: "RochestAR: Path of Perseverance\nDesign lead, team of 3\n\nRochestAR: Path of Perseverance is a location-based augmented reality walking tour that explores Rochester's history through the impact of Kodak, Xerox, and Bausch + Lomb, and how the community responded as those companies declined.\n\nThe project meant combining storytelling with physical space, while also solving the technical challenges of GPS-based AR and making sure the experience actually worked reliably on mobile devices out in the real world.\n\nAs design and development lead on a team of three, I focused on how users would interact with the AR scenes at each stop. I ran design sprints to define the interface, interaction patterns, and overall story flow, then implemented the scenes using A-Frame, AR.js, and GSAP, building the animations and coordinating how visuals, sound, and narration came together at each location.\n\nA big part of the work was consistency: making each stop feel connected to the others, while also handling real inconsistencies like differences between desktop and mobile behavior and unreliable GPS tracking across the city.\n\nThe final experience guides users through multiple points of interest across Rochester, where they can navigate to each location, view animated AR scenes, and follow a narrated story. It was presented at the Rochester Contemporary Arts Center as part of a showcase of historical AR experiences. Since it was location-based, attendees couldn't experience it hands-on at the event itself, but they were intrigued by the walking-tour concept. The main feedback was that the route felt too spread out across the city. If I revisited the project, I'd concentrate the stops into a smaller, denser area of downtown to make the experience more approachable."
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
        description: "Pokémon API\nSolo project, learning exercise in API design\n\nThis full-stack project is a custom API for accessing and managing Pokémon data, paired with a client-facing interface for interacting with it. I built it as a learning exercise focused specifically on API design: the goal was to demonstrate how front-end and back-end components communicate through clearly defined endpoints, using data stored in a JSON file rather than a full database.\n\nOn the back end, I built a Node.js server exposing six endpoints: four GET routes for retrieving data and two POST routes for submitting new data. I put real focus on proper API behavior, handling status codes like 400, 401, 403, 404, and 500 with clear messages, and building in content negotiation so the API returns either JSON or XML depending on the client's Accept header.\n\nOn the front end, I built a documentation site that lets users interact with the API directly through form inputs, so they can send requests and view responses without needing an external tool like Postman. Building my own interface instead of relying on existing API tools was part of the exercise, since it forced me to think through the API from both the producer and consumer sides.\n\nThe result is a functional full-stack application that demonstrates core concepts in API design and integration, including proper status handling and content negotiation, paired with a simple interface for testing and understanding each endpoint."
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
        description:"Heartbeat\nUX design, team of 5\n\nHeartbeat is a mobile-first UX prototype designed to help students manage coursework and access academic resources more effectively. Our research surfaced a clear pain point: useful tools for managing grades were scattered across different websites, and information about lab and printer availability was similarly spread out and hard to find. After identifying this in our university's primary work management system, my team set out to design a more intuitive alternative that brought it together in one place.\n\nWe followed a full design process from research through interactive prototyping, using Axure RP as our primary tool. We started with user interviews to identify the features students expected from an app like ours, along with their pain points with existing platforms, which shaped our low-fidelity wireframes before they evolved into high-fidelity prototypes.\n\nI led development of the Resource Page and its related views, including the Labs and Printers pages, using repeaters and dynamic panels in Axure to build scalable, data-responsive components, since lab and printer availability changes in real time and needed to reflect whether a given space or machine was actually open.\n\nUsability testing showed us how users actually navigated the site, which led us to rework our navigation, signifiers, and some page structures so that the placement of information matched how users expected to find it. The final prototype delivers a user-centered experience built around deadline tracking, grade monitoring, reminders, and easier access to campus resources."
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
        description:"Physical Computing Projects (Arduino Series)\nSolo projects\n\nThese Arduino-based projects were my introduction to physical computing, exploring how it can create more intentional and engaging ways to interact with digital systems. Using Arduino, TinkerCad, and basic 3D modeling, I designed and built multiple prototypes that combined hardware inputs with real-time feedback, building a foundation in circuit design, microcontroller programming, and iterative prototyping along the way.\n\nThe main project in this series was a Practical Controller, an app launcher that lets users scroll through applications using a rotary encoder and launch them directly from a physical interface. I designed and 3D-printed a custom enclosure, integrated an Arduino Nano, OLED display, and rotary encoder, and developed the logic to manage input, display states, and system communication. Due to hardware limitations with the Arduino Nano and the Keyboard library, I built a separate C# console application to handle serial communication and trigger application launches on the computer. This meant coordinating hardware input with software behavior, along with troubleshooting faulty components and inconsistent encoder readings.\n\nI also built a portable soil moisture sensor that visualizes real-time data on an OLED display, and a prototype arcade-style controller using a Pro Micro to emulate keyboard input. During development, the microcontroller ended up becoming faulty, whether from a hardware limitation or a mistake made while troubleshooting, and it ultimately affected the project's deployment. Working through it still deepened my understanding of HID-based input and the hardware constraints behind it.\n\nAll three of these were proofs of concept rather than finished products, but this series laid the groundwork for the physical computing work I'd go on to do in later projects like Rampage and Comically Large"
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