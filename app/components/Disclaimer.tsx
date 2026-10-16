type DisclaimerType = "error" | "ai" | "revision";

const Disclaimer = ({
  type,
  children,
}: {
  type: DisclaimerType;
  children: React.ReactNode;
}) => {
  switch (type) {
    case "error":
      return (
        <div className="rounded-md bg-rose-100 px-1 text-rose-700 [&_p]:m-0">
          {children}
        </div>
      );
    case "ai":
      return (
        <div className="border-l-3 px-4 pb-4">
          <h2 className="">Declaration of AI use</h2>
          {children}
        </div>
      );
    case "revision":
      return (
        <div className="text-black/50 [&_p]:m-0">
          Current revision from: {children}
        </div>
      );
  }
};

export default Disclaimer;
