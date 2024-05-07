"use client";

import Image from "next/image";
import { Link } from "react-router-dom";
import quote from "../assets/quote.svg";
import Card from "../utils/Card"

const SectionB = () => {
  return (
    <section className="w-full  flex flex-col h-auto mb-8">
      <h1 className="font-bold text-[#4b575f] md:text-3xl text-xl block text-center">
        Self Help 
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1  w-full  place-items-center h-auto">
        <SectionB1 />
        <SectionB2 />
      </div>
    </section>
  );
};

export default SectionB;

const SectionB1 = () => {
  return (
    <div className=" px-8 flex flex-col w-full min-h-full justify-center items-center text-center mx-4">
      <div className="w-full text-start my-4">
        <Image src={quote} alt="" width={40} />
      </div>
      <h1 className="bg-gradient-to-r from-[#CBAA00] to-[#CBAA00] bg-clip-text text-center max-sm:text-2xl text-4xl font-bold text-transparent mx-0 my-2">
        Now you can access Dr Bakhe Dlamini&apos;s mind 24/7 with AI
      </h1>
    </div>
  );
};

const SectionB2 = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-auto w-full gap-4 p-2 place-items-center">
      <Card
        title={"Relationship Readiness"}
        body={"Find out if you are mentally ready for a relationship or not"}
      />
      <Card
        title={"Healing Corner"}
        body={
          "If you're depressed, have no sense of purpose whatsoever, let's talk it out"
        }
      />
      <Card
        title={"Marriage Health"}
        body={"Score your marriage, see how well you're doing"}
      />
      <Card
        title={"Conflicts Resolutions"}
        body={"Let's go through the problem together"}
      />
    </div>
  );
};
