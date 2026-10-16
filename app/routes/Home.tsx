import { Link } from "react-router";

import Footnote from "~/components/Footnote";
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

import HomepageMarkdown from "../homepage/homepage.mdx";
import { MDXProvider } from "@mdx-js/react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

export type MarkdownEntry = {
  slug: string;
  title: string;
  desc: string;
  date: string;
};

const HomepageWorkList = () => {
  return (
    <ol>
      {WORK.map(({ name, company, date, desc, type }) => (
        <li key={name} className="pb-2 last:pb-0">
          <JobTypeComp type={type} /> {name} {company ? "at " + company : ""}
          <span className="text-xs text-black/50"> {date}</span>
          <ul className="mt-0 mb-0">
            {desc.map((e) => (
              <li key={e} className="text-sm text-black/60">
                {e}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

const HomepageEducationList = () => {
  return (
    <ol>
      {EDUCATION.map(({ name, date, desc }) => (
        <li key={name} className="pb-2 last:pb-0">
          {name}
          <span className="text-xs text-black/50"> {date}</span>
          <ul className="mt-0 mb-0">
            {desc.map((e) => (
              <li key={e} className="text-sm text-black/60">
                {e}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

const HomepageMarkdownList = ({ list }: { list: MarkdownEntry[] }) => {
  return (
    <table className="w-full [&_td]:px-1 [&_td]:py-0 [&_th]:px-1 [&_th]:py-0">
      <thead>
        <tr className="bg-gray-50">
          <th>Title</th>
          <th>Description</th>
          <th className="text-end">Date</th>
        </tr>
      </thead>
      <tbody>
        {list.map((entry) => (
          <tr key={entry.slug}>
            <td>
              <Link to={`/md/${entry.slug}`}>{entry.title}</Link>
            </td>
            <td>{entry.desc}</td>
            <td className="text-end text-xs text-black/50">{entry.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const HomepageSkillList = () => {
  return (
    <table className="w-full [&_td]:p-0 [&_th]:p-0">
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
          <tr key={label}>
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
  );
};

const homepageComp = {
  Link,
  PageSection,
  HomepageMarkdownList,
  HomepageWorkList,
  HomepageEducationList,
  HomepageSkillList,
};

const Home = () => {
  const projectsAndPublications: MarkdownEntry[] =
    markdownIndex.projectsAndPublications;
  const blog: MarkdownEntry[] = markdownIndex.blog;

  return (
    <Page>
      <h1>Jonathan Kron</h1>
      <HomepageMarkdown components={homepageComp} />
    </Page>
  );
};

export default Home;
