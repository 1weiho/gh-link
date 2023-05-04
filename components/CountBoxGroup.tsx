"use client";

import { motion } from "framer-motion";
import CountBox from "./CountBox";

const CountBoxGroup = (Props: { user: any }) => {
  return (
    <motion.div
      className="flex w-full items-center justify-between lg:overflow-hidden lg:rounded-xl lg:bg-stone-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      <CountBox
        count={Props.user.following}
        type="Following"
        href={`https://github.com/${Props.user.login}?tab=following`}
      />
      <span className="hidden h-1/3 w-[.1rem] bg-slate-200 lg:block"></span>
      <CountBox
        count={Props.user.followers}
        type="Follower"
        href={`https://github.com/${Props.user.login}?tab=followers`}
      />
      <span className="hidden h-1/3 w-[.1rem] bg-slate-200 lg:block"></span>
      <CountBox
        count={Props.user.public_repos}
        type="Repo"
        href={`https://github.com/${Props.user.login}?tab=repositories`}
      />
    </motion.div>
  );
};

export default CountBoxGroup;
