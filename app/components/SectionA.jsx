import Image from "next/image";
import hero_image from "../assets/hero_image.png";

const SectionA = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-auto w-full place-items-center md:mb-[3rem] mb-4 bg-[#5B6A73]">
      <SectionA1 />
      {/* <SectionA2 /> */}
      <SectionA2 />
    </div>
  );
};

export default SectionA;

const SectionA2 = () => {
  return (
    <div className=" w-full h-auto  flex flex-col justify-between items-center md:p-12 p-4 ">
      <h1
       
        className=" md:text-4xl text-xl text-center text-pretty font-bold"
      >
        BAKHE DLAMINI{" "}
        <span className="block lg:text-xl text-sm">Consultancy</span>
      </h1>
      <h2 className="xl:m-4">
        Community Psychologist, Marriage & Family Therapist{" "}
        <span>
          with clientele that spans throughout South Africa, the US, UK,
          Australia, Abu Dhabi, Suide Arabia, China, Taiwan, Botswana, Namibia,
          Eswatini and many other countries.
        </span>
      </h2>
      <button className="w-1/2 bg-[#CBAA00] p-2 rounded-full font-extrabold text-lg my-4">Bookings</button>
    </div>
  );
};

const SectionA1 = () => {
  return (
    <div className="flex w-full h-auto md:h-[20rem] ">
      <Image
        className="w-full h-auto"
        src={hero_image}
        alt="Next.js Logo"
        priority
      />
    </div>
  );
};
