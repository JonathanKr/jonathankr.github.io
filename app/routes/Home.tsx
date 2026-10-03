import { Link } from "react-router";

import JobTypeComp from "~/components/JobType";
import Page from "~/components/Page";
import PageSection from "~/components/PageSection";
import { EDUCATION } from "~/constants/edu";
import {
  AUDIOTOOLS,
  DATABASES,
  DEVTOOLS,
  FRAMEWORKS,
  IMAGEVIDEOSOFTWARE,
  PROGRAMMINGLANGUAGES,
  PYTHONLIBRARIES,
  THREEDSOFTWARE,
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
      <PageSection heading="Summary" id="summary">
        <p>Welcome to my personal website. Have a look at my:</p>
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
          Before you browse my projects and publications let me introduce
          myself. I am a student of{" "}
          <Link to="https://www.th-koeln.de/en/academics/media-technology-masters-program_7573.php">
            Mediatechnology
          </Link>{" "}
          at Cologne University of Applied Sciences. Throughout my studies I
          specialized in machine learning and acoustical programming, with many
          projects also involving web development. You can find and contact me
          here:
        </p>
        <ol>
          <li>
            <Link to="https://github.com/JonathanKr">Github</Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/@JonathanKron">Youtube</Link>
          </li>
          <li>
            <Link to="https://www.researchgate.net/profile/Jonathan-Kron">
              ResearchGate
            </Link>
          </li>
          <li>
            <Link to="mailto:jonathan-kron@protonmail.com">
              <span className="rounded-md bg-blue-100 px-1 py-0.5 text-blue-700">
                jonathan-kron@protonmail.com
              </span>
            </Link>
          </li>
        </ol>
      </PageSection>
      <PageSection heading="Projects" id="projects">
        <ol>
          {projects.map((entry) => (
            <li key={entry.slug}>
              <Link to={`/md/${entry.slug}`}>{entry.title}</Link>: {entry.desc}
            </li>
          ))}
        </ol>
      </PageSection>
      <PageSection heading="Publications" id="publications">
        <ol>
          {publications.map((entry) => (
            <li key={entry.slug}>
              <Link to={`/md/${entry.slug}`}>{entry.title}</Link>: {entry.desc}
            </li>
          ))}
        </ol>
      </PageSection>
      <PageSection heading="Work Experience" id="work">
        <ol>
          {WORK.map(({ name, company, date, desc, type }) => (
            <li key={name} className="pb-2 last:pb-0">
              <JobTypeComp type={type} /> {name}{" "}
              {company ? "at " + company : ""}
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
      </PageSection>
      <PageSection heading="Education" id="education">
        <ol>
          {EDUCATION.map(({ name, date, desc }) => (
            <li key={name} className="pb-2 last:pb-0">
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
      </PageSection>
      <PageSection heading="Tools & Technologies I Work With" id="skills">
        <p>
          Here is an overview of programming languages, software and web
          frameworks I have worked with over the recent years:
        </p>

        <div className="overflow-x-auto px-6.5">
          <table className="w-full">
            <tbody>
              {[
                { label: "Programming Languages", data: PROGRAMMINGLANGUAGES },
                { label: "Python Libraries", data: PYTHONLIBRARIES },
                { label: "Dev Tools", data: DEVTOOLS },
                { label: "Databases", data: DATABASES },
                { label: "Web Frameworks", data: FRAMEWORKS },
                { label: "3D Software", data: THREEDSOFTWARE },
                { label: "Audio & Music Software", data: AUDIOTOOLS },
                { label: "Image & Video Software", data: IMAGEVIDEOSOFTWARE },
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
      </PageSection>
    </Page>
  );
};

export default Home;
