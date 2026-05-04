import { Link } from "react-router";

import Page from "~/components/Page";
import markdownIndex from "../markdown/index.json";
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

const pythonLibraries = [
  { name: "PyTorch", link: "#" },
  { name: "Pandas", link: "#" },
  { name: "NumPy", link: "#" },
  { name: "Scikit-learn", link: "#" },
  { name: "Matplotlib", link: "#" },
];

const databases = [
  { name: "MongoDB", link: "#" },
  { name: "H2", link: "#" },
];

const devTools = [
  { name: "Git", link: "#" },
  { name: "Docker", link: "#" },
  { name: "VS Code", link: "#" },
];

const designTools = [
  { name: "Blender", link: "#" },
  { name: "Figma", link: "#" },
  { name: "GIMP", link: "#" },
];

const audioTools = [
  { name: "Cubase", link: "#" },
  { name: "Audacity", link: "#" },
];

const creativeSoftware = [
  { name: "Inkscape", link: "#" },
  { name: "Krita", link: "#" },
  { name: "DaVinci Resolve", link: "#" },
];

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
      <h2 id="work">Work Experience</h2>
      <ol>
        <li>Fullstack Webdevelopment at sovanta</li>
        <li>Softwaredevelopment - Wavefront</li>
        <li>Research Assistant in Acoustics at TH Köln</li>
        <li>Tutor of Signal Theory and Applied Mathematics at TH Köln</li>
        <li>Audio Production Assistant</li>
      </ol>
      <h2 id="education">Education</h2>
      <ol>
        <li>B.Sc. Mediatechnology</li>
        <li>High School Diploma (Abitur)</li>
      </ol>
      <h2 id="skills">Tools & Technologies I Work With</h2>
      Here is an overview of programming languages, software and web frameworks
      I have worked with over the recent years:
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="w-36 py-2 pr-4 text-left font-semibold whitespace-nowrap">
                Category
              </th>
              <th className="py-2 text-left font-semibold">Items</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Programming Languages", data: programmingLanguages },
              { label: "Web Frameworks", data: frameworks },
              { label: "Python Libraries", data: pythonLibraries },
              { label: "Databases", data: databases },
              { label: "Dev Tools", data: devTools },
              { label: "3D & Design", data: designTools },
              { label: "Audio & Music", data: audioTools },
              { label: "Creative Software", data: creativeSoftware },
            ].map(({ label, data }) => (
              <tr key={label} className="border-b border-gray-100 align-top">
                <td className="w-36 py-2 pr-4 font-medium whitespace-nowrap text-gray-600">
                  {label}
                </td>
                <td className="flex flex-wrap gap-x-1 gap-y-1 py-2">
                  {data.map((e, i) => (
                    <span key={e.name}>
                      <Link
                        to={e.link}
                        className="text-blue-600 hover:underline"
                      >
                        {e.name}
                      </Link>
                      {i < data.length - 1 && ","}
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
