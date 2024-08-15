"use client";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import styles from "@/styles";
const Hero = () => (
  <section className={`sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6 `}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col relative`}
    >
      <motion.div
        className="absolute right-20 top-0 hidden md:flex flex-col gap-5"
        variants={{
          hidden: {
            x: 200,
            opacity: 0,
          },
          show: {
            x: 0,
            opacity: 1,
          },
        }}
        initial="hidden"
        animate="show"
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <img src="/facebook.svg" alt="" />
        <img src="/instagram.svg" alt="" />
        <img src="/linkedin.svg" alt="" />
        <img src="/twitter.svg" alt="" />
      </motion.div>
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]" />
        <img
          src="/cover.png"
          alt="hero"
          className="w-full sm:h-[500px] h-[350px] object-coverb rounded-tl-[140px] z-10 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
