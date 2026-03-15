const Footer = () => {
  const cYear = new Date().getFullYear();
  return (
    <footer className="flex h-15 items-center justify-center font-mono text-white/40">
      2025 - {cYear}
    </footer>
  );
};

export default Footer;
