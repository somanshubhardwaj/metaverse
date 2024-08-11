"use client";
import { motion } from "framer-motion";

import { navVariants } from "@/utils/motion";
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`sm:px-16 px-6 py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01 " />
    <div className={`lg:w-[80%] w-[100%] flex gap-8 justify-between mx-auto `}>
      <img
        src="/search.svg"
        alt="Logo"
        className="h-[24px] w-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h2>
      <img src="/menu.svg" className="w-[24px] h-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
