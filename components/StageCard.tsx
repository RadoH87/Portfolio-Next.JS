import { FC } from "react";
import { Stage } from "../types";

const StageCard: FC<Stage> = ({ Icon, about, date, title }) => {
  return (
    <>
      <h3 className="my-5 text-2xl font-bold text-center font-body">{title}</h3>
      <div className="relative pl-5 before:absolute before:-left-[45px] before:top-0 before:w-10 before:h-10 before:border-2 before:bg-indigo-500 before:rounded-full before:border-white before:shadow-inner before:shadow-white ">
        <Icon className="absolute w-7 h-7 top-[5.25px] -left-[38px] text-white" />

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
