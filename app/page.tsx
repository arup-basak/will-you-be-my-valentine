"use client";

import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import Image from "next/image";
import kiss_bear from "../public/bear-kiss-bear-kisses.gif";
import happy_bear from "../public/bear-happy.gif";
import { saveToDb } from "./utils";

const Page = () => {
  const [scale, setScale] = useState(1.0);
  const [reqIndex, setReqIndex] = useState(0);
  const [view, setView] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [value, setValue] = useState("");

  const handleIncrease = () => {
    setReqIndex(reqIndex + 1);
    setScale(scale * 1.1);
  };
  const handleShow = () => {
    setView(true);
    saveToDb(value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmitClick = () => {
    if (value.length > 0) {
      setModalOpen(false);
    }
  };

  return (
    <>
      <div
        className={`${
          modalOpen ? "" : "hidden"
        } absolute z-10 flex justify-center items-center w-full h-screen`}
      >
        <div className="p-20 bg-white rounded-xl shadow-lg flex justify-center items-center flex-col gap-3">
          <input
            placeholder="Enter Your Name"
            onChange={handleChange}
            value={value}
            className="border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          />
          <button
            onClick={handleSubmitClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
      <main
        className={`flex items-center justify-center h-screen flex-col w-full ${
          modalOpen ? "blur bg-slate-200" : ""
        }`}
      >
        {view && (
          <>
            <Image src={kiss_bear} alt="bear-kiss" height={400} width={400} />
            <span className="font-semibold">
              Thank you for accepting my request! I will cherish you forever!
            </span>
          </>
        )}
        {!view && (
          <div className="flex items-center justify-center flex-col">
            <Image
              src={happy_bear}
              alt="bear-kiss"
              height={200}
              width={200}
              className=""
            />
            <motion.span
              animate={{ scale: 1.0 + scale * 0.3 }}
              className="text-center w-full"
            >
              Will You Be My Valentine?
            </motion.span>
            <div className="flex flex-row items-center">
              <Button
                text="Yes"
                color="green"
                scale={scale}
                onClick={handleShow}
                className="bg-green-500 hover:bg-green-700"
              />
              <Button
                text={requestArr[reqIndex]}
                color="red"
                scale={1.0}
                onClick={handleIncrease}
                className="bg-red-500 hover:bg-red-700"
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Page;

const requestArr = [
  "No",
  "Really Not?",
  "Think Again",
  "Last Chance!",
  "Surely Not!",
  "You might Regret this!",
  "Give another thought!",
  "Why you deny such a charming request?",
  "I promise it'll be worth it!",
  "You're missing out on something special!",
  "Life's too short to say no!",
  "I'll make it worth your while!",
  "Indulge in a little spontaneity!",
  "You won't regret saying yes!",
  "Just say yes and see what happens!",
  "You're too irresistible to say no to!",
  "I've got a good feeling about this!",
  "Join me for an adventure!",
  "You're too tempting to resist!",
  "Saying yes never felt so right!",
  "Take a chance, say yes!",
  "Let's create some magic together!",
  "I'll make sure you won't regret it!",
  "You'll thank yourself for saying yes!",
  "Trust me, it'll be amazing!",
  "Don't let this opportunity slip away!",
  "Let's turn this moment into something special!",
  "Life's an adventure, let's embrace it!",
  "Let's make a memory you'll never forget!",
  "You won't regret giving in to temptation!",
  "Just say yes and let's make it happen!",
  "You won't want to miss out on this!",
  "I'll make it worth your while, I promise!",
  "You're too charming to resist!",
  "Take my hand and let's do this together!",
  "Let's create some sparks!",
  "Let's make a story worth telling!",
  "Say yes and let's make magic happen!",
  "Why resist such a tempting offer?",
];
