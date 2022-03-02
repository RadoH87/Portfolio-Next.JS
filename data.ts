import {RiComputerLine} from 'react-icons/ri'
import {Service} from "./types";
import {AiOutlineAntDesign, AiOutlineApi, FaServer, MdDeveloperMode} from "react-icons/all";


export const services: Service[] = [
    {
        Icon: RiComputerLine,
        title: 'Javascript Developer',
        description: 'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>  and <b>React.js</b>',
    },
    {
        Icon: FaServer,
        title: 'Backend Developer',
        description: 'Handle database, server, api using <b>Express</b> & other popular frameworks',
    },
    {
        Icon: AiOutlineApi,
        title: 'API Developer',
        description: 'I can develop REST API using <b>Node API</b>',
    },
    {
        Icon: MdDeveloperMode,
        title: 'Competitive Developer',
        description: 'A daily problem solver in <b>HackerRank</b> & <b>Leet Code</b>',
    },
    {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX Designer',
        description: 'Stunning user interface designer using <b>Figma</b> & <b>Framer</b>',
    },
    {
        Icon: RiComputerLine,
        title: 'Whatever',
        description: 'Lorem ipsum dolor sit amet, consectetur sfdsdfdsfds sdfdsfdsfdsfds dsfdsfdsf',
    },
]