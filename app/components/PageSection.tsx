import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const PageSection = ({
  children,
  heading,
  id,
  defaultOpen = true,
}: {
  children: React.ReactNode;
  heading: string;
  id: string;
  defaultOpen?: boolean;
}) => {
  const localStorageId = id + "is-open";
  const [isOpen, setOpen] = useState(() => {
    let localStorageContent: string | null = "";
    try {
      localStorageContent = localStorage.getItem(localStorageId);
    } catch (error) {
      console.log(error);
    }
    switch (localStorageContent) {
      case "true":
        return true;
      case "false":
        return false;
      default:
        return defaultOpen;
    }
  });

  return (
    <div>
      <h2
        id={id}
        onClick={() => {
          const openState = !isOpen;
          localStorage.setItem(localStorageId, JSON.stringify(openState));
          setOpen(openState);
        }}
        className="flex cursor-pointer items-center font-semibold active:bg-black/5"
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
