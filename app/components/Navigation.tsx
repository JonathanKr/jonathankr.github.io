import { Link, useLocation } from "react-router";

const LINKS = [
  { link: "/", label: "Home" },
  { link: "/photography", label: "Photography" },
];

const Navigation = () => {
  const pathname = useLocation().pathname;

  return (
    <nav className="z-1 flex gap-5">
      {LINKS.map((e) => (
        <Link
          className={`${pathname === e.link ? "italic" : ""}`}
          to={e.link}
          key={e.label}
        >
          {e.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
