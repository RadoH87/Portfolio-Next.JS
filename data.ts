import {RiComputerLine} from "react-icons/ri";
import {Project, Service, Stage} from "./types";
import {AiOutlineAntDesign, AiOutlineApi} from "react-icons/ai";
import {MdDeveloperMode} from "react-icons/md";
import {FaServer, FaDatabase, FaReact} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {SiNodedotjs, SiExpress, SiTypescript} from "react-icons/si";
import {GrTest} from "react-icons/gr";

export const services: Service[] = [
    {
        Icon: RiComputerLine,
        title: "Javascript Developer",
        description:
            "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>  and <b>React.js</b>",
        id: 1,
    },
    {
        Icon: FaServer,
        title: "backend Developer",
        description:
            "Handle database, server, api using <b>Express</b> & other popular frameworks",
        id: 2,
    },
    {
        Icon: AiOutlineApi,
        title: "API Developer",
        description: "I can develop REST API using <b>Node API</b>",
        id: 3,
    },
    {
        Icon: MdDeveloperMode,
        title: "Competitive Developer",
        description:
            "A daily problem solver in <b>HackerRank</b> & <b>Leet Code</b>",
        id: 4,
    },
    {
        Icon: AiOutlineAntDesign,
        title: "UI/UX Designer",
        description:
            "Stunning user interface designer using <b>Figma</b> & <b>Framer</b>",
        id: 5,
    },
    {
        Icon: RiComputerLine,
        title: "Whatever",
        description:
            "Lorem ipsum dolor sit amet, consectetur sfdsdfdsfds sdfdsfdsfdsfds dsfdsfdsf",
        id: 6,
    },
];

export const stages: Stage[] = [
    {
        Icon: IoLogoJavascript,
        title: "Javascript",
        date: "28.06 - 01.08.2021",
        about:
            "JavaScript fundamentals: variables, if/else, operators, boolean logic,\n" +
            "functions, arrays, objects, loops, strings, etc.\n" +
            "Modern OOP: Classes, constructors, prototypal inheritance,\n" +
            "encapsulation, etc.\n" +
            "Asynchronous JavaScript: Event loop, promises, async/await, AJAX\n" +
            "calls and APIs\n" +
            "Modern tools for 2022 and beyond: NPM, Parcel, Babel and ES6\n" +
            "modules ",
        id: 1,
    },
    {
        Icon: SiNodedotjs,
        title: "NodeJS",
        date: "16.08 - 19.09.2021",
        about:
            " Learning the basics as well as advanced concepts of NodeJS.\n" +
            " NodeJS ecosystem, NPM and Yarn Command.\n" +
            " The Model View Controller (MVC).\n" +
            " Event Emitter, Async Await patterns.\n" +
            " Cryptography and Streams in Node.js.\n" +
            " Module HTTP ",
        id: 2,
    },
    {
        Icon: SiExpress,
        title: "Express",
        date: "04.10 - 07.11.2021",
        about:
            "Understanding the basics of HTTP and the request/response cycle.\n" +
            "Operate that Express Server as a REST API.\n" +
            "Using that Express Server to render front-end web pages with handlebars.\n",
        id: 3,
    },
    {
        Icon: FaDatabase,
        title: "MySQL & MongoDB",
        date: "22.11 - 26.12.2021",
        about:
            "Database types - RDBMS(MySQL) & NoSQL(MongoDB)\n" +
            "Database Indexing, Stored Procedures & Transactions…\n" +
            "Basic to advanced SQL queries with complex data-structures\n" +
            "NoSQL database structure designing using MongoDB",
        id: 4,
    },
    {
        Icon: SiTypescript,
        title: "TypeScript",
        date: "10.01 - 13.02.2022",
        about:
            "TypeScript and its Features like Types, ES6 Support, Classes, Modules, Interfaces\n" +
            "Learn how to combine TypeScript with NodeJS / Express.\n" +
            "Maintained and refactored websites and user interfaces.\n" +
            "Utilized chrome debugger to test and ﬁx UI frontend bugs.\n" +
            "Learn TypeScript both in theory as well as applied to real use-cases and projects",
        id: 5,
    },
    {
        Icon: FaReact,
        title: "React",
        date: "28.02 - 03.04.2022",
        about:
            "Build powerful, fast, user-friendly and reactive web apps\n" +
            "Utilized GraphQL API to perform CRUD functionality to update the UI.\n" +
            "Provide amazing user experiences by leveraging the power of JavaScript with ease\n" +
            "Learn about React Hooks and React Components\n" +
            "Learn how to combine TypeScript with ReactJS.",
        id: 6,
    },
    {
        Icon: GrTest,
        title: "Node.Js Advance - Testing | Deployment | Application Architecture | Git",
        date: "18.04 - 22.05.2022",
        about:
            "Basic Concepts of Software Testing.\n" +
            "Implementing the test process on a Test Management Tool (JEST)\n" +
            "Write tests for error handling\n" +
            "Advanced unit testing techniques using Jest\n" +
            "Integration tests for Node apps\n" +
            "Understand how Git works behind the scenes\n" +
            "Mastering the essential Git workflow: adding & committing\n" +
            "Perform Git merges and resolve merge conflicts.\n" +
            "Work with Git branches.\n" +
            "Undo changes using git restore, git revert, and git reset.\n" +
            "Mastering collaboration workflows: pull requests, \"fork & clone\", etc",
        id: 7,
    },
];

export const projects: Project[] = [
    {
        id: 1,
        name: "MERN",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image_path: "/assets/images/exe1.jpg",
        deployed_url: "dsfdsfdsfdsf sdf sdf dsfdsf ",
        github_url: "sdffdf dsf dsfsdfdsf dsfsdf",
        category: ["mongoDB", "express", "react", "node"],
        techs_stack: ["React", "Tailwind", "Mongoose"],
    },
    {
        id: 2,
        name: "Video Player",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image_path: "/assets/images/exe2.jpg",
        deployed_url: "dsfdsfdsfdsf sdf sdf dsfdsf ",
        github_url: "sdffdf dsf dsfsdfdsf dsfsdf",
        category: ["mongoDB", "express", "react", "next"],
        techs_stack: ["React", "Tailwind", "Mongoose", "Next"],
    },
    {
        id: 3,
        name: "Task Manager",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image_path: "/assets/images/exe3.jpg",
        deployed_url: "dsfdsfdsfdsf sdf sdf dsfdsf ",
        github_url: "sdffdf dsf dsfsdfdsf dsfsdf",
        category: ["mongoDB", "nest", "react", "node"],
        techs_stack: ["React", "Tailwind", "Mongoose", "Prisma"],
    },
    {
        id: 4,
        name: "Portfolio",
        description:
            "Developer Portfolio made with Next JS Framer Motion and TypeScript.",
        image_path: "/assets/images/exe4.jpg",
        deployed_url: "dsfdsfdsfdsf sdf sdf dsfdsf ",
        github_url: "https://github.com/RadoH87/Portfolio-Next.JS",
        category: ["next", "react"],
        techs_stack: ["Next", "React", "Tailwind"],
    },
    {
        id: 5,
        name: "Cookie-Maker",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image_path: "/assets/images/exe5.jpg",
        deployed_url: "dsfdsfdsfdsf sdf sdf dsfdsf ",
        github_url: "sdffdf dsf dsfsdfdsf dsfsdf",
        category: ["next", "react"],
        techs_stack: ["Next", "React", "Tailwind"],
    },
    {
        id: 6,
        name: "Warrior",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image_path: "/assets/images/exe11.jpg",
        deployed_url: "dsfdsfdsfdsf sdf sdf dsfdsf ",
        github_url: "sdffdf dsf dsfsdfdsf dsfsdf",
        category: ["next", "react"],
        techs_stack: ["Next", "React", "Tailwind"],
    },
    {
        id: 7,
        name: "Weather-App",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image_path: "/assets/images/exe10.jpg",
        deployed_url: "dsfdsfdsfdsf sdf sdf dsfdsf ",
        github_url: "sdffdf dsf dsfsdfdsf dsfsdf",
        category: ["next", "react"],
        techs_stack: ["Next", "React", "Tailwind"],
    },
    {
        id: 8,
        name: "Hulu-2.0",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image_path: "/assets/images/exe8.jpg",
        deployed_url: "dsfdsfdsfdsf sdf sdf dsfdsf ",
        github_url: "sdffdf dsf dsfsdfdsf dsfsdf",
        category: ["next", "react"],
        techs_stack: ["Next", "React", "Tailwind"],
    },
];
