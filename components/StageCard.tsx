import {motion} from "framer-motion";
import {FC} from "react";
import {cardVariants} from "../animations";
import {Stage} from "../types";

const StageCard: FC<Stage> = ({Icon, about, date, title}) => {
  return (
      <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{once: true}}
          className="relative   pl-5 before:absolute before:-left-[60px] before:top-[27px] before:w-16 before:h-16 before:border-4 before:bg-orange-500 before:rounded-full before:border-white before:shadow-inner before:shadow-white before:dark:border-dark-500 before:dark:shadow-dark-500 "
      >
        <div>
          <Icon className="absolute w-7 h-7 top-[44.25px] -left-[42px] text-white dark:text-gray-900"/>
        </div>
        <motion.div
            className="col-span-2 p-6 bg-gray-200 rounded-lg shadow-md shadow-gray-400 dark:shadow-orange-500/50 dark:bg-dark-200 md:col-span-1">
          <h3 className="my-5 text-2xl font-bold font-body">{title}</h3>

          <h4 className="mb-3 text-sm opacity-70">{date}</h4>
          <ul className="mb-4">{about.map(desc => <li key={desc}
                                                      className='list-disc  dark:marker:text-orange-500 pb-1.5 capitalize'>{desc}</li>)}</ul>
        </motion.div>
    </motion.div>
  );
};

export default StageCard;
