const CountBox = (Props: { count: number; type: string; href: string }) => {
  return (
    <a
      className="flex flex-col items-center bg-stone-50 p-3 rounded-3xl lg:rounded-none w-24 md:w-32 lg:w-28 lg:hover:bg-stone-100 lg:duration-150"
      href={Props.href}
    >
      <p className="text-xl text-slate-800">{Props.count.toLocaleString()}</p>
      <p className="text-slate-500 text-xs font-light">{Props.type}</p>
    </a>
  );
};

export default CountBox;
