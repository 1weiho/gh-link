"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateLinkDialog = () => {
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!userName) {
      toast.error("Please enter your GitHub username");
      return;
    }

    router.push(`/${userName}/init`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10">Create Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter your GitHub username</DialogTitle>
          <DialogDescription>
            Please enter your GitHub username to continue.
          </DialogDescription>
        </DialogHeader>
        <Input
          className="mt-2"
          placeholder="Enter your GitHub username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <Button className="mt-2" onClick={handleSubmit}>
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CreateLinkDialog;
