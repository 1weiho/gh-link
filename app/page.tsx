import Image from "next/image"
import { FileJson } from "lucide-react"
import LinkCard from "@/components/LinkCard"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div className="w-screen flex flex-col">
      <div className="w-full p-6">
        <div className="flex items-center space-x-2">
          <Image src="/gh-link.svg" alt="GH Link Icon" width={256} height={256} className="h-6 w-6" />
          <p className="text-black text-base font-semibold tracking-widest">GH Link</p>
        </div>
      </div>
      <div className="w-full mt-20 flex flex-col items-center px-10">
        <h1 className="text-4xl font-bold text-center leading-normal text-black">
          Config With <br /> Only a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-blue-600">JSON</span> File
        </h1>
        <h2 className="text-center text-slate-500 mt-6 px-10 text-xs leading-normal">
          GH Link is a Link in Bio website that can be configured with only a JSON file.
        </h2>
      </div>
      <div className="w-full flex justify-center mt-20">
        <button className="bg-black rounded-xl text-white px-3 py-2 tracking-wider text-sm">Create now</button>
      </div>
      <div className="w-full flex mt-20 px-8 flex-col">
        <h3 className="font-bold text-2xl tracking-wider">How to use</h3>
        <p className="text-slate-500 text-xs leading-normal mt-4">
          Add a{" "}
          <span className="text-rose-500 bg-slate-100 rounded-sm px-1 mx-1 py-0.5 border border-slate-200">
            gh-config.json
          </span>{" "}
          file to your special {"repository's"} root (the repo with your username).
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
        <LinkCard title="Your Title" description="Your Description" url="" icon="" />
        <p className="text-slate-500 text-xs leading-normal my-8">
          After setting up the configuration file, you can check your personal link-in-bio website by going to <br />
          <a href="" className="text-blue-600 underline">
            gh-link.vercel.app/YOUR-GITHUB-USERNAME
          </a>
        </p>
      </div>
      <div className="w-full flex mt-8 px-8 flex-col mb-14">
        <h3 className="font-bold text-2xl tracking-wider">Initialization tool</h3>
        <p className="text-slate-500 text-xs leading-normal mt-4">
          We also provide an initialization tool to help you quickly create the config file.
        </p>
        <div className="mt-4">
          <label className="text-slate-300 text-xs mt-2">Enter your GitHub user name:</label>
          <div className="flex space-x-4">
            <input type="text" className="bg-slate-100 rounded-sm border border-slate-200 w-full" />
            <button className="bg-black rounded-xl text-white px-3 py-2 tracking-wider text-sm">Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
