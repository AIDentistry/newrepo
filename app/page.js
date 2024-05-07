import Image from "next/image";
import SectionA from "./components/SectionA"
import SectionB from "./components/SectionB"
import SectionC from "./components/SectionC"
import SectionD from "./components/SectionD"
import Cards from "./components/Cards"
import ChatUI from "./components/ChatUI";

export default function Home() {


  return (
    <main className="block md:container   w-full place-items-center h-auto gap-8 ">
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      {/* <Cards images={images} /> */}
    </main>
  );
}
