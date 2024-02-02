"use client";

import { motion } from "framer-motion";
import { Mouse } from "lucide-react";
import Nav from "../Nav";

const Banner = () => {
  return (
    <div className="relative overflow-hidden lg:flex lg:h-screen lg:flex-col lg:justify-between">
      <Nav delayTime={0.7} />
      <div className="lg:mb-12">
        <div className="mt-20 flex w-full flex-col items-center px-10 lg:mt-0">
          <motion.h1
            className="text-center text-4xl font-bold leading-normal text-black lg:text-8xl lg:leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Config With <br /> Only a{" "}
            <span className="bg-gradient-to-br from-sky-300 to-blue-600 bg-clip-text text-transparent">
              JSON
            </span>{" "}
            File
          </motion.h1>
          <motion.h2
            className="mt-6 px-10 text-center text-xs leading-normal tracking-wider text-slate-500 lg:mt-12 lg:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            GH Link is a Link in Bio website that can be configured with only a
            JSON file.
          </motion.h2>
        </div>

        <motion.div
          className="mt-20 flex w-full justify-center lg:mt-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <button className="rounded-xl bg-black px-3 py-2 text-sm tracking-wider text-white lg:px-5 lg:py-3">
            Create now
          </button>
        </motion.div>
      </div>
      <motion.div
        className="mt-0 hidden w-full animate-scrollDown justify-center pb-12 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <Mouse className="text-slate-500" />
      </motion.div>
    </div>
  );
};

export default Banner;
