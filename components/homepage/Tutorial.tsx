import { FileJson } from "lucide-react";
import LinkCard from "@/components/LinkCard";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Code from "./Code";

const Tutorial = () => {
  const configJsonCode: string = `
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
}
  `;

  return (
    <>
      <div className="mt-20 flex w-full flex-col space-y-6 px-8 lg:space-y-8 lg:px-24">
        <Title>What is GH Link</Title>
        <Paragraph>
          GH Link is a Link in Bio website that can be configured with only a
          JSON file.This makes it incredibly easy to set up and customize your
          Link in Bio page without having to create an account on a platform.
          Simply create a JSON file with your desired configuration and upload
          it to your personal GitHub repository. Your Link in Bio page will then
          be ready to go.
        </Paragraph>
        <Title>How to use</Title>
        <Paragraph>
          Add a{" "}
          <span className="mx-1 rounded-sm border border-slate-200 bg-slate-100 px-1 py-0.5 text-rose-500">
            gh-config.json
          </span>{" "}
          file to your special {"repository's"} root (the repo with your
          username).
        </Paragraph>
        <a
          href="https://github.com/davidho0403/davidho0403/blob/main/gh-link.json"
          className="text-xs text-slate-400 underline"
        >
          See the example
        </a>
        <div className="space-y-2">
          <div className="flex items-center space-x-1 text-xs text-slate-500">
            <FileJson className="h-4 w-4" />
            <p>gh-config.json</p>
          </div>
          <div>
            {/* TODO: syntax highlighting */}
            <Code code={configJsonCode} />
          </div>
        </div>
        <Paragraph>
          {`In this JSON configuration, each link button is wrapped into an object in the links array, allowing you to add
            as many as you like. The icon option is optional; if you don't need to customize the icon, you can delete the
            icon option and the icon will default to the "🔗" icon. The diagram below corresponds to the above
            configuration.`}
        </Paragraph>
        <LinkCard
          title="Your Title"
          description="Your Description"
          url=""
          icon=""
        />
        <Paragraph>
          After setting up the configuration file, you can check your personal
          link-in-bio website by going to <br />
          <a href="" className="text-blue-600 underline">
            gh-link.vercel.app/YOUR-GITHUB-USERNAME
          </a>
        </Paragraph>
      </div>
    </>
  );
};

export default Tutorial;
