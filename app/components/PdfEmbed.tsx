interface PdfEmbedProps {
  src: string;
  height?: number;
}

export default function PdfEmbed({ src, height = 600 }: PdfEmbedProps) {
  return (
    <embed src={src} type="application/pdf" width="100%" height={height} />
  );
}
