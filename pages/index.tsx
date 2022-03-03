import type {NextPage} from "next";
import {services} from '../data'
import ServiceCard from "../components/ServiceCard";

const Home: NextPage = () => {
    console.log(services)
    return (
        <div>
            <h5>
                Hi I m Radek and I m passionate about all things JavaScript. I work hard, I care about writing clean code and I genuineli love to learn. I m currently looking for the right opportunity to work in an environment that will help me progress into full-stack role.
            </h5>
            <div>
                <h6>What I Offer</h6>
                <div>
                    {services.map(service => (
                        <ServiceCard service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
