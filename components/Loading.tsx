"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black text-secondary-white relative overflow-hidden">
      <motion.div
        className=" gradient-02 opacity-60 "
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          opacity: [1, 0.5, 1, 0.25, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      />
      <div className="relative">
        <img src="/headset.svg" alt="" className="w-64 h-64 " />
      </div>
      <div className="max-w-[420px]">
        <span className="enter font-medium text-3xl mx-auto">
          Entering the ‎{" "}
        </span>
      </div>
    </div>
  );
};

export default Loading;
