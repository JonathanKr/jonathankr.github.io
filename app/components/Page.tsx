import React from "react";

import Navigation from "./Navigation";

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="prose prose-neutral max-w-none font-serif [&_h1]:my-2 [&_h1]:text-left [&_h1]:font-sans [&_h2]:my-2 [&_h2]:text-left [&_h2]:font-sans [&_h3]:my-2 [&_h3]:text-left [&_h3]:font-sans">
      <Navigation />
      {children}
    </div>
  );
};

export default Page;
