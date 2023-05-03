"use client";

import { motion } from "framer-motion";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold tracking-wider lg:text-3xl">
        {children}
      </h3>
    </motion.div>
  );
};

export default Title;
