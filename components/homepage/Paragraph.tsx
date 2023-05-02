const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <p className="text-xs font-light leading-normal text-gray-600 lg:text-lg lg:leading-9 lg:tracking-wide">
        {children}
      </p>
    </>
  );
};

export default Paragraph;
