import type { NextPage } from "next";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Hi I m Radek and I m passionate about all things JavaScript. I work
        hard, I care about writing clean code and I genuinely love to learn. I m
        currently looking for the right opportunity to work in an environment
        that will help me progress into full-stack role.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-500"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
