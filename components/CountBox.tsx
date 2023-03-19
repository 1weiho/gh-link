const CountBox = (Props: { count: number; type: string; href: string }) => {
  return (
    <a className="flex flex-col items-center bg-white p-3 rounded-3xl w-24 md:w-32" href={Props.href}>
      <p className="text-xl text-slate-800">{Props.count}</p>
      <p className="text-slate-600">{Props.type}</p>
    </a>
  )
}

export default CountBox
