import Title from "./Title";
import Paragraph from "./Paragraph";

const Initialization = () => {
  return (
    <>
      <div className="mb-14 mt-16 flex w-full flex-col space-y-6 px-8 lg:space-y-8 lg:px-24">
        <Title>Initialization tool</Title>
        <Paragraph>
          We also provide an initialization tool to help you quickly create the
          config file.
        </Paragraph>
        <div>
          <h4 className="mb-2 mt-2 text-xs text-slate-400 lg:text-sm">
            Enter your GitHub user name:
          </h4>
          <div className="flex space-x-4 lg:h-12">
            <input
              type="text"
              className="w-full rounded-md border-2 border-slate-200 ps-4 outline-none"
            />
            <button className="rounded-xl bg-black px-3 py-2 text-sm tracking-wider text-white lg:px-5 lg:text-base lg:tracking-widest">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Initialization;
