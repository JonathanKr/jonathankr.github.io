import { Link } from "react-router";

import JobTypeComp from "~/components/JobType";
import Page from "~/components/Page";
import { EDUCATION } from "~/constants/edu";
import {
  AUDIOTOOLS,
  CREATIVESOFTWARE,
  DATABASES,
  DESIGNTOOLS,
  DEVTOOLS,
  FRAMEWORKS,
  PROGRAMMINGLANGUAGES,
  PYTHONLIBRARIES,
} from "~/constants/skills";
import { WORK } from "~/constants/work";
import markdownIndex from "../markdown/index.json";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

type MarkdownEntry = {
  slug: string;
  title: string;
  desc: string;
};

const Home = () => {
  const projects: MarkdownEntry[] = markdownIndex.projects;
  const publications: MarkdownEntry[] = markdownIndex.publications;

  return (
    <Page>
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
          <Link to="#work">Work Experience</Link>
        </li>
        <li>
          <Link to="#education">Education</Link>
        </li>
        <li>
          <Link to="#skills">Tools & Technologies I Work With</Link>
        </li>
      </ol>
      <p>
        Before you browse my projects and publications let me introduce myself.
        I am a student of{" "}
        <Link to="https://www.th-koeln.de/en/academics/media-technology-masters-program_7573.php">
          Mediatechnology
        </Link>{" "}
        at Cologne University of Applied Sciences. Throughout my studies I
        specialized in machine learning and acoustical programming, with many
        projects also involving web development.
      </p>
      <p>
        You can find me on{" "}
        <Link to="https://github.com/JonathanKr">Github</Link>,{" "}
        <Link to="https://www.youtube.com/@JonathanKron">Youtube</Link> or{" "}
        <Link to="https://www.researchgate.net/profile/Jonathan-Kron">
          ResearchGate
        </Link>
        . Feel free to send me an{" "}
        <Link to="mailto:jonathan-kron@protonmail.com">E-Mail</Link>{" "}
        <span className="text-sm text-black/50">
          jonathan-kron@protonmail.com
        </span>
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
      <h2 id="work">Work Experience</h2>
      <ol>
        {WORK.map(({ name, company, date, desc, type }) => (
          <li key={name} className="pb-4 last:pb-0">
            <JobTypeComp type={type} /> {name} {company ? "at " + company : ""}
            <span className="text-sm text-black/50"> {date}</span>
            <ul className="mt-0 mb-0">
              {desc.map((e) => (
                <li key={e} className="text-black/60">
                  {e}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <h2 id="education">Education</h2>
      <ol>
        {EDUCATION.map(({ name, date, desc }) => (
          <li key={name} className="pb-4 last:pb-0">
            {name}
            <span className="text-sm text-black/50"> {date}</span>
            <ul className="mt-0 mb-0">
              {desc.map((e) => (
                <li key={e} className="text-black/60">
                  {e}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <h2 id="skills">Tools & Technologies I Work With</h2>
      Here is an overview of programming languages, software and web frameworks
      I have worked with over the recent years:
      <div className="overflow-x-auto">
        <table className="mt-4 w-full">
          <tbody>
            {[
              { label: "Programming Languages", data: PROGRAMMINGLANGUAGES },
              { label: "Web Frameworks", data: FRAMEWORKS },
              { label: "Python Libraries", data: PYTHONLIBRARIES },
              { label: "Databases", data: DATABASES },
              { label: "Dev Tools", data: DEVTOOLS },
              { label: "3D & Design", data: DESIGNTOOLS },
              { label: "Audio & Music", data: AUDIOTOOLS },
              { label: "Creative Software", data: CREATIVESOFTWARE },
            ].map(({ label, data }) => (
              <tr key={label} className="border-b border-black/10 align-top">
                <td>{label}</td>
                <td>
                  {data.map((e, i) => (
                    <span key={e.name}>
                      {e.name}
                      {i < data.length - 1 && ", "}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Page>
  );
};

export default Home;
