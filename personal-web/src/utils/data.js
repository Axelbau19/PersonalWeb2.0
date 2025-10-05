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

} from "lucide-react";

import {FiGithub, FiLinkedin} from "react-icons/fi";

/* Project IMG */

import PROJECT_IMG_1 from '../assets/img/example.jpg';


export const SKILLS_CATEGORY = [
    {
        title: "Data Science  & ETL",
        icon:FileChartColumn,
        description:"#",
        skills: [
            {name: "Power Bi", level: 90, color: "bg-blue-500"},
            {name: "Tableau", level: 89, color: "bg-orange-500"},
            {name: "Excel/Sheets", level: 95, color: "bg-green-500"},
            {name: "Python", level: 95, color: "bg-purple-500"},
            {name: "Pandas python", level: 90, color: "bg-blue-700"},
            {name: "Numpy python", level: 90, color: "bg-yellow-500"},
            {name: "Statistics and probability", level: 90, color: "bg-red-500"},
            {name: "Scalar", level: 85, color: "bg-pink-500"},
            {name: "Storytelling", level: 90, color: "bg-indigo-500"},
        ]
    },
        {
        title: "Backend Development",
        icon:Server,
        description:"#",
        skills: [
            {name: "Java", level: 90, color: "bg-blue-500"},
            {name: "Kotlin", level: 90, color: "bg-orange-500"},
            {name: "Node.js", level: 95, color: "bg-green-500"},
            {name: "Linux", level: 95, color: "bg-purple-500"},
            {name: "Postman", level: 90, color: "bg-blue-700"},
            {name: "Goo", level: 90, color: "bg-blue-700"},
            {name: "Desing Patterns", level: 90, color: "bg-yellow-500"}
        ]
    },

       {
        title: "Databases",
        icon:Database,
        description: "#",
        skills: [
            {name: "SQL", level: 90, color: "bg-blue-500"},
            {name: "Postgresql", level: 90, color: "bg-orange-500"},
            {name: "MongoDB", level: 95, color: "bg-green-500"},
            {name:"Firebase",level:90,color:"bg-yellow-500"}
        ]
    },

{
        title: "DevOps",
        icon:Cloud,
        description:"#",
        skills: [
            {name: "Google Cloud", level: 90, color: "bg-blue-500"},
        ]
    }

];

export const TECH_STACK = [
    "Power Bi", "Pandas","Numpy","Sckit-learn","Figma", "Github","Jira", "Linux","Gitlab"
];


export const STATS =[
     {number:"20", label:"Projects Completed" },
     {number:"4+", label:"Years Experience" },
     {number:"15+", label:"Technologies" },
];


export const Projects = [
   {
    id:1,
    title:"Poliagenda",
    image: PROJECT_IMG_1,
    tags: ["Java","Gradlew","Android Studio","Firebase"],
    liveUrl:"#",
    githubUrl:"https://github.com/Esa70192/agenda",
    featured:false,
    category:"Web"
   }
];


export const DEVELOPMENT_JOURNEY = [

    {year:"2020",
      title:"Started Learning code",
      company:"Myself",
      description:"Began learning a programming language with Python. Build my first app, which is a Text-editor",
      icon: Code2,
      color: "bg-blue-500"
    },
    
    {year:"2021-2025",
      title:"Degree in IT Engineering",
      company:"UPIICSA-IPN",
      description:"Graduated, specializing in Data sciences & ETL",
      icon: GraduationCap,
      color: "bg-orange-500"
    },
    {year:"2022",
      title:"U-Code It",
      company:"UPIICSA-IPN",
      description:"A student organization focused on learning new technologies and professional development ",
      icon: Users,
      color: "bg-yellow-500"
    },
    {year:"2024",
      title:"Social Service Assintant",
      company:"CIC-IPN",
      description:"I supported a master’s student in setting up a data collection system using Aware iOS.",
      icon: Briefcase,
      color: "bg-blue-500"
    }
];


export const PASSIONS = [
    {
        icon:Heart,
        title:"Data science & ETL",
        description:"Extracting,Transforming and Loading data to get KPIs and storytelling"
    },
        {
        icon:BookOpen,
        title:"Continuos learning",
        description:"Always keeping up to learn new technologies and best practices"
    },
];


export const SOCIAL_MEDIA = [
    {
        name:"Github",
        icon: FiGithub,
        url: "https://github.com/Axelbau19",
        color:"hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10"
    },
    {
        name:"LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/axel-bautista-68a800241/",
        color:"hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10"
    },
    {
        name:"Mail",
        icon: Mail,
        url: "mailto:bautista.ros.naranja.2017@gmail.com",
        color:"hover:text-sky-400",
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
        label : "Email",
        value: "bautista.ros.naranja.2017@gmail.com"
    },
    {
        icon: Phone,
        label : "Phone",
        value: "+52 5610461321"
    },
];