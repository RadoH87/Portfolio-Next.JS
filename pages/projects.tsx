import {motion} from "framer-motion";
import {useState} from "react";
import {fadeInR, routeAnimation, stagger} from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import {projects as projectsData} from "../data";
import {Category} from "../types";

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");
    const [showModalDetail, setShowModalDetail] = useState<number | null>(null);

    const handlerFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }
        const newArray = projectsData.filter((project) =>
            project.category.includes(category)
        );
        setProjects(newArray);
        setActive(category);
    };

    return (
        <motion.div
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="px-5 py-2 lg:overflow-y-scroll bg-white lg:h-[70vh] dark:bg-dark-100"
        >
            <ProjectsNavbar
                handlerFilterCategory={handlerFilterCategory}
                active={active}
            />
            <motion.div
                className="relative grid grid-cols-12 gap-4 my-3 "
                variants={stagger}
                initial="initial"
                animate="animate"
            >
                {projects.map((project) => (
                    <motion.div
                        className="col-span-12 p-2 bg-gray-200 rounded-lg shadow-md shadow-gray-400 dark:shadow-orange-500/50 sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                        variants={fadeInR}
                        key={project.id}
                    >
                        <ProjectCard
                            project={project}
                            showModalDetail={showModalDetail}
                            setShowModalDetail={setShowModalDetail}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
