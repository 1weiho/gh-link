import LinkCard from "@/components/LinkCard"
import ProfileInfo from "@/components/ProfileInfo"
import CountBox from "@/components/CountBox"
import { Base64 } from "js-base64"
import { Octokit } from "octokit"

const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN })

const getGhUser = async (userName: string) => {
  const res = await octokit.request("GET /users/{username}", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
    username: userName,
  })

  if (!res) {
    return null
  }

  return res
}

const getGhLinkConfig = async (userName: string) => {
  const res = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner: userName,
    repo: userName,
    path: "gh-link.json",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })

  if (!res) {
    return null
  }

  return res
}

const UserPage = async ({ params }: { params: { userName: string } }) => {
  const userData = getGhUser(params.userName)
  const ghLinkConfigData = getGhLinkConfig(params.userName)

  const [user, ghLinkConfig] = await Promise.all([userData, ghLinkConfigData])

  const ghLinkConfigJson = ghLinkConfig ? JSON.parse(Base64.decode(ghLinkConfig.data.content)) : null

  return (
    <div className="w-screen h-screen px-8 md:px-14 flex flex-col items-center bg-stone-50">
      <div className="w-full md:w-2/3 xl:w-1/2">
        {user ? (
          <>
            <div className="mt-20 mb-8">
              <ProfileInfo avatar_url={user.data.avatar_url} login={user.data.login} name={user.data.name} />
            </div>
            <div className="w-full flex justify-between mb-12">
              <CountBox
                count={user.data.following}
                type="Following"
                href={`https://github.com/${user.data.login}?tab=following`}
              />
              <CountBox
                count={user.data.followers}
                type="Follower"
                href={`https://github.com/${user.data.login}?tab=followers`}
              />
              <CountBox
                count={user.data.public_repos}
                type="Repo"
                href={`https://github.com/${user.data.login}?tab=repositories`}
              />
            </div>
          </>
        ) : (
          <p>User not found.</p>
        )}

        {ghLinkConfigJson ? (
          <div className="space-y-6 w-full">
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
