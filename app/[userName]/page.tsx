import LinkCard from "@/components/LinkCard"
import ProfileInfo from "@/components/ProfileInfo"
import { Base64 } from "js-base64"

const getGhUserData = async (userName: string) => {
  const res = await fetch(`https://api.github.com/users/${userName}`)
  let resJson = await res.json()

  if (!res.ok || resJson.message === "Not Found") {
    return null
  }

  return resJson
}

const getGhLinkConfig = async (userName: string) => {
  const res = await fetch(`https://api.github.com/repos/${userName}/${userName}/contents/gh-link.json`)
  let resJson = await res.json()

  if (!res.ok || resJson.message === "Not Found") {
    return null
  }

  return resJson
}

const UserPage = async ({ params }: { params: { userName: string } }) => {
  const userData = await getGhUserData(params.userName)
  const ghLinkConfig = await getGhLinkConfig(params.userName)
  let ghLinkConfigJson = null
  if (ghLinkConfig) {
    let ghLinkConfigContent = Base64.decode(ghLinkConfig.content)
    ghLinkConfigJson = JSON.parse(ghLinkConfigContent)
  }

  return (
    <div className="w-screen flex flex-col items-center">
      <div>
        {userData ? (
          <ProfileInfo avatar_url={userData.avatar_url} login={userData.login} name={userData.name} />
        ) : (
          <p>User not found.</p>
        )}
      </div>
      {ghLinkConfig ? (
        <div className="space-y-5">
          {ghLinkConfigJson.links.map((data: any, index: number) => (
            <LinkCard key={index} title={data.title} description={data.description} url={data.url} />
          ))}
        </div>
      ) : (
        <p>Config file not found.</p>
      )}
    </div>
  )
}

export default UserPage
