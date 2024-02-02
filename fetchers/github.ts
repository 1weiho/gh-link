export const getGhUser = async (userName: string) => {
  const res = await fetch(`https://api.github.com/users/${userName}`, {
    headers: { Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null;
  }

  const resJson: any = await res.json();

  if (resJson.message === "Not Found") {
    return null;
  }

  return resJson;
};

export const getGhLinkConfig = async (userName: string) => {
  const res = await fetch(
    `https://api.github.com/repos/${userName}/${userName}/contents/gh-link.json`,
    {
      headers: { Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return null;
  }
  const resJson: any = await res.json();

  if (resJson.message === "Not Found") {
    return null;
  }

  const content = resJson.content;
  const decodedContent = Buffer.from(content, "base64").toString("utf-8");
  return JSON.parse(decodedContent);
};
