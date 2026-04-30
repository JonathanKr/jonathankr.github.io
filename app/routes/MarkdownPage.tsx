import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Navigation from "~/components/Navigation";
import PdfEmbed from "~/components/PdfEmbed";

const components = {
  PdfEmbed,
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
    <div>
      <article className="prose prose-neutral max-w-none text-justify font-serif [&_h1]:my-2 [&_h1]:text-left [&_h1]:font-sans [&_h2]:my-2 [&_h2]:text-left [&_h2]:font-sans [&_h3]:my-2 [&_h3]:text-left [&_h3]:font-sans">
        <Navigation />
        <MDXProvider components={components}>
          {notFound && <h1>Not found</h1>}
          {MDXContent && <MDXContent />}
        </MDXProvider>
      </article>
    </div>
  );
}
