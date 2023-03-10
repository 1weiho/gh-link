import Image from "next/image"

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

  return (
    <>
      <h1 className="text-xl font-bold">gh user data:</h1>
      {userData ? (
        <>
          <Image src={userData["avatar_url"]} alt="Avatar" width={64} height={64} />
          <p>{userData["login"]}</p>
          <p>{userData["name"]}</p>
        </>
      ) : (
        <p>User not found.</p>
      )}
      <h1 className="text-xl font-bold">gh link config file:</h1>
      {ghLinkConfig ? <p>{Buffer.from(ghLinkConfig.content, "base64").toString()}</p> : <p>Config file not found.</p>}
    </>
  )
}

export default UserPage
