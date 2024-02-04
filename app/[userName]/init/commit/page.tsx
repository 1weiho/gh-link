"use client";

import BackgroundGrid from "@/components/background-grid";
import Code from "@/components/homepage/Code";
import InitGhLinkProgress from "@/components/init-gh-link-progress";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileJson, Github } from "lucide-react";
import Link from "next/link";

const CommitPage = ({ params }: { params: { userName: string } }) => {
  const links = JSON.parse(localStorage.getItem("links") as string);

  return (
    <div className="h-screen">
      <div className="z-10 relative flex flex-col items-center h-full">
        <InitGhLinkProgress className="mt-20" stepNumber={3} />
        <motion.div
          className="space-y-2 mt-32 w-[620px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-1 text-xs text-slate-500 lg:text-sm">
            <FileJson className="h-4 w-4" />
            <p>gh-config.json</p>
          </div>
          <div className="max-h-[600px] overflow-y-scroll scrollbar-hide">
            <Code
              code={JSON.stringify(
                {
                  links: links,
                },
                null,
                4
              )}
            />
          </div>
        </motion.div>
        <Button className="mt-12" asChild>
          <Link
            href={`https://github.com/${params.userName}/${params.userName}/new/main?filename=gh-link.json&value=${encodeURIComponent(
              JSON.stringify(
                {
                  links: links,
                },
                null,
                4
              )
            )}`}
            target="_blank"
          >
            <Github className="h-4 w-4 mr-2" />
            Paste To GitHub
          </Link>
        </Button>
      </div>
      <div className="md:block hidden fixed inset-0 pointer-events-none">
        <BackgroundGrid className="absolute inset-0 opacity-50" />
      </div>
    </div>
  );
};

export default CommitPage;
