const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <p className="text-xs leading-normal text-slate-500 lg:text-base">
        {children}
      </p>
    </>
  );
};

export default Paragraph;
