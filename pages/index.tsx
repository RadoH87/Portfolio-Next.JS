import type { NextPage } from "next";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInR, fadeInUp, routeAnimation, stagger } from "../animations";

const Home: NextPage = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <h5 className="my-3 text-base font-medium">
        Hi I m Radek and I m passionate about all things JavaScript. I work
        hard, I care about writing clean code and I genuinely love to learn. I m
        currently looking for the right opportunity to work in an environment
        that will help me progress into full-stack role.
      </h5>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.id}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
