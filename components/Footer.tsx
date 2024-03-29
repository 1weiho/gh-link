import Image from "next/image";
import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative flex h-60 w-screen flex-col items-center bg-black lg:h-80">
      <Image
        src="/gh-link.svg"
        alt="GH Link Icon"
        width={256}
        height={256}
        className="mt-12 h-14 w-14 lg:mt-20 lg:h-20 lg:w-20"
      />
      <p className="mb-1 font-mono text-xl tracking-widest text-white lg:text-2xl">
        GH Link
      </p>
      <a className="font-mono text-xs tracking-widest text-gray-500 lg:text-sm">
        Create your own link now
      </a>
      <div className="absolute bottom-5 flex w-full justify-between px-6">
        <Link
          className="flex space-x-2 lg:duration-300 lg:hover:ms-2"
          href="https://github.com/davidho0403/gh-link"
        >
          <Github className="h-4 w-4 text-white" />
          <p className="font-mono text-xs text-white lg:text-sm">
            Star Project
          </p>
        </Link>
        <Link
          className="flex items-center lg:duration-300 lg:hover:mr-2"
          href="https://vercel.com/"
        >
          <p className="font-mono text-xs text-white lg:text-sm">Powered By</p>
          <svg
            aria-label="Vercel logotype"
            height="14"
            role="img"
            viewBox="0 0 283 64"
            width="80"
          >
            <path
              d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
              fill="white"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
