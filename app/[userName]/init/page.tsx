import BackgroundGrid from "@/components/background-grid";
import GithubCard from "@/components/github-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getGhUser } from "@/fetchers/github";

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
        <h1 className="mt-36 font-semibold text-3xl">
          Let&apos;s get started, {user.name}.
        </h1>
        <GithubCard
          avatarUrl={user.avatar_url}
          name={user.name}
          following={user.following}
          followers={user.followers}
          publicRepos={user.public_repos}
          className="mt-16"
        />
        <Button className="mt-20 h-10 w-20">Next</Button>
      </div>
      <div className="md:block hidden fixed inset-0 pointer-events-none">
        <BackgroundGrid className="absolute inset-0 opacity-50" />
      </div>
    </div>
  );
};

export default InitPage;
