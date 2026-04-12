import { useEffect, useState } from "react";
import { Link } from "react-router";

import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

interface MarkdownEntry {
  slug: string;
  title: string;
}

const Home = () => {
  const [entries, setEntries] = useState<MarkdownEntry[]>([]);

  useEffect(() => {
    fetch("/markdown/index.json")
      .then((r) => r.json())
      .then(setEntries);
  }, []);

  return (
    <div className="prose prose-neutral max-w-none text-justify font-serif [&_h1]:mb-2 [&_h1]:font-sans [&_h2]:font-sans">
      <h1>Jonathan Kron</h1>
      Welcome to my personal website. Have a look at my:
      <ol>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#publications">Publications</Link>
        </li>
        <li>
          <Link to="#cv">CV</Link>
        </li>
      </ol>
      <p>
        Before you browse my projects and publications let me introduce myself.
        I am a student of{" "}
        <Link
          to="https://www.th-koeln.de/en/academics/media-technology-masters-program_7573.php"
          target="_blank"
        >
          Mediatechnology
        </Link>{" "}
        at Cologne University of Applied Sciences. Throughout my studies I
        specialized in machine learning and acoustical programming, with many
        projects also involving web development. I am proficient in{" "}
        <Link to="#" target="_blank">
          Python
        </Link>
        ,{" "}
        <Link to="#" target="_blank">
          TypeScript
        </Link>{" "}
        and{" "}
        <Link to="#" target="_blank">
          Rust
        </Link>
        . Technologies and frameworks I have worked with include{" "}
        <Link to="#" target="_blank">
          React, bun, uv, angular, nestjs, pytorch, etc.
        </Link>
      </p>
      <p>
        You can find me on{" "}
        <Link to="https://github.com/JonathanKr" target="_blank">
          Github
        </Link>
        ,{" "}
        <Link to="https://www.youtube.com/@JonathanKron" target="_blank">
          Youtube
        </Link>{" "}
        or{" "}
        <Link
          to="https://www.researchgate.net/profile/Jonathan-Kron"
          target="_blank"
        >
          ResearchGate
        </Link>
        . Feel free to send me an <Link to="mailto:#">E-Mail</Link> (:
      </p>
      <h2 id="projects">Projects</h2>
      {entries.map((entry) => (
        <div key={entry.slug} className="mb-10">
          <div className="hover:cursor-pointer hover:underline">
            <Link to={`/md/${entry.slug}`}>{entry.title}</Link>
          </div>
        </div>
      ))}
      <h2 id="publications">Publications</h2>
      <h2 id="cv">CV</h2>
    </div>
  );
};

export default Home;
