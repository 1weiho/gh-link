import { Mouse } from "lucide-react";
import Nav from "../Nav";

const Banner = () => {
  return (
    <div className="relative overflow-hidden lg:flex lg:h-screen lg:flex-col lg:justify-between">
      <Nav />
      <div>
        <div className="mt-20 flex w-full flex-col items-center px-10 lg:mt-0">
          <h1 className="text-center text-4xl font-bold leading-normal text-black lg:text-5xl lg:font-black lg:leading-normal">
            Config With <br /> Only a{" "}
            <span className="bg-gradient-to-br from-sky-300 to-blue-600 bg-clip-text text-transparent">
              JSON
            </span>{" "}
            File
          </h1>
          <h2 className="mt-6 px-10 text-center text-xs leading-normal text-slate-500 lg:mt-12 lg:text-sm">
            GH Link is a Link in Bio website that can be configured with only a
            JSON file.
          </h2>
        </div>
        <div className="mt-20 flex w-full justify-center lg:mt-16">
          <button className="rounded-xl bg-black px-3 py-2 text-sm tracking-wider text-white lg:px-4 lg:py-3">
            Create now
          </button>
        </div>
      </div>
      <div className="mt-0 hidden w-full animate-scrollDown justify-center pb-12 lg:flex">
        <Mouse className="text-slate-500" />
      </div>
    </div>
  );
};

export default Banner;
