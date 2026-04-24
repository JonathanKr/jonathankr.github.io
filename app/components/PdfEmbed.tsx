import type { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfEmbed = ({ src }: { src: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();
  const [dpr, setDpr] = useState(window.devicePixelRatio);
  const [numPages, setNumPages] = useState<number>();

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateDpr = () => {
      setDpr(window.devicePixelRatio);
      const mql = window.matchMedia(
        `(resolution: ${window.devicePixelRatio}dppx)`
      );
      mql.addEventListener("change", updateDpr, { once: true });
    };
    const mql = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`
    );
    mql.addEventListener("change", updateDpr, { once: true });
    return () => mql.removeEventListener("change", updateDpr);
  }, []);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div ref={containerRef}>
      <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={width}
            devicePixelRatio={dpr}
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfEmbed;
