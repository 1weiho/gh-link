"use client";

import Title from "./Title";
import Paragraph from "./Paragraph";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Initialization = () => {
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!userName) {
      toast.error("Please enter a valid GitHub username");
      return;
    }
    router.push(`/${userName}/init`);
  };

  return (
    <>
      <div className="mb-14 mt-16 flex w-full flex-col space-y-6 px-8 lg:space-y-8 lg:px-24">
        <Title>Initialization tool</Title>
        <Paragraph>
          We also provide an initialization tool to help you quickly create the
          config file.
        </Paragraph>
        <div>
          <h4 className="mb-2 mt-2 text-xs text-slate-400 lg:text-sm">
            Enter your GitHub user name:
          </h4>
          <div className="flex space-x-4 lg:h-12">
            <Input
              type="text"
              className="h-10"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <Button className="h-10" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Initialization;
