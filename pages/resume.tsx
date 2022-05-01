import { motion } from "framer-motion";
import { charAnimation, routeAnimation, stagger } from "../animations";
import StageCard from "../components/StageCard";
import { stages } from "../data";
const resume = () => {
  const sentence: string = "my journey";
  return (
    <>
      <motion.div
        className="px-6 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.h3 className="flex pb-4 text-4xl font-bold capitalize md:text-5xl justify-evenly font-body ">
          {sentence.split("").map((letter, index) => (
            <motion.span className="" variants={charAnimation} key={index}>
              {letter}
            </motion.span>
          ))}
        </motion.h3>
      </motion.div>

      <motion.main
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid grid-cols-1 row-span-5 bg-slate-50 lg:overflow-y-scroll  lg:h-[58vh] dark:bg-dark-100"
      >
        <motion.section className="grid gap-6 py-4 mt-5  px-6 ml-10 border-orange-500 border-l-[6px] before:absolute ">
          {stages.map((stage) => (
            <motion.div key={stage.id}>
              <StageCard {...stage} />
            </motion.div>
          ))}
        </motion.section>
      </motion.main>
    </>
  );
};

export default resume;
