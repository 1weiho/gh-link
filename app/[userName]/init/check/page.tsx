import BackgroundGrid from "@/components/background-grid";
import GithubCard from "@/components/github-card";
import InitGhLinkProgress from "@/components/init-gh-link-progress";
import { Button } from "@/components/ui/button";
import { getGhUser } from "@/fetchers/github";
import Link from "next/link";

const CheckPage = async ({ params }: { params: { userName: string } }) => {
  const user = await getGhUser(params.userName);

  return (
    <div className="h-screen">
      <div className=" z-10 relative flex flex-col items-center">
        <InitGhLinkProgress className="mt-20" stepNumber={1} />
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
        <Button className="mt-20 h-10 w-20" asChild>
          <Link href="add-link">Next</Link>
        </Button>
      </div>
      <div className="md:block hidden fixed inset-0 pointer-events-none">
        <BackgroundGrid className="absolute inset-0 opacity-50" />
      </div>
    </div>
  );
};

export default CheckPage;
