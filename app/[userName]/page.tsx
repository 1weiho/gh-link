import LinkCard from "@/components/LinkCard";
import ProfileInfo from "@/components/ProfileInfo";
import CountBox from "@/components/CountBox";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import CountBoxGroup from "@/components/CountBoxGroup";

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
      <div className="hidden lg:block h-96 w-96 bg-gradient-to-r from-sky-500 to-sky-200 absolute rounded-full blur-3xl opacity-40 -ml-40 -mt-40 -z-10"></div>
      <div className="w-screen min-h-screen lg:h-screen pb-20 px-8 md:px-14 flex flex-col items-center">
        <div className="hidden lg:block w-full min-h-20">
          <Nav />
        </div>
        <div className="w-full lg:flex lg:justify-between lg:px-20 lg:space-x-12 lg:max-h-full">
          {user ? (
            <div>
              <div className="mt-20 mb-8">
                <ProfileInfo
                  avatar_url={user.avatar_url}
                  login={user.login}
                  name={user.name}
                />
              </div>
              <div className="w-full flex mb-12">
                <CountBoxGroup user={user} />
              </div>
            </div>
          ) : (
            <p>User not found.</p>
          )}
          {ghLinkConfigJson ? (
            <div className="space-y-6 w-full lg:w-2/3 lg:max-h-full lg:overflow-y-scroll lg:pb-20 lg:scrollbar-hide">
              <h1 className="hidden lg:block text-3xl font-semibold leading-normal text-black tracking-wider">
                Links
              </h1>
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
