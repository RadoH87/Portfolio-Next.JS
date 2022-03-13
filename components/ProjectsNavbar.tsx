import { FC } from "react";
import { Category } from "../types";

export const NavItem: FC<{ value: Category | "all" }> = ({ value }) => {
  return (
    <li className="capitalize transition duration-100 transform cursor-pointer hover:scale-125 hover:text-indigo-500 ">
      {value}
    </li>
  );
};

const ProjectsNavbar = () => {
  return (
    <div className="relative">
      <div className="flex px-3 py-2 space-x-10 overflow-x-scroll list-none ">
        <NavItem value="all" />
        <NavItem value="javascript" />
        <NavItem value="node" />
        <NavItem value="express" />
        <NavItem value="next" />
        <NavItem value="nest" />
        <NavItem value="mongoDB" />
        <NavItem value="MYSQL" />
      </div>
      <div className="absolute top-0 right-0 w-1/12 h-10 dark:bg-gradient-to-l dark:from-[#0F1115] to-transparent" />
    </div>
  );
};

export default ProjectsNavbar;
