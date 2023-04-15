import LinkCard from "@/components/LinkCard";
import ProfileInfo from "@/components/ProfileInfo";
import CountBox from "@/components/CountBox";
import Footer from "@/components/Footer";

// TODO: Type definition
type User = {};
type GhLinkConfig = {};

export async function generateMetadata({
  params,
}: {
  params: { userName: string };
}) {
  const user = await getGhUser(params.userName);
  return {
    title: params.userName + " | GH Link",
    icons: {
      icon: user.avatar_url,
    },
  };
}

const getGhUser = async (userName: string) => {
  const res = await fetch(`https://api.github.com/users/${userName}`, {
    headers: { Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null;
  }

  const resJson: any = await res.json();

  if (resJson.message === "Not Found") {
    return null;
  }

  return resJson;
};

const getGhLinkConfig = async (userName: string) => {
  const res = await fetch(
    `https://api.github.com/repos/${userName}/${userName}/contents/gh-link.json`,
    {
      headers: { Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return null;
  }
  const resJson: any = await res.json();

  if (resJson.message === "Not Found") {
    return null;
  }

  const content = resJson.content;
  const decodedContent = Buffer.from(content, "base64").toString("utf-8");
  return JSON.parse(decodedContent);
};

const UserPage = async ({ params }: { params: { userName: string } }) => {
  const user = await getGhUser(params.userName);
  const ghLinkConfigJson = await getGhLinkConfig(params.userName);

  return (
    <>
      <div className="w-screen min-h-screen pb-20 px-8 md:px-14 flex flex-col items-center">
        <div className="w-full md:w-2/3 xl:w-1/2">
          {user ? (
            <>
              <div className="mt-20 mb-8">
                <ProfileInfo
                  avatar_url={user.avatar_url}
                  login={user.login}
                  name={user.name}
                />
              </div>
              <div className="w-full flex justify-between mb-12">
                <CountBox
                  count={user.following}
                  type="Following"
                  href={`https://github.com/${user.login}?tab=following`}
                />
                <CountBox
                  count={user.followers}
                  type="Follower"
                  href={`https://github.com/${user.login}?tab=followers`}
                />
                <CountBox
                  count={user.public_repos}
                  type="Repo"
                  href={`https://github.com/${user.login}?tab=repositories`}
                />
              </div>
            </>
          ) : (
            <p>User not found.</p>
          )}

          {ghLinkConfigJson ? (
            <div className="space-y-6 w-full">
              {ghLinkConfigJson.links.map((data: any, index: number) => (
                <LinkCard
                  key={index}
                  title={data.title}
                  description={data.description}
                  url={data.url}
                  icon={data.icon}
                />
              ))}
            </div>
          ) : (
            <p>Config file not found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
