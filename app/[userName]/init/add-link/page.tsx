"use client";

import LinkCard from "@/components/LinkCard";
import ProfileInfo from "@/components/ProfileInfo";
import BackgroundGrid from "@/components/background-grid";
import CreateLinkToolbar from "@/components/create-link-toolbar";
import InitGhLinkProgress from "@/components/init-gh-link-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface Link {
  title: string;
  description: string;
  url: string;
  icon: string;
}

const AddLinkPage = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const router = useRouter();

  const addLink = (link: Link) => {
    setLinks([...links, link]);
  };

  const handleSubmit = () => {
    localStorage.setItem("links", JSON.stringify(links));
    router.push("commit");
  };

  return (
    <div className="h-screen">
      <div className="z-10 relative flex flex-col items-center h-full">
        <InitGhLinkProgress className="mt-20" stepNumber={2} />
        <div className="mt-16 container flex w-full min-h-0 h-full mb-40 justify-center duration-1000 ease-in-out">
          <div className="flex-shrink-0 my-auto pb-20">
            <ProfileInfo
              avatar_url="https://avatars.githubusercontent.com/u/14985020?s=200&v=4"
              login="vercel"
              name="Vercel"
            />
          </div>
          <div
            className={cn(
              "space-y-6 w-0 duration-1000 ease-in-out max-h-full overflow-y-scroll scrollbar-hide",
              links.length > 0 && "w-full ml-20"
            )}
          >
            {links.length > 0 && (
              <div className="flex justify-between">
                <motion.h2
                  className="text-3xl font-medium"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    links.length > 0
                      ? { y: 0, opacity: 1 }
                      : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Links
                </motion.h2>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    links.length > 0
                      ? { y: 0, opacity: 1 }
                      : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button onClick={handleSubmit}>
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Next Step
                  </Button>
                </motion.div>
              </div>
            )}
            {links.map((link, index) => (
              <LinkCard
                key={index}
                title={link.title}
                description={link.description}
                url={link.url}
                icon={link.icon}
                animationDelay={links.length === 1 ? 1 : 0}
              />
            ))}
          </div>
        </div>
        <CreateLinkToolbar className="absolute" addLink={addLink} />
      </div>
      <div className="md:block hidden fixed inset-0 pointer-events-none">
        <BackgroundGrid className="absolute inset-0 opacity-50" />
      </div>
    </div>
  );
};

export default AddLinkPage;
