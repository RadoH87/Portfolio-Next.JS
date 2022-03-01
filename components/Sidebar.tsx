import Image from "next/image";
import foto from "../public/images/rm.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
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
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>Rado</span> Holubowski
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Javascript Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
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
      {/* adress */}
      <div
        className="py-4 my-5 bg-gray-200 "
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Luton, UK</span>
        </div>
        <p className="my-2">radek8787@gmail.com</p>
        <p className="my-2">0044 7402040606</p>
      </div>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-indigo-500 to-blue-500">
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-indigo-500 to-blue-500">
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
