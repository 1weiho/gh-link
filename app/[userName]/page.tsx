import LinkCard from "@/components/LinkCard";
import ProfileInfo from "@/components/ProfileInfo";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import CountBoxGroup from "@/components/CountBoxGroup";
import { BlurColor } from "@/components/BlurColor";

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
    openGraph: {
      type: "website",
      url: "https://gh-link.vercel.app/" + params.userName,
      title: params.userName + " | GH Link",
      description: "See " + params.userName + "'s links on GH Link.",
      images: [
        {
          url: "https://gh-link.vercel.app/api/og?username=" + params.userName,
          width: 1200,
          height: 630,
          alt: params.userName + "'s GH Link",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: params.userName + " | GH Link",
      description: "See " + params.userName + "'s links on GH Link.",
      creator: "@1weiho",
      images: ["https://gh-link.vercel.app/api/og?username=" + params.userName],
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
      <BlurColor />
      <div className="flex min-h-screen w-screen flex-col items-center px-8 pb-20 md:px-14 lg:h-screen lg:px-0">
        <div className="min-h-20 hidden w-full lg:block">
          <Nav />
        </div>
        <div className="w-full lg:flex lg:max-h-full lg:justify-between lg:space-x-12 lg:px-20">
          {user ? (
            <div>
              <div className="mb-8 mt-20">
                <ProfileInfo
                  avatar_url={user.avatar_url}
                  login={user.login}
                  name={user.name}
                />
              </div>
              <div className="mb-12 flex w-full">
                <CountBoxGroup user={user} />
              </div>
            </div>
          ) : (
            <p>User not found.</p>
          )}
          {ghLinkConfigJson ? (
            <div className="w-full space-y-6 lg:max-h-full lg:w-2/3 lg:overflow-y-scroll lg:pb-20 lg:scrollbar-hide">
              <h1 className="hidden text-3xl font-semibold leading-normal tracking-wider text-black lg:block">
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
