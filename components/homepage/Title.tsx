const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-wider lg:text-3xl">
        {children}
      </h3>
    </>
  );
};

export default Title;
