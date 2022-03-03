import {FC} from "react";
import {Service} from "../types";


const ServiceCard:FC<{service:Service}> = ({service:{title,Icon,description}}) => {
    return (
        <div>
            <Icon />
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard