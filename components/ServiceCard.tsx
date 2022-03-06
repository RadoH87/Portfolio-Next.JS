import { FC } from "react";
import { Service } from "../types";

const ServiceCard: FC<Service> = ({ title, Icon, description }) => {
  {
    /* XSS prevent function */
  }
  const createMarkup = () => {
    return {
      __html: description,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-indigo-500" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
