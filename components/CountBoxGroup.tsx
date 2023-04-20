import CountBox from "./CountBox";

const CountBoxGroup = (Props: {user: any}) => {
  return (
    <div className="w-full flex justify-between items-center lg:rounded-xl lg:overflow-hidden lg:bg-stone-50">
      <CountBox
        count={Props.user.following}
        type="Following"
        href={`https://github.com/${Props.user.login}?tab=following`}
      />
      <span className="bg-slate-200 w-[.1rem] h-1/3 hidden lg:block"></span>
      <CountBox
        count={Props.user.followers}
        type="Follower"
        href={`https://github.com/${Props.user.login}?tab=followers`}
      />
      <span className="bg-slate-200 w-[.1rem] h-1/3 hidden lg:block"></span>
      <CountBox
        count={Props.user.public_repos}
        type="Repo"
        href={`https://github.com/${Props.user.login}?tab=repositories`}
      />
    </div>
  );
};

export default CountBoxGroup;
