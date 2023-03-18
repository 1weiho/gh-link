import Image from "next/image"

const ProfileInfo = (Props: { avatar_url: string; login: string; name: string }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={Props.avatar_url} alt="Avatar" width={256} height={256} className="h-36 w-36 rounded-full" />
      <p className="text-xl tracking-wider text-slate-800 mt-4">@{Props.login}</p>
    </div>
  )
}

export default ProfileInfo
