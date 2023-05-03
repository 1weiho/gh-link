"use client";

import { motion } from "framer-motion";

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p className="text-xs font-light leading-normal text-gray-600 lg:text-lg lg:leading-9 lg:tracking-wide">
        {children}
      </p>
    </motion.div>
  );
};

export default Paragraph;
