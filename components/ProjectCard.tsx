import { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Project } from "../types";
import Image from "next/image";

const ProjectCard: FC<Project> = ({
  name,
  image_path,
  description,
  deployed_url,
  category,
  github_url,
  techs_stack,
}) => {
  const [showModalDetail, setShowModalDetail] = useState(false);

  return (
    <>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowModalDetail(true)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      {/* modal-project-card */}
      {showModalDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 gap-x-12 md:grid-cols-2 dark:text-white dark:bg-dark-100">
          {/* left section of modal*/}
          <section>
            <Image
              src={image_path}
              alt={name}
              width="300"
              height="150"
              layout="responsive"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </section>
          {/* right section of modal */}
          <section>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider rounded-sm">
              {techs_stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
          {/* closing Icon */}
          <button
            onClick={() => setShowModalDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
