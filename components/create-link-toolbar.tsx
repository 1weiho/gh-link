import { Link } from "@/app/[userName]/init/add-link/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CaseSensitive, Link2, Text, Wand2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

interface CreateLinkToolbarProps {
  addLink: (link: Link) => void;
  className?: string;
}

const CreateLinkToolbar = ({ addLink, className }: CreateLinkToolbarProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [url, setUrl] = useState("");
  const [icon, setIcon] = useState("");
  const [iconInput, setIconInput] = useState("");
  const [openDescriptionPopover, setOpenDescriptionPopover] = useState(false);
  const [openIconPopover, setOpenIconPopover] = useState(false);

  const handleAddLink = () => {
    if (!title) {
      toast.error("Title is required");
      return;
    }
    if (!url) {
      toast.error("URL is required");
      return;
    }
    addLink({ title, description, url, icon });
    setTitle("");
    setDescription("");
    setUrl("");
    setIcon("");
  };

  const handleAddDescription = () => {
    setDescription(descriptionInput);
    setOpenDescriptionPopover(false);
  };

  const handleAddIcon = () => {
    setIcon(iconInput);
    setOpenIconPopover(false);
  };

  return (
    <div
      className={cn(
        "bottom-12 shadow rounded-2xl bg-white/20 backdrop-blur border px-8 py-4 flex space-x-4",
        className
      )}
    >
      <div className="flex items-center space-x-2">
        <CaseSensitive />
        <p>Title</p>
        <Input
          placeholder="Enter Link Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <Link2 />
        <p>URL</p>
        <Input
          placeholder="Enter Link URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        <Popover
          open={openDescriptionPopover}
          onOpenChange={setOpenDescriptionPopover}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("max-w-[240px]", !description && "border-dashed")}
            >
              <Text className="h-4 w-4 mr-2 flex-shrink-0" />
              <p className="truncate">{description || "Add Description"}</p>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] mb-2">
            <p className="font-medium mb-2">Enter the description</p>
            <Textarea
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
              placeholder="Enter the description here"
            />
            <Button
              className="mt-3"
              variant="outline"
              onClick={handleAddDescription}
            >
              Add
            </Button>
          </PopoverContent>
        </Popover>
        <Popover open={openIconPopover} onOpenChange={setOpenIconPopover}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="border-dashed">
              <Wand2 className="h-4 w-4 mr-2" />
              {icon ? (
                <Image
                  src={icon}
                  width={256}
                  height={256}
                  alt="website icon"
                  className="h-6 w-6 rounded"
                />
              ) : (
                "Add Icon"
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mb-2 flex space-x-2 w-[360px]">
            <Input
              placeholder="Enter icon's url"
              value={iconInput}
              onChange={(e) => setIconInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddIcon()}
            />
            <Button variant="outline" onClick={handleAddIcon}>
              Add
            </Button>
          </PopoverContent>
        </Popover>
        <Button onClick={handleAddLink}>Add</Button>
      </div>
    </div>
  );
};

export default CreateLinkToolbar;
