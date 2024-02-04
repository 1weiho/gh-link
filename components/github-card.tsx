"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Separator } from "./ui/separator";

interface GithubCardProps {
  avatarUrl: string;
  name: string;
  following: number;
  followers: number;
  publicRepos: number;
  className?: string;
}

const GithubCard = ({
  avatarUrl,
  name,
  following,
  followers,
  publicRepos,
  className,
}: GithubCardProps) => {
  return (
    <Tilt
      scale={1.05}
      transitionSpeed={2000}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <div
        className={cn(
          "bg-white rounded-xl px-12 py-12 w-fit shadow flex space-x-12 items-center border",
          className
        )}
      >
        <div className="flex flex-col items-center">
          <Image
            src={avatarUrl}
            alt="Avatar"
            width={256}
            height={256}
            className="h-36 w-36 rounded-full"
          />
          <h2 className="mt-4 text-2xl">{name}</h2>
        </div>
        <div className="space-y-4 w-72">
          <GitHubData
            label="Following"
            emoji="🌟"
            colorClassName="bg-blue-100"
            count={following}
          />
          <GitHubData
            label="Follower"
            emoji="👀"
            colorClassName="bg-green-100"
            count={followers}
          />
          <GitHubData
            label="Repo"
            emoji="📦"
            colorClassName="bg-yellow-100"
            count={publicRepos}
          />
        </div>
      </div>
    </Tilt>
  );
};

interface GitHubDataProps {
  label: string;
  emoji: string;
  colorClassName: string;
  count: number;
}

const GitHubData = ({
  label,
  emoji,
  colorClassName,
  count,
}: GitHubDataProps) => {
  return (
    <div className="flex items-center space-x-4 w-full">
      <span
        className={cn(
          "h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-xl",
          colorClassName
        )}
      >
        {emoji}
      </span>
      <div className="flex items-center space-x-3 w-full">
        <p className="text-xl">{label}</p>
        <Separator className="w-auto grow" />
        <p className="text-2xl">{count.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default GithubCard;
