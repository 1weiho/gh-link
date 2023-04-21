"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

const Code = (Props: { code: string }) => {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative">
      <CopyToClipboard text={Props.code} onCopy={handleCopy}>
        <button className="absolute top-4 right-4 rounded-lg bg-white p-2 text-slate-500 duration-100 hover:bg-slate-100">
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Clipboard className="h-4 w-4" />
          )}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language="json"
        style={docco}
        wrapLines={true}
        className="rounded-sm border border-slate-200 font-mono text-xs"
        customStyle={{ padding: "0 2rem 0 2rem" }}
      >
        {Props.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
