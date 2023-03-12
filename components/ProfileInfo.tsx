import Image from "next/image"

const ProfileInfo = (Props: { avatar_url: string; login: string; name: string }) => {
  return (
    <div className="my-12 flex flex-col items-center">
      <Image src={Props.avatar_url} alt="Avatar" width={256} height={256} className="h-48 w-48 rounded-full" />
      <p className="text-2xl font-bold tracking-wider text-slate-900">{Props.login}</p>
      <p className="text-sm font-light tracking-wider text-slate-600">{Props.name}</p>
    </div>
  )
}

export default ProfileInfo
