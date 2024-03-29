"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { Toaster, toast } from "sonner";

const Code = (Props: { code: string }) => {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
    toast.success("Successfully copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <Toaster position="top-center" className="lg:hidden" />
      <Toaster position="bottom-right" className="hidden lg:block" />
      <div className="relative">
        <CopyToClipboard text={Props.code} onCopy={handleCopy}>
          <button
            className="absolute right-4 top-4 rounded-lg bg-white p-2 text-slate-500 duration-100 hover:bg-slate-50"
            disabled={copied}
          >
            {copied ? (
              <Check className="h-4 w-4 animate-clipboard text-green-600" />
            ) : (
              <Clipboard className="h-4 w-4" />
            )}
          </button>
        </CopyToClipboard>
        <SyntaxHighlighter
          language="json"
          style={docco}
          wrapLines={true}
          showLineNumbers={true}
          lineNumberStyle={{ color: "#A0AEC0" }}
          className="rounded-md border border-slate-200 font-mono text-xs leading-5 tracking-wider"
          customStyle={{
            padding: "1rem 2rem 1rem 2rem",
            backgroundColor: "#F6F6F6",
          }}
        >
          {Props.code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Code;
