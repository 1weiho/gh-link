import BackgroundGrid from "@/components/background-grid";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getGhUser } from "@/fetchers/github";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        <p className="text-2xl">{count}</p>
      </div>
    </div>
  );
};

const InitPage = async ({ params }: { params: { userName: string } }) => {
  const user = await getGhUser(params.userName);

  return (
    <div className="h-screen">
      <div className=" z-10 relative flex flex-col items-center">
        <div className="w-full flex justify-center items-center space-x-4 pt-20">
          <span className="h-10 w-10 text-xl font-bold rounded-full border-2 flex items-center justify-center border-blue-500 text-gray-500">
            1
          </span>
          <Separator className="w-32 h-0.5 bg-gray-300" />
          <span className="h-10 w-10 text-xl font-bold rounded-full border-2 flex items-center justify-center border-gray-300 text-gray-300">
            2
          </span>
          <Separator className="w-32 h-0.5 bg-gray-300" />
          <span className="h-10 w-10 text-xl font-bold rounded-full border-2 flex items-center justify-center border-gray-300 text-gray-300">
            3
          </span>
        </div>
        <h1 className="mt-40 font-semibold text-3xl">
          Let&apos;s get started, {user.name}.
        </h1>
        <div className="mt-6 bg-white rounded-xl px-12 py-12 w-fit shadow flex space-x-12 items-center border">
          <div className="flex flex-col items-center">
            <Image
              src={user.avatar_url}
              alt="Avatar"
              width={256}
              height={256}
              className="h-36 w-36 rounded-full"
            />
            <h2 className="mt-4 text-2xl">{user.name}</h2>
          </div>
          <div className="space-y-4 w-72">
            <GitHubData
              label="Following"
              emoji="🚀"
              colorClassName="bg-blue-100"
              count={user.following.toLocaleString()}
            />
            <GitHubData
              label="Follower"
              emoji="🔍"
              colorClassName="bg-green-100"
              count={user.followers.toLocaleString()}
            />
            <GitHubData
              label="Repo"
              emoji="📦"
              colorClassName="bg-yellow-100"
              count={user.public_repos.toLocaleString()}
            />
          </div>
        </div>
        <Button className="mt-20">Next</Button>
      </div>
      <div className="md:block hidden fixed inset-0 pointer-events-none">
        <BackgroundGrid className="absolute inset-0 opacity-50" />
      </div>
    </div>
  );
};

export default InitPage;
