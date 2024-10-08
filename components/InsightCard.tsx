"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
const InsightCard = ({
  imgUrl,
  title,
  subtitle,
  index,
}: {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt=""
      className="md:w-[270px] w-full rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h2 className="font-normal text-white lg:text-[42px] text=[26px] ">
          {title}
        </h2>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="/arrow.svg"
          alt=""
          className="h-[40%] w-[40% object-contain]"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
