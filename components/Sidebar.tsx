import Image from "next/image";
import foto from "../public/images/jj.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <Image
        src={foto}
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-[50%] object-cover"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>Rado</span> Holubowski
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Javascript Developer
      </p>
      <a
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around my-5 text-indigo-500 w-9/12 md:w-full mx-auto">
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
      {/* adress */}
      <div
        className="my-5 py-4 bg-gray-200 "
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Luton, UK</span>
        </div>
        <p className="my-2">radek8787@gmail.com</p>
        <p className="my-2">0044 7402040606</p>
      </div>
      <button className="bg-gradient-to-r from-indigo-500 to-blue-500 my-2 w-8/12 rounded-full py-2 px-5 text-white">
        Email Me
      </button>
      <button className="bg-gradient-to-r from-indigo-500 my-2 to-blue-500 w-8/12 rounded-full py-2 px-5 text-white">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
