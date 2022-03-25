import { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Project } from "../types";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInR, stagger } from "../animations";

const ProjectCard: FC<{
  project: Project;
  showModalDetail: number | null;
  setShowModalDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    description,
    deployed_url,
    category,
    github_url,
    techs_stack,
    id,
  },
  showModalDetail,
  setShowModalDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowModalDetail(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      {/* modal-project-card */}
      {showModalDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100  gap-x-12 md:grid-cols-2 dark:text-white dark:bg-dark-100">
          {/* left section of modal*/}
          <motion.section
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInR}>
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>
            <motion.div
              variants={fadeInR}
              className="flex justify-center my-4 space-x-3"
            >
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
            </motion.div>
          </motion.section>
          {/* right section of modal */}
          <motion.section
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.h3
              variants={fadeInR}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h3>
            <motion.h4 variants={fadeInR} className="mb-3 font-medium">
              {description}
            </motion.h4>
            <motion.div
              variants={fadeInR}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider rounded-sm"
            >
              {techs_stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.section>
          {/* closing Icon */}
          <button
            onClick={() => setShowModalDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
