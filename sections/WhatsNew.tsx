"use client";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { TypingText, TitleText, NewFeatures } from "@/components";
import { newFeatures } from "@/constants";
import styles from "@/styles";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title={"| What's new?"} />
        <TitleText title={<>What's new about metaversus?</>} />
        <div className="mt-[48px] flex  gap-[24px] flex-wrap justify-between">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="planet"
          className="w-[90%] h-[90%] object-contain "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
