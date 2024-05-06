"use client";

import { Message, useAssistant as useAssistant } from "ai/react";
import { useEffect, useRef } from "react";
import Spinner from "react-spinner";
import infiteai_logo_white from "../assets/bakhe.png";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";
import { Link } from "react-router-dom";
// import "../components/globals.css";

export default function Chat() {
  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "/app/api/assistant",
    });

  

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
  }, [status]);

  return (
    <section
      draggable="true"
      className="relative z-10  flex flex-col justify-center items-start xl:w-[18rem] lg:w-[40rem] w-full xl:h-[85vh] lg:h-[80vh] max-sm:h-screen
          mx-auto border-2 border-solid border-gray-900 shadow-2xl bg-[#0C1A22] rounded-none overflow-hidden"
    >
      <header className="flex justify-between gap-2 items-center flex-row w-full h-[4rem] m-3 bg-[#0C1A22]">
        <div className="flex gap-2">
          <h1 className="flex justify-center items-center">
            <a href="/">
              <FaArrowLeft />
            </a>
          </h1>
          <div className="rounded-full overflow-hidden w-10 h-10">
            <Image
              src={infiteai_logo_white}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="block text-start">
            <p className="text-sm font-medium">Bakhe Dlamini AI</p>
            <p className="text-xs font-normal">Online</p>
          </div>
        </div>
        <div></div>
        <div></div>

        <FaPhone style={{ transform: "rotate(90deg)" }} />
        <FaVideo />
        <div></div>
      </header>
      <section className="flex-grow overflow-y-auto">
        {/* {error != null && (
          <div className="relative px-6 py-4 text-white bg-black rounded-md">
            <span className="block sm:inline">
              Error: {(error as any).toString()}
            </span>
          </div>
        )} */}
        {messages.map((m: Message) => (
          <ChatBubble key={""} message={m} id={m.id} status={status} />
        ))}
        {status === "in_progress" && (
          <Spinner name="line-scale" color="#ADD8E6" />
        )}
      </section>
      <footer className="flex w-full ">
        <form onSubmit={submitMessage} className="flex w-full">
          <input
            ref={inputRef}
            className="w-full h-[3rem]  p-2  mx-2 my-4 rounded-2xl bg-[#26353F]"
            value={input}
            placeholder="Message"
            onChange={handleInputChange}
          />
        </form>
      </footer>
    </section>
  );
}

const ChatBubble = ({ message, id, status }) => {
  console.log(status);
  const position = message.role === "user" ? "justify-end" : "justify-start";
  const showTicks = status === "delivered" || status === "read";
  console.log(showTicks);

  return (
    <div className={`flex w-full ${position} h-fit max-w-md p-2 mb-1 `}>
      <div
        className={`chat-bubble ${
          message.role === "user"
            ? "text-start bg-[#006753]"
            : "text-start  bg-[#26353F]"
        } px-3 py-1 rounded-2xl shadow-2xl w-fit text-white text-wrap font-medium`}
      >
        <span>
          {message.content}
          {message.role === "user" && ( // Add conditional statement here
            <MdDoneAll className="inline-block ml-2" />
          )}
        </span>
      </div>
    </div>
  );
};
