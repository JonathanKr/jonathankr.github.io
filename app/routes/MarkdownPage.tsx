import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Disclaimer from "~/components/Disclaimer";
import Page from "~/components/Page";
import PdfEmbed from "~/components/PdfEmbed";

const components = {
  PdfEmbed,
  Disclaimer,
};

const mdxFiles = import.meta.glob("../markdown/**/*.mdx");

export default function MarkdownPage() {
  const { "*": slug } = useParams();
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
    null
  );
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setNotFound(false);
    setMDXContent(null);

    const key = `../markdown/${slug}.mdx`;
    const loader = mdxFiles[key];

    if (!loader) {
      setNotFound(true);
      return;
    }

    loader()
      .then((mod: any) => setMDXContent(() => mod.default))
      .catch(() => setNotFound(true));
  }, [slug]);

  return (
    <Page>
      <MDXProvider components={components}>
        {notFound && <h1>Not found</h1>}
        {MDXContent && <MDXContent />}
      </MDXProvider>
    </Page>
  );
}
