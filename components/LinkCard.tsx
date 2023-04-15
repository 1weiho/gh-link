import Image from "next/image";
import { FastAverageColor } from "fast-average-color";
import { Link } from "lucide-react";

const LinkCard = (Props: {
  title: string;
  description: string;
  url: string;
  icon: string;
}) => {
  // TODO: add icon domain color background
  const fac = new FastAverageColor();

  return (
    <a
      href={Props.url}
      className="px-6 py-4 rounded-3xl border-[0.08rem] border-slate-300 shadow shadow-slate-100 flex w-full items-center space-x-4"
    >
      {Props.icon ? (
        <Image
          src={Props.icon}
          width={256}
          height={256}
          alt="website icon"
          className="h-8 w-8"
        />
      ) : (
        <Link className="h-8 w-8 p-1" />
      )}

      <div className="flex flex-col">
        <h1 className="text-slate-800 text-lg">{Props.title}</h1>
        <p className="text-slate-600 text-sm">{Props.description}</p>
      </div>
    </a>
  );
};

export default LinkCard;
