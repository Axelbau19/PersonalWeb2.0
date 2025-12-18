import {
    FileChartColumn,
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    Users,
    Heart,
    Import,

} from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";



import PROJECT_IMG_1 from '../assets/img/poliAgenda.jpg';
import PROJECT_IMG_2 from '../assets/img/project1.jpg';
import PROJECT_IMG_3 from '../assets/img/project3.jpg';
import PROJECT_IMG_4 from '../assets/img/Diabetes.jpg';
import PROJECT_IMG_5 from '../assets/img/se_Python.jpg';
import PROJECT_IMG_6 from '../assets/img/Ecommerce.jpg';


export const SKILLS_CATEGORY = [
    {
        title: "Data Engineer  & ETL",
        icon: FileChartColumn,
        description: "Data Engineer & ETL specialist bridging data ingestion, transformation, and analytics by building reliable pipelines that power dashboards and data-driven decisions",
        skills: [
            { name: "Power Bi", level: 90, color: "bg-blue-500" },
            { name: "Excel/Sheets", level: 95, color: "bg-green-500" },
            { name: "Python", level: 95, color: "bg-purple-500" },
            { name: "Pandas python", level: 90, color: "bg-blue-700" },
            { name: "Numpy python", level: 90, color: "bg-yellow-500" },
            { name: "Statistics and probability", level: 90, color: "bg-red-500" },
            { name: "Storytelling", level: 90, color: "bg-indigo-500" },
        ]
    },
    {
        title: "Backend Development",
        icon: Server,
        description: "Backend Engineer with experience in building RESTful APIs, managing databases, and implementing business logic using modern backend technologies. Focused on performance, scalability, and system reliability",
        skills: [
            { name: "Java", level: 90, color: "bg-blue-500" },
            { name: "Kotlin", level: 90, color: "bg-orange-500" },
            { name: "Node.js", level: 95, color: "bg-green-500" },
            { name: "Linux", level: 95, color: "bg-purple-500" },
            { name: "Postman", level: 90, color: "bg-blue-700" },
            { name: "Goo", level: 90, color: "bg-blue-700" },
            { name: "Desing Patterns", level: 90, color: "bg-yellow-500" }
        ]
    },
    {
        title: "Front-end",
        icon: FileChartColumn,
        description: "Frontend Developer skilled in JavaScript, HTML, CSS, and modern frontend frameworks, building dynamic and maintainable user interfaces.",
        skills: [
            { name: "Vue.js", level: 90, color: "bg-blue-500" },
            { name: "React.Js", level: 95, color: "bg-green-500" },
            { name: "Javascript", level: 95, color: "bg-purple-500" },
            { name: "Figma", level: 90, color: "bg-blue-700" },

        ]
    },

    {
        title: "Databases",
        icon: Database,
        description: "Database Engineer skilled in SQL and NoSQL databases, data modeling, indexing, and query optimization to ensure high-performance and reliable data storage.",
        skills: [
            { name: "SQL", level: 90, color: "bg-blue-500" },
            { name: "Postgresql", level: 90, color: "bg-orange-500" },
            { name: "MongoDB", level: 95, color: "bg-green-500" },
            { name: "Firebase", level: 90, color: "bg-yellow-500" }
        ]
    },

    {
        title: "DevOps",
        icon: Cloud,
        description: "Google Cloud Engineer leveraging cloud-native services and DevOps practices on GCP to deliver scalable, resilient, and automated systems",
        skills: [
            { name: "Google Cloud", level: 90, color: "bg-blue-500" },
        ]
    }

];

export const TECH_STACK = [
    "Power Bi", "Pandas", "Numpy", "Sckit-learn", "Java", "Github", "Jira", "Linux"
];


export const STATS = [
    { number: "20+", label: "Projects Completed" },
    { number: "4+", label: "Years Experience" },
    { number: "15+", label: "Technologies" },
    { number: "100%", label: "Keep up-to-date" },
];


export const Projects = [
    {
        id: 1,
        title: "Poliagenda",
        image: PROJECT_IMG_1,
        tags: ["Java", "Gradlew", "Android Studio", "Firebase"],
        description: "An Android app for academic organization with schedules, tasks, and cloud sync, focused on user experience.",
        liveUrl: "https://github.com/Esa70192/agenda",
        githubUrl: "https://github.com/Esa70192/agenda",
        featured: false,
        category: "Web and mobile"
    },
    {
        id: 2,
        title: "Sano y fresco",
        image: PROJECT_IMG_2,
        tags: ["Power Bi", "Python", "Google Colab", "SQL"],
        description: "My first dashboard in Power BI using a store database.",
        liveUrl: "https://app.powerbi.com/links/rVrvETdwae?ctid=f94bf4d9-8097-4794-adf6-a5466ca28563&pbi_source=linkShare",
        githubUrl: "https://drive.google.com/file/d/1oziM9OrORkjo26xJVakA08OUEcSY3k59/view?usp=drive_link",
        featured: false,
        category: "Data visualization"
    },
    {
        id: 3,
        title: "Covid 19",
        image: PROJECT_IMG_3,
        tags: ["Javascript", "MongoDb", "HTML5/CSS", ""],
        description: "A project involving the migration of an SQL database to NoSQL, including database restructuring and web-based data presentation",
        liveUrl: "https://github.com/Axelbau19/1PartialFA",
        githubUrl: "https://github.com/Axelbau19/1PartialFA",
        featured: false,
        category: "Data analytic"
    },
    {
        id: 4,
        title: "Diabetes",
        image: PROJECT_IMG_4,
        tags: ["Python", "Sckit-learn", "Google Colab"],
        description: "My first project exploring machine learning models with scikit-learn, focused on data cleaning for diabetes datasets.",
        liveUrl: "https://colab.research.google.com/github/Axelbau19/Diabetes-/blob/main/Diabetes.ipynb",
        githubUrl: "https://github.com/Axelbau19/Diabetes-",
        featured: false,
        category: "Data analytic and Machine learning"
    },
    {
        id: 5,
        title: "E-commerce Jetpack Compose",
        image: PROJECT_IMG_6,
        tags: ["Kotlin", "TypeScript", "JetPack Compose"],
        description: "My first e-commerce app, introducing me to mobile application development.",
        liveUrl: "https://github.com/Axelbau19/E-CommerceJetpack",
        githubUrl: "https://github.com/Axelbau19/E-CommerceJetpack",
        featured: false,
        category: "web and mobile"
    },
        {
        id: 6,
        title: "SE Python",
        image: PROJECT_IMG_5,
        tags: ["Python", "Experta"],
        description: "My first project where I was introduced to expert systems.",
        liveUrl: "https://github.com/Axelbau19/SEMedico",
        githubUrl: "https://github.com/Axelbau19/SEMedico",
        featured: false,
        category: "Machine Learning Fundamentals"
    },

];


export const DEVELOPMENT_JOURNEY = [

    {
        year: "2020",
        title: "Started Learning code",
        company: "Myself",
        description: "Began learning a programming language with Python. Build my first app, which is a Text-editor",
        icon: Code2,
        color: "bg-blue-500"
    },

    {
        year: "2021-2025",
        title: "Degree in IT Engineering",
        company: "UPIICSA-IPN",
        description: "Graduated, specializing in Data sciences & ETL",
        icon: GraduationCap,
        color: "bg-orange-500"
    },
    {
        year: "2022",
        title: "U-Code It",
        company: "UPIICSA-IPN",
        description: "A student organization focused on learning new technologies and professional development ",
        icon: Users,
        color: "bg-yellow-500"
    },
    {
        year: "2024",
        title: "Social Service Assintant",
        company: "CIC-IPN",
        description: "I supported a master’s student in setting up a data collection system using Aware iOS.",
        icon: Briefcase,
        color: "bg-blue-500"
    }
];


export const PASSIONS = [
    {
        icon: Heart,
        title: "Data science & ETL",
        description: "Extracting,Transforming and Loading data to get KPIs and storytelling"
    },
    {
        icon: BookOpen,
        title: "Continuos learning",
        description: "Always keeping up to learn new technologies and best practices"
    },
];


export const SOCIAL_LINK = [
    {
        name: "Github",
        icon: FiGithub,
        url: "https://github.com/Axelbau19",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10"
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/axel-bautista-68a800241/",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10"
    },

];


export const CONTACT_INFO = [

    {
        icon: MapPin,
        label: "Location",
        value: "Mexico City,CDMX"
    },
    {
        icon: Mail,
        label: "Email",
        value: "bautista.ros.naranja.2017@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+52 5610461321"
    },
];