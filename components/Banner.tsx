import Image from "next/image"
import { Mouse, Github } from "lucide-react"

const Banner = () => {
  return (
    <div className="relative overflow-hidden lg:h-screen lg:flex lg:flex-col lg:justify-between">
      {/* TODO: move blur color to parent component */}
      <div className="hidden lg:block h-96 w-96 bg-gradient-to-r from-sky-500 to-sky-200 absolute rounded-full blur-3xl opacity-40 -ml-40 -mt-40 -z-10"></div>
      <div className="hidden lg:block h-96 w-96 bg-gradient-to-br from-violet-500 to-violet-200 absolute rounded-full blur-3xl opacity-25 -mr-40 right-0 bottom-0 -z-10"></div>
      <div className="w-full p-6 lg:pt-12 lg:flex lg:justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/gh-link.svg"
            alt="GH Link Icon"
            width={256}
            height={256}
            className="h-6 w-6"
          />
          <p className="text-black text-base font-semibold tracking-widest">
            GH Link
          </p>
        </div>
        <a
          href="https://github.com/davidho0403/gh-link"
          className="hidden lg:block p-4 rounded-full hover:bg-slate-50 duration-500"
        >
          <Github className="h-6 w-6" />
        </a>
      </div>
      <div>
        <div className="w-full mt-20 lg:mt-0 flex flex-col items-center px-10">
          <h1 className="text-4xl lg:text-5xl font-bold lg:font-black text-center leading-normal lg:leading-normal text-black">
            Config With <br /> Only a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-blue-600">
              JSON
            </span>{" "}
            File
          </h1>
          <h2 className="text-center text-slate-500 mt-6 lg:mt-12 px-10 text-xs lg:text-sm leading-normal">
            GH Link is a Link in Bio website that can be configured with only a
            JSON file.
          </h2>
        </div>
        <div className="w-full flex justify-center mt-20 lg:mt-16">
          <button className="bg-black rounded-xl text-white px-3 py-2 lg:px-4 lg:py-3 tracking-wider text-sm">
            Create now
          </button>
        </div>
      </div>
      <div className="hidden w-full lg:flex justify-center mt-0 pb-12 animate-scrollDown">
        <Mouse className="text-slate-500" />
      </div>
    </div>
  )
}

export default Banner
