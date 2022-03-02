import type {NextPage} from "next";
import {services} from '../data'

const Home: NextPage = () => {
    console.log(services)
    return (
        <div>
            <h1>Wszystko dziala</h1>
        </div>
    );
};

export default Home;
