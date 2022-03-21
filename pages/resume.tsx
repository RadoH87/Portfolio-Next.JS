import { motion } from "framer-motion";
import { fadeInR, fadeInUp, routeAnimation, stagger } from "../animations";
import StageCard from "../components/StageCard";
import { stages } from "../data";
const resume = () => {
  return (
    <motion.main
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="grid grid-cols-1 row-span-5 my-6 lg:overflow-y-scroll lg:h-[70vh]"
    >
      <section className=" px-6 ml-10 border-indigo-500 border-l-[6px] before:absolute ">
        {stages.map((stage) => (
          <StageCard {...stage} key={stage.id} />
        ))}
      </section>
    </motion.main>
  );
};

export default resume;
