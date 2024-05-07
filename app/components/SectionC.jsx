import Image from "next/image";
import Cards from "./Cards";
import { listOfHeadings } from "../utils/objects";
import packages from "../assets/package_1.png";
import books from "../assets/book_2.png";
import our_pov from "../assets/moments_1.png"
import events from "../assets/events_1.png"


const listOfImages_1 = [
  "/assets/hero_image.png",
  "/assets/hero_image.png",
  "/assets/hero_image.png",
  "/assets/hero_image.png",
];

const listOfImages_2 = [
  "/assets/image.png",
  "/assets/hero_image.png",
  "/assets/hero_image.png",
  "/assets/hero_image.png",
];

const listOfImages_3 = [
  "/assets/hero_image.png",
  "/assets/hero_image.png",
  "/assets/hero_image.png",
  "/assets/hero_image.png",
];

const listOfImages_4 = [
  "/assets/hero_image.png",
  "/assets/hero_image.png",
  "/assets/hero_image.png",
  "/assets/hero_image.png",
];

const labels = ["Bookings", "Buy Tickets", "Shop", "More Info"]

const totalLists = [packages, events, books, our_pov];

const SectionC = () => {
  return (
    <section className="grid xl:grid-cols-2 grid-cols-1  w-full place-items-center h-auto gap-4 md:my-4 my-2">
      {listOfHeadings.map((heading, index) => (
        <GridItems key={heading} heading={heading} listOfImages={totalLists[index]} label={labels[index]} />
      ))}
    </section>
  );
};

export default SectionC;

const GridItems = ({ heading, listOfImages, label }) => (
  <div className="md:w-3/5 w-full md:p-4 xl:p-0 text-center">
    <h1 className="font-bold text-[#4b575f] md:text-3xl text-xl block text-center md:mb-8 mb-4">
      {heading}
    </h1>
    <Cards hero_image={listOfImages} />
    <button className="w-1/2 bg-[#CBAA00] p-2 rounded-full font-extrabold text-lg md:mt-4 mt-2">
      {label}
    </button>
  </div>
);
