import { CheckCheck, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const PageSection = ({
  children,
  heading,
  id,
}: {
  children: React.ReactNode;
  heading: string;
  id: string;
}) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div>
      <h2
        id={id}
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center active:bg-black/5"
      >
        <ChevronDown className="mt-1 mr-2" />
        {heading}
      </h2>
      <hr className="mb-3" />
      {open && <div>{children}</div>}
    </div>
  );
};

export default PageSection;
