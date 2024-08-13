"use client";
import { motion } from "framer-motion";
import {
  fadeIn,
  planetVariants,
  slideIn,
  staggerContainer,
  textVariant,
} from "@/utils/motion";
import {
  TypingText,
  ExploreCard,
  TitleText,
  StartSteps,
  NewFeatures,
} from "@/components";
import { newFeatures, startingFeatures } from "@/constants";
import styles from "@/styles";
import { useState } from "react";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the world" textStyle={"text-center"} />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyle={"text-center"}
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px]  flex w-full h-[550px]"
      >
        <img src="/map.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 h-[70px] w-[70px] right-20 rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="" className="h-full w-full" />
        </div>{" "}
        <div className="absolute top-10 h-[70px] w-[70px] left-20 rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="" className="h-full w-full" />
        </div>{" "}
        <div className="absolute top-1/2 h-[70px] w-[70px] left-[45%] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="" className="h-full w-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
