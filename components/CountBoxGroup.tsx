import CountBox from "./CountBox";

const CountBoxGroup = (Props: { user: any }) => {
  return (
    <div className="flex w-full items-center justify-between lg:overflow-hidden lg:rounded-xl lg:bg-stone-50">
      <CountBox
        count={Props.user.following}
        type="Following"
        href={`https://github.com/${Props.user.login}?tab=following`}
      />
      <span className="hidden h-1/3 w-[.1rem] bg-slate-200 lg:block"></span>
      <CountBox
        count={Props.user.followers}
        type="Follower"
        href={`https://github.com/${Props.user.login}?tab=followers`}
      />
      <span className="hidden h-1/3 w-[.1rem] bg-slate-200 lg:block"></span>
      <CountBox
        count={Props.user.public_repos}
        type="Repo"
        href={`https://github.com/${Props.user.login}?tab=repositories`}
      />
    </div>
  );
};

export default CountBoxGroup;
