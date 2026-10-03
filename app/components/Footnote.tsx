import React, { type ReactNode } from "react";

const Footnote = ({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) => {
  return (
    <div className="tooltip">
      <sup className="ml-0.5">[1]</sup>
      <span className="tooltiptext">{children}</span>
    </div>
  );
};

export default Footnote;
