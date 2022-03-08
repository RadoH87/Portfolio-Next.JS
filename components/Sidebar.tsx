import Image from "next/image";
import Link from "next/link";
import foto from "../public/images/rr.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changedTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src={foto}
        alt="Picture of the author"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-body">
        <span className="text-indigo-500">Rado</span> Holubowski
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Javascript Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-indigo-500 md:w-full">
        <a href="">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Luton, UK</span>
        </div>
        <p className="my-2">radek8787@gmail.com</p>
        <p className="my-2">0044 7402040606</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"
        onClick={() => window.open("mailto:radekh8787@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changedTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"
      >
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
