import Image from "next/image"

const Banner = () => {
  return (
    <>
      <div className="w-full p-6">
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
      </div>
      <div className="w-full mt-20 flex flex-col items-center px-10">
        <h1 className="text-4xl font-bold text-center leading-normal text-black">
          Config With <br /> Only a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-blue-600">
            JSON
          </span>{" "}
          File
        </h1>
        <h2 className="text-center text-slate-500 mt-6 px-10 text-xs leading-normal">
          GH Link is a Link in Bio website that can be configured with only a
          JSON file.
        </h2>
      </div>
      <div className="w-full flex justify-center mt-20">
        <button className="bg-black rounded-xl text-white px-3 py-2 tracking-wider text-sm">
          Create now
        </button>
      </div>
    </>
  )
}

export default Banner
