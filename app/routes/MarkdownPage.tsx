import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";

import Navigation from "~/components/Navigation";

export default function MarkdownPage() {
  const { "*": slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!slug) return;
    fetch(`/markdown/${slug}.md`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.text();
      })
      .then(setContent)
      .catch(() => setContent("# Not found"));
  }, [slug]);

  return (
    <div>
      <Navigation />
      <article className="prose prose-neutral max-w-none font-serif [&_h1]:mb-2 [&_h1]:font-sans [&_h2]:font-sans">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
