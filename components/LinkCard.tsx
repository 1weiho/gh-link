import Image from "next/image"
import { FastAverageColor } from "fast-average-color"

const LinkCard = (Props: { title: string; description: string; url: string }) => {
  const url = new URL(Props.url)
  const domain = url.hostname

  // TODO: add icon domain color background
  const fac = new FastAverageColor()

  return (
    <a
      href={Props.url}
      className="px-6 py-6 rounded-3xl border-[0.1rem] border-slate-200 flex w-full items-center space-x-4"
    >
      <Image
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=256`}
        width={256}
        height={256}
        alt="website icon"
        className="h-8 w-8"
      />
      <div className="flex flex-col">
        <h1 className="text-slate-800 text-xl">{Props.title}</h1>
        <p className="text-slate-600">{Props.description}</p>
      </div>
    </a>
  )
}

export default LinkCard
