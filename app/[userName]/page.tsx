import LinkCard from "@/components/LinkCard"
import ProfileInfo from "@/components/ProfileInfo"
import CountBox from "@/components/CountBox"
import { Base64 } from "js-base64"

const getGhUser = async (userName: string) => {
  const res = await fetch(`https://api.github.com/users/${userName}`, { cache: "no-store" })

  if (!res.ok) {
    return null
  }

  const resJson: any = res.json()
  if (resJson.message === "Not Found") {
    return null
  }

  return resJson
}

const getGhLinkConfig = async (userName: string) => {
  const res = await fetch(`https://api.github.com/repos/${userName}/${userName}/contents/gh-link.json`, {
    cache: "no-store",
  })

  if (!res.ok) {
    return null
  }
  const resJson: any = res.json()
  if (resJson.message === "Not Found") {
    return null
  }

  return resJson
}

const UserPage = async ({ params }: { params: { userName: string } }) => {
  const userData = getGhUser(params.userName)
  const ghLinkConfigData = getGhLinkConfig(params.userName)

  const [user, ghLinkConfig] = await Promise.all([userData, ghLinkConfigData])

  const ghLinkConfigJson = ghLinkConfig ? JSON.parse(Base64.decode(ghLinkConfig.content)) : null

  return (
    <div className="w-screen h-screen px-14 flex flex-col items-center bg-stone-50">
      <div className="w-full md:w-2/3 xl:w-1/2">
        {user ? (
          <>
            <div className="mt-20 mb-8">
              <ProfileInfo avatar_url={user.avatar_url} login={user.login} name={user.name} />
            </div>
            <div className="w-full flex justify-between mb-12">
              <CountBox count={user.following} type="Following" href={user.following_url} />
              <CountBox count={user.followers} type="Follower" href={user.followers_url} />
              <CountBox count={user.public_repos} type="Repo" href={user.repos_url} />
            </div>
          </>
        ) : (
          <p>User not found.</p>
        )}

        {ghLinkConfigJson ? (
          <div className="space-y-8 w-full">
            {ghLinkConfigJson.links.map((data: any, index: number) => (
              <LinkCard key={index} title={data.title} description={data.description} url={data.url} />
            ))}
          </div>
        ) : (
          <p>Config file not found.</p>
        )}
      </div>
    </div>
  )
}

export default UserPage
