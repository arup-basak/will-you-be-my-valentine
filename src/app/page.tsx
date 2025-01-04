"use client";

import { useState, useEffect } from "react";
import { saveToDb } from "../utils/action";
import { requestArr } from "../utils/constant";
import Modal from "../components/Modal";
import AcceptedView from "../components/AcceptedView";
import RequestView from "../components/RequestView";

const ValentinePage = () => {
  const [scale, setScale] = useState(1.0);
  const [reqIndex, setReqIndex] = useState(0);
  const [view, setView] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [ip, setIP] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIP(data.ip));
  }, []);

  const handleIncrease = () => {
    setReqIndex(reqIndex + 1);
    setScale(scale * 1.1);
  };

  const handleShow = () => {
    setView(true);
    saveToDb(value, reqIndex, ip);
  };

  const handleSubmit = (name: string) => {
    if (name.length > 0) {
      setModalOpen(false);
    }
    setValue(name);
  };

  return (
    <>
      <Modal isOpen={modalOpen} onSubmit={handleSubmit} />
      <main className={`flex items-center justify-center h-screen flex-col w-full ${modalOpen ? "blur bg-pink-100" : ""}`}>
        {view ? (
          <AcceptedView />
        ) : (
          <RequestView
            scale={scale}
            reqIndex={reqIndex}
            onAccept={handleShow}
            onDecline={handleIncrease}
            requestArr={requestArr}
          />
        )}
      </main>
    </>
  );
};

export default ValentinePage;