"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "lucide-react";

const LinkCard = (Props: {
  title: string;
  description: string;
  url: string;
  icon: string;
  animationDelay: number;
}) => {
  // TODO: add icon domain color background

  return (
    <motion.a
      href={Props.url}
      initial={{ scale: 0.9, y: 20, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: Props.animationDelay }}
      viewport={{ once: true }}
      whileTap={{
        scale: 0.95,
        transition: { delay: 0 },
      }}
      className="flex w-full items-center space-x-4 rounded-3xl border-[0.08rem] border-slate-300 px-6 py-4 shadow shadow-slate-100 lg:duration-150 lg:hover:bg-slate-50 bg-white"
    >
      {Props.icon ? (
        <Image
          src={Props.icon}
          width={256}
          height={256}
          alt="website icon"
          className="h-8 w-8"
        />
      ) : (
        <Link className="h-8 w-8 p-1" />
      )}

      <div className="flex flex-col">
        <h1 className="text-lg text-slate-800">{Props.title}</h1>
        <p className="text-sm text-slate-600">{Props.description}</p>
      </div>
    </motion.a>
  );
};

export default LinkCard;
