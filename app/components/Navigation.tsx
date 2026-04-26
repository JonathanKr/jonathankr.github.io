import { Link, useLocation } from "react-router";

const LINKS = [
  { link: "/", label: "Home" },
  { link: "/", label: "Photography" },
  { link: "/", label: "Gym" },
];

const Navigation = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="z-1 flex gap-5">
      {LINKS.map((e) => (
        <Link
          className={`font-serif hover:underline ${pathname === e.link ? "text-white" : "text-white/60"}`}
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
