import { motion } from "framer-motion";
import { fadeInR, fadeInUp, stagger } from "../animations";
import StageCard from "../components/StageCard";
import { stages } from "../data";
const resume = () => {
  return (
    <motion.main className="grid grid-cols-1 row-span-5 my-6 lg:overflow-y-scroll lg:h-[70vh]">
      <motion.section className=" px-6 ml-10 border-indigo-500 border-l-[6px] before:absolute ">
        {stages.map((stage) => (
          <StageCard {...stage} key={stage.id} />
        ))}
      </motion.section>
    </motion.main>
  );
};

export default resume;
