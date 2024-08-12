"use client";
import { motion } from "framer-motion";
import {
  fadeIn,
  planetVariants,
  slideIn,
  staggerContainer,
  textVariant,
} from "@/utils/motion";
import { TypingText, ExploreCard, TitleText, StartSteps } from "@/components";
import { startingFeatures } from "@/constants";
import styles from "@/styles";
import { useState } from "react";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="planet"
          className="w-[90%] h-[90%] object-contain "
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title={"| How Metaverse Works"} textStyle={"text-center"} />
        <TitleText
          title={<>Get started with few clicks</>}
          textStyle={"text-center"}
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
