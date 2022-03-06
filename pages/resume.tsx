import StageCard from "../components/StageCard";
import { stages } from "../data";
const resume = () => {
  return (
    <>
      <main className="grid grid-cols-1 row-span-5 my-6">
        <section className="h-full px-6 ml-6 border-l-4 border-indigo-500 before:absolute ">
          {stages.map((stage) => (
            <StageCard {...stage} key={stage.id} />
          ))}
        </section>
      </main>
    </>
  );
};

export default resume;
