import { useState } from "react";

import Page from "~/components/Page";
import imageIndex from "~/images/index.json";

const Photography = () => {
  const images = imageIndex.images;

  const [loadedCount, setLoadedCount] = useState(1);

  const handleLoad = (index: number) => {
    if (index + 1 === loadedCount) {
      setLoadedCount((c) => c + 1);
    }
  };

  return (
    <Page>
      <h1>Photography</h1>
      Nothing you see here is AI-generated.
      {images.map((e, index) => (
        <img
          key={e.path}
          src={index < loadedCount ? e.path : undefined}
          alt={e.title}
          className="mt-2 mb-4"
          onLoad={() => handleLoad(index)}
        />
      ))}
    </Page>
  );
};

export default Photography;
