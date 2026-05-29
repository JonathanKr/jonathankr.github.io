const Disclaimer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-md bg-rose-100 px-1 text-rose-700 [&_p]:m-0">
      {children}
    </div>
  );
};

export default Disclaimer;
