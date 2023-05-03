"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="w-full p-6 lg:flex lg:justify-between lg:px-16 lg:pt-12">
      <motion.div
        initial={{ x: -25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <a className="flex items-center space-x-2" href="/">
          <Image
            src="/gh-link.svg"
            alt="GH Link Icon"
            width={256}
            height={256}
            className="h-6 w-6"
          />
          <p className="text-base font-semibold tracking-widest text-black">
            GH Link
          </p>
        </a>
      </motion.div>
      <motion.div
        initial={{ x: 25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <a
          href="https://github.com/davidho0403/gh-link"
          className="hidden rounded-full p-4 duration-500 hover:bg-slate-50 lg:block"
        >
          <Github className="h-6 w-6" />
        </a>
      </motion.div>
    </div>
  );
};

export default Nav;
