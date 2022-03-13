import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="px-5 py-2 lg:overflow-y-scroll lg:h-[70vh]">
      <nav>Navbar</nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
