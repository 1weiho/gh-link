import { Github } from "lucide-react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="w-full p-6 lg:flex lg:justify-between lg:pt-12">
      <div className="flex items-center space-x-2">
        <Image
          src="/gh-link.svg"
          alt="GH Link Icon"
          width={256}
          height={256}
          className="h-6 w-6"
        />
        <p className="text-base font-semibold tracking-widest text-black">
          GH Link
        </p>
      </div>
      <a
        href="https://github.com/davidho0403/gh-link"
        className="hidden rounded-full p-4 duration-500 hover:bg-slate-50 lg:block"
      >
        <Github className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Nav;
