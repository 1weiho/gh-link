"use client";

import { motion } from "framer-motion";

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.p
      className="text-xs font-normal leading-normal text-gray-600 lg:text-lg lg:leading-9 lg:tracking-wider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
