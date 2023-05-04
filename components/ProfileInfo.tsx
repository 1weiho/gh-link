"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProfileInfo = (Props: {
  avatar_url: string;
  login: string;
  name: string | null;
}) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={Props.avatar_url}
          alt="Avatar"
          width={256}
          height={256}
          className="h-36 w-36 rounded-full"
        />
      </motion.div>

      <motion.p
        className="mt-4 text-xl tracking-wider text-slate-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        @{Props.login}
      </motion.p>
    </div>
  );
};

export default ProfileInfo;
