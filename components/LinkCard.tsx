import Image from "next/image"

const LinkCard = (Props: { title: string; description: string; url: string }) => {
  return (
    <a href={Props.url} className="px-5 py-3 rounded-lg shadow-md flex flex-col">
      <h1 className="text-sky-600 font-semibold text-xl">{Props.title}</h1>
      <p>{Props.description}</p>
    </a>
  )
}

export default LinkCard
