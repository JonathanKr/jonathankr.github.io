import Page from "~/components/Page";
import imageIndex from "~/images/index.json";

const Photography = () => {
  const images = imageIndex.images;

  return (
    <Page>
      <h1>Photography</h1>
      Nothing you see here is AI-generated.
      {images.map((e) => (
        <img key={e.path} src={e.path} alt={e.title} className="mt-3" />
      ))}
    </Page>
  );
};

export default Photography;
