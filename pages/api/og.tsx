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
            left: 80,
            top: 80,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://gh-link.vercel.app/gh-link.svg"
            width={60}
            height={60}
          />
          <span
            style={{
              marginLeft: 8,
              letterSpacing: "0.1em",
              fontSize: 30,
            }}
          >
            GH Link
          </span>
        </div>
        <img
          src={`https://github.com/${username}.png`}
          width={240}
          height={240}
          style={{
            borderRadius: "100%",
            marginBottom: 4,
          }}
        />
        <p
          style={{
            fontSize: 40,
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
