const Initialization = () => {
  return (
    <>
      <div className="mt-8 mb-14 flex w-full flex-col px-8">
        <h3 className="text-2xl font-bold tracking-wider">
          Initialization tool
        </h3>
        <p className="mt-4 text-xs leading-normal text-slate-500">
          We also provide an initialization tool to help you quickly create the
          config file.
        </p>
        <div className="mt-4">
          <label className="mt-2 text-xs text-slate-300">
            Enter your GitHub user name:
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              className="w-full rounded-sm border border-slate-200 bg-slate-100"
            />
            <button className="rounded-xl bg-black px-3 py-2 text-sm tracking-wider text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Initialization;
