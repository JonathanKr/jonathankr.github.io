import { CheckCheck, ChevronDown, ChevronRight } from "lucide-react";
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
  const localStorageId = id + "is-open";
  const [isOpen, setOpen] = React.useState(
    JSON.parse(localStorage.getItem(localStorageId) || "true")
  );

  return (
    <div>
      <h2
        id={id}
        onClick={() => {
          const openState = !isOpen;
          localStorage.setItem(localStorageId, JSON.stringify(openState));
          setOpen(openState);
        }}
        className="flex cursor-pointer items-center active:bg-black/5"
      >
        {isOpen ? (
          <ChevronDown className="mt-1 mr-2" />
        ) : (
          <ChevronRight className="mt-1 mr-2" />
        )}
        {heading}
      </h2>
      <hr className="mb-0" />
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default PageSection;
