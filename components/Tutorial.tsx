import { FileJson } from "lucide-react"
import LinkCard from "@/components/LinkCard"

const Tutorial = () => {
  return (
    <>
      <div className="w-full flex mt-20 px-8 flex-col">
        <h3 className="font-bold text-2xl tracking-wider">How to use</h3>
        <p className="text-slate-500 text-xs leading-normal mt-4">
          Add a{" "}
          <span className="text-rose-500 bg-slate-100 rounded-sm px-1 mx-1 py-0.5 border border-slate-200">
            gh-config.json
          </span>{" "}
          file to your special {"repository's"} root (the repo with your
          username).
        </p>
        <a href="" className="text-slate-300 text-xs underline mt-2">
          See the example
        </a>
        <div>
          <div className="flex text-slate-500 text-xs mt-6 items-center space-x-1">
            <FileJson className="h-4 w-4" />
            <p>gh-config.json</p>
          </div>
          <div className="mt-2">
            {/* TODO: syntax highlighting */}
            <p className="text-slate-500 text-xs bg-slate-100 rounded-sm p-3 border border-slate-200">{`
      {
        "links": [
          {
            "title": "Your Title",
            "description": "Your Description",
            "url": "Your url",
            "icon": "Your icon url" //optional
          },
          ...
        ]
      }`}</p>
          </div>
        </div>
        <p className="text-slate-500 text-xs leading-normal my-8">
          {`In this JSON configuration, each link button is wrapped into an object in the links array, allowing you to add
    as many as you like. The icon option is optional; if you don't need to customize the icon, you can delete the
    icon option and the icon will default to the "🔗" icon. The diagram below corresponds to the above
    configuration.`}
        </p>
        <LinkCard
          title="Your Title"
          description="Your Description"
          url=""
          icon=""
        />
        <p className="text-slate-500 text-xs leading-normal my-8">
          After setting up the configuration file, you can check your personal
          link-in-bio website by going to <br />
          <a href="" className="text-blue-600 underline">
            gh-link.vercel.app/YOUR-GITHUB-USERNAME
          </a>
        </p>
      </div>
    </>
  )
}

export default Tutorial
