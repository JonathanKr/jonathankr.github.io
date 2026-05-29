import { Link } from "react-router";

import Page from "~/components/Page";
import imageIndex from "~/images/index.json";

const Photography = () => {
  const images = imageIndex.images;

  return (
    <Page>
      <h1>Photography</h1>
      <div
        style={{
          columns: "2 300px",
          columnGap: "12px",
          marginTop: "1em",
        }}
      >
        {images.map((e) => (
          <Link
            to={e.path}
            key={e.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              src={e.path}
              alt={e.title}
              className="mt-0 mb-3"
            />
          </Link>
        ))}
      </div>
      <div className="my-5 w-full text-center">
        This gallery features no AI-generated content.
      </div>
    </Page>
  );
};

export default Photography;
