import {FC} from "react";
import {Service} from "../types";

const ServiceCard: FC<Service> = ({title, Icon, description}) => {

    const createMarkup = () => {
        return {
            __html: description,
        };
    };

    return (
    <div className="flex items-center p-2 space-x-4 ">
      <Icon className="w-12 h-12 text-orange-500" />

      <div>
        <h3 className="font-bold">{title}</h3>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
