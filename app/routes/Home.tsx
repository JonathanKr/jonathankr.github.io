import { useEffect, useState } from "react";
import { Link } from "react-router";

import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

interface MarkdownEntry {
  slug: string;
  title: string;
  desc: string;
}

type Skill = {
  name: string;
  link: string;
};
const programmingLanguages: Skill[] = [
  { name: "Python", link: "#" },
  { name: "Rust", link: "#" },
  { name: "Java", link: "#" },
  { name: "Java-/Typescript", link: "#" },
];

const frameworks: Skill[] = [
  { name: "React", link: "#" },
  { name: "Angular", link: "#" },
  { name: "NestJS", link: "#" },
];

const tools: Skill[] = [
  { name: "VS Code", link: "#" },
  { name: "Typst", link: "#" },
  { name: "Cubase", link: "#" },
  { name: "Blender", link: "#" },
];

const Home = () => {
  const [projects, setProjects] = useState<MarkdownEntry[]>([]);
  const [publications, setPublications] = useState<MarkdownEntry[]>([]);

  useEffect(() => {
    fetch("/markdown/index.json")
      .then((r) => r.json())
      .then((r) => {
        setProjects(r["projects"]);
        setPublications(r["publications"]);
      });
  }, []);

  return (
    <div className="prose prose-neutral max-w-none text-justify font-serif [&_h1]:mb-2 [&_h1]:font-sans [&_h2]:my-2 [&_h2]:font-sans">
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
          <Link to="#cv">Curriculum Vitae</Link>
        </li>
        <li>
          <Link to="#skills">Tools & Technologies I Work With</Link>
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
        projects also involving web development.
      </p>
      <p>
        Feel free to send me an <Link to="mailto:#">E-Mail</Link>.
        Alternatively, you can find me on{" "}
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
        .
      </p>
      <h2 id="projects">Projects</h2>
      <ol>
        {projects.map((entry) => (
          <li key={entry.slug}>
            <Link to={`/md/${entry.slug}`}>{entry.title}</Link>: {entry.desc}
          </li>
        ))}
      </ol>
      <h2 id="publications">Publications</h2>
      <ol>
        {publications.map((entry) => (
          <li key={entry.slug}>
            <Link to={`/md/${entry.slug}`}>{entry.title}</Link>: {entry.desc}
          </li>
        ))}
      </ol>
      <h2 id="cv">Curriculum Vitae</h2>
      TODO: add some things from the cv in typst
      <h2 id="skills">Tools & Technologies I Work With</h2>
      Here is an overview of things I have worked with:
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <h3 className="mt-2 border-b border-gray-200 pb-2 font-sans">
            Programming Languages
          </h3>
          <ul>
            {programmingLanguages.map((e) => (
              <li key={e.name}>
                <Link to={e.link}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mt-2 border-b border-gray-200 pb-2 font-sans">
            Frameworks
          </h3>
          <ul>
            {frameworks.map((e) => (
              <li key={e.name}>
                <Link to={e.link}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mt-2 border-b border-gray-200 pb-2 font-sans">
            Software and Tools
          </h3>
          <ul>
            {tools.map((e) => (
              <li key={e.name}>
                <Link to={e.link}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
