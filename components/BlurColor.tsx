export const BlurColor = () => {
  return (
    <div className="absolute -z-10 h-screen w-screen overflow-x-clip">
      <div className="absolute -z-10 -ml-40 -mt-40 hidden h-96 w-96 rounded-full bg-gradient-to-r from-sky-500 to-sky-200 opacity-40 blur-3xl lg:block"></div>
      <div className="absolute bottom-0 right-0 -z-10 -mr-40 hidden h-96 w-96 rounded-full bg-gradient-to-br from-violet-500 to-violet-200 opacity-25 blur-3xl lg:block"></div>
    </div>
  );
};
