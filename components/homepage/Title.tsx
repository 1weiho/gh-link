"use client";

import { motion } from "framer-motion";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h3
      className="text-2xl font-medium tracking-wider lg:text-3xl"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h3>
  );
};

export default Title;
