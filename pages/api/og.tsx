import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const og = (request: NextRequest) => {
  const { searchParams } = request.nextUrl;

  const username = searchParams.get("username");
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          color: "white",
          backgroundImage: `url("https://gh-link.vercel.app/og-background.png")`,
          backgroundSize: "100% 100%",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://gh-link.vercel.app/gh-link.svg"
            width={32}
            height={32}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            GH Link
          </span>
        </div>
        <img
          src={`https://github.com/${username}.png`}
          width={200}
          height={200}
          style={{
            borderRadius: "100%",
          }}
        />
        <p
          style={{
            fontSize: 26,
            letterSpacing: "0.15em",
          }}
        >
          @{username}
        </p>
      </div>
    )
  );
};

export default og;
