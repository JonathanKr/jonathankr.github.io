import { Link, useLocation } from "react-router";

const LINKS = [
  { link: "/", label: "Home" },
  { link: "/software", label: "Software" },
  { link: "/photography", label: "Photography" },
  { link: "/videography", label: "Videography" },
  { link: "/research", label: "Research" },
  { link: "/contact", label: "Contact" },
];

const Navigation = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="z-1 mt-5 flex gap-5">
      {LINKS.map((e) => (
        <Link
          className={`font-mono hover:underline ${pathname === e.link ? "text-white" : "text-white/60"}`}
          to={e.link}
          key={e.label}
        >
          {e.label}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
