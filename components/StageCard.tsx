import { FC } from "react";
import { Stage } from "../types";

const StageCard: FC<Stage> = ({ Icon, about, date, title }) => {
  return (
    <>
      <h3 className="my-5 text-2xl font-bold text-center font-body">{title}</h3>
      <div className="relative pl-5 before:absolute before:-left-[58px] before:top-0 before:w-16 before:h-16 before:border-4 before:bg-indigo-500 before:rounded-full before:border-white before:shadow-inner before:shadow-white before:dark:border-dark-500 before:dark:shadow-dark-500 ">
        <Icon className="absolute w-7 h-7 top-[18.25px] -left-[41px] text-white" />

        <h4 className="mb-3 text-lg font-semibold font-body">{date}</h4>
        <p className="mb-4">{about}</p>
        <ul className="pl-5 list-disc">
          <li>dsfdsfdsf</li>
          <li>dsfdsf</li>
          <li>sdfdsfsd</li>
          <li>dsfdsfdsf</li>
        </ul>
      </div>
    </>
  );
};

export default StageCard;
