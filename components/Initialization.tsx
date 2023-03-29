const Initialization = () => {
  return (
    <>
      <div className="w-full flex mt-8 px-8 flex-col mb-14">
        <h3 className="font-bold text-2xl tracking-wider">
          Initialization tool
        </h3>
        <p className="text-slate-500 text-xs leading-normal mt-4">
          We also provide an initialization tool to help you quickly create the
          config file.
        </p>
        <div className="mt-4">
          <label className="text-slate-300 text-xs mt-2">
            Enter your GitHub user name:
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              className="bg-slate-100 rounded-sm border border-slate-200 w-full"
            />
            <button className="bg-black rounded-xl text-white px-3 py-2 tracking-wider text-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Initialization
