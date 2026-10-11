import { type ReactNode } from "react";

const Footnote = ({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) => {
  return (
    <span className="tooltip">
      <sup className="ml-0.5">[{index}]</sup>
      <span className="tooltiptext">{children}</span>
    </span>
  );
};

export default Footnote;
