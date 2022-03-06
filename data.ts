import { RiComputerLine } from "react-icons/ri";
import { Service, Stage } from "./types";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { FaServer, FaDatabase, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNodedotjs, SiExpress, SiTypescript } from "react-icons/si";

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
    title: "Backend Developer",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elitCupiditate ex labore maiores provident sit soluta veniam Aliquamat cumque ea ex exercitationem ipsa molestiae placeat quae quaeratrepudiandae similique totam ",
    id: 1,
  },
  {
    Icon: SiNodedotjs,
    title: "NodeJS",
    date: "16.08 - 19.09.2021",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitCupiditate ex labore maiores provident sit soluta veniam Aliquamat cumque ea ex exercitationem ipsa molestiae placeat quae quaeratrepudiandae similique totam ",
    id: 2,
  },
  {
    Icon: SiExpress,
    title: "Express",
    date: "04.10 - 07.11.2021",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitCupiditate ex labore maiores provident sit soluta veniam Aliquamat cumque ea ex exercitationem ipsa molestiae placeat quae quaeratrepudiandae similique totam ",
    id: 3,
  },
  {
    Icon: FaDatabase,
    title: "MySQL & MongoDB",
    date: "22.11 - 26.12.2021",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitCupiditate ex labore maiores provident sit soluta veniam Aliquamat cumque ea ex exercitationem ipsa molestiae placeat quae quaeratrepudiandae similique totam ",
    id: 4,
  },
  {
    Icon: SiTypescript,
    title: "TypeScript",
    date: "10.01 - 13.02.2022",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitCupiditate ex labore maiores provident sit soluta veniam Aliquamat cumque ea ex exercitationem ipsa molestiae placeat quae quaeratrepudiandae similique totam ",
    id: 5,
  },
  {
    Icon: FaReact,
    title: "React",
    date: "28.02 - 03.04.2022",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitCupiditate ex labore maiores provident sit soluta veniam Aliquamat cumque ea ex exercitationem ipsa molestiae placeat quae quaeratrepudiandae similique totam ",
    id: 6,
  },
];
