import { FileJson } from "lucide-react";
import LinkCard from "@/components/LinkCard";

const Tutorial = () => {
  return (
    <>
      <div className="mt-20 flex w-full flex-col px-8">
        <h3 className="text-2xl font-bold tracking-wider">How to use</h3>
        <p className="mt-4 text-xs leading-normal text-slate-500">
          Add a{" "}
          <span className="mx-1 rounded-sm border border-slate-200 bg-slate-100 px-1 py-0.5 text-rose-500">
            gh-config.json
          </span>{" "}
          file to your special {"repository's"} root (the repo with your
          username).
        </p>
        <a href="" className="mt-2 text-xs text-slate-300 underline">
          See the example
        </a>
        <div>
          <div className="mt-6 flex items-center space-x-1 text-xs text-slate-500">
            <FileJson className="h-4 w-4" />
            <p>gh-config.json</p>
          </div>
          <div className="mt-2">
            {/* TODO: syntax highlighting */}
            <p className="rounded-sm border border-slate-200 bg-slate-100 p-3 text-xs text-slate-500">{`
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
        <p className="my-8 text-xs leading-normal text-slate-500">
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
        <p className="my-8 text-xs leading-normal text-slate-500">
          After setting up the configuration file, you can check your personal
          link-in-bio website by going to <br />
          <a href="" className="text-blue-600 underline">
            gh-link.vercel.app/YOUR-GITHUB-USERNAME
          </a>
        </p>
      </div>
    </>
  );
};

export default Tutorial;
