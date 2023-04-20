import { Github } from "lucide-react";
import Image from "next/image";

const Nav = () => {
  return (
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
  );
};

export default Nav;
