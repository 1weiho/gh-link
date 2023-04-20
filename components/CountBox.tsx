const CountBox = (Props: { count: number; type: string; href: string }) => {
  return (
    <a
      className="flex w-24 flex-col items-center rounded-3xl bg-stone-50 p-3 md:w-32 lg:w-28 lg:rounded-none lg:duration-150 lg:hover:bg-stone-100"
      href={Props.href}
    >
      <p className="text-xl text-slate-800">{Props.count.toLocaleString()}</p>
      <p className="text-xs font-light text-slate-500">{Props.type}</p>
    </a>
  );
};

export default CountBox;
