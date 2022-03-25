import { FC } from "react";
import { Category } from "../types";

export const NavItem: FC<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className =
    "capitalize transition duration-100 transform cursor-pointer hover:scale-125 hover:text-orange-500";
  if (active === value) className += " text-orange-500";
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FC<{ handlerFilterCategory: Function; active: string }> =
  (props) => {
    return (
      <div className="relative">
        <div className="flex px-3 py-2 space-x-10 overflow-x-scroll list-none ">
          <NavItem value="all" {...props} />
          <NavItem value="javascript" {...props} />
          <NavItem value="node" {...props} />
          <NavItem value="express" {...props} />
          <NavItem value="next" {...props} />
          <NavItem value="nest" {...props} />
          <NavItem value="mongoDB" {...props} />
          <NavItem value="MYSQL" {...props} />
        </div>
        <div className="absolute top-0 right-0 w-1/12 h-10 dark:bg-gradient-to-l dark:from-[#0a0b0e] to-transparent" />
      </div>
    );
  };

export default ProjectsNavbar;
