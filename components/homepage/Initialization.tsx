import Title from "./Title";
import Paragraph from "./Paragraph";

const Initialization = () => {
  return (
    <>
      <div className="mt-16 mb-14 flex w-full flex-col space-y-6 px-8 lg:space-y-8 lg:px-24">
        <Title>Initialization tool</Title>
        <Paragraph>
          We also provide an initialization tool to help you quickly create the
          config file.
        </Paragraph>
        <div>
          <label className="mt-2 text-xs text-slate-400">
            Enter your GitHub user name:
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              className="w-full rounded-md border-2 border-slate-200"
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
