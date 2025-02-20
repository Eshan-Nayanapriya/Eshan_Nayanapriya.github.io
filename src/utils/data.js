import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3,
    FaJs,
    FaSass,
    FaFacebook,
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';
import { BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from 'react-icons/si';
import { VscVscode, VscCommentUnresolved, VscTerminalPowershell } from 'react-icons/vsc';
import { FaGitAlt,FaXTwitter, FaDribbble } from 'react-icons/fa6';
import { MdGroups3 } from 'react-icons/md';
import IMG_1 from '../assets/images/icon_6.png';


//project image imports
//import IMG_1 from '../assets/images/IMG_1.jpg';

export const MENU_LINKS = [
    { id: "01", label: "Home", offset:-100, to:"hero" },
    { id: "02", label: "Skills", offset:-80, to:"skills" },
    { id: "03", label: "About Me", offset:-80, to:"about" },
    { id: "04", label: "Projects", offset:-80, to:"projects" },
    { id: "05", label: "Contact", offset:-80, to:"contact" },
];

export const STATS = [
    {id: "01", count: "2", label: `Years of \nExperience`},
    {id: "02", count: "10+", label: `Projects \nCompleted`},
    {id: "03", count: "5", label: `Certifications \nEarned`},
    {id: "04", count: "5", label: `Happy \nClients`},
];

export const SKILL_TABS= [
    {id: "01", label: "All", value: "all"},
    {id: "02", label: "Frontend", value: "frontend"},
    {id: "03", label: "Backend", value: "backend"},
    {id: "04", label: "Tools", value: "tools"},
    {id: "05", label: "Skills", value: "soft-skills"},
];

export const SKILLS = [
    {id: "01", icon: BiLogoReact, skill: "React JS", progress: "95", type: "frontend"},
    {id: "02", icon: BiLogoJavascript, skill: "Javascript", progress: "90", type: "frontend"},
    {id: "03", icon: FaHtml5, skill: "HTML", progress: "95", type: "frontend"},
    {id: "04", icon: FaCss3, skill: "CSS", progress: "90", type: "frontend"},
    {id: "05", icon: FaSass, skill: "Sass", progress: "85", type: "frontend"},
    {id: "06", icon: FaNodeJs, skill: "Node JS", progress: "80", type: "backend"},
    {id: "07", icon: SiExpress, skill: "Express JS", progress: "80", type: "backend"},
    {id: "08", icon: SiMongodb, skill: "MongoDB", progress: "75", type: "backend"},
    {id: "09", icon: SiMysql, skill: "MySQL", progress: "70", type: "backend"},
    {id: "10", icon: SiWebpack, skill: "Webpack", progress: "85", type: "tools"},
    {id: "11", icon: VscVscode, skill: "VS Code", progress: "90", type: "tools"},
    {id: "12", icon: FaGitAlt , skill: "Git", progress: "85", type: "tools"},
];

export const ABOUT_ME = {
    content: `I am a Full Stack Developer with 2 years of experience in building web applications. I specialize in MERN stack development and have worked on various projects. I am passionate about learning new technologies and love to work in a challenging environment.`,
    socialLinks: [
        {id: "01", label:"LinkedIn", icon: FaLinkedin, link: "#"},
        {id: "02", label:"Github", icon: FaGithub, link: "#"},
        {id: "03", label:"Facebook", icon: FaFacebook, link: "#"},
        {id: "04", label:"Instagram", icon: FaInstagram, link: "#"},
    ],

    email: "eshannayanapriyaprofessional@gmail.com",
    phone: "+94 717764945",
    website: "https://eshannayanapriya.github.io",
};

export const PROJECTS = [
    {
        id: 1,
        title: "Project 1",
        image: IMG_1,
        tags: ["React", "Node.js", "Express", "MongoDB"],
        description: "This is a project description. This is a project description. This is a project description. This is a project description.",
    },
    {
        id: 2,
        title: "Project 2",
        image: IMG_1,
        tags: ["React", "Node.js", "Express", "MongoDB"],
        description: "This is a project description. This is a project description. This is a project description. This is a project description.",
    },
    {
        id: 3,
        title: "Project 3",
        image: IMG_1,
        tags: ["React", "Node.js", "Express", "MongoDB"],
        description: "This is a project description. This is a project description. This is a project description. This is a project description.",
    },
    {
        id: 4,
        title: "Project 4",
        image: IMG_1,
        tags: ["React", "Node.js", "Express", "MongoDB"],
        description: "This is a project description. This is a project description. This is a project description. This is a project description.",
    },
    {
        id: 5,
        title: "Project 5",
        image: IMG_1,
        tags: ["React", "Node.js", "Express", "MongoDB"],
        description: "This is a project description. This is a project description. This is a project description. This is a project description.",
    },
    {
        id: 6,
        title: "Project 6",
        image: IMG_1,
        tags: ["React", "Node.js", "Express", "MongoDB"],
        description: "This is a project description. This is a project description. This is a project description. This is a project description.",
    }
];