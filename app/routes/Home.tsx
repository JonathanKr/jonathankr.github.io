import { Link } from "react-router";

import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

const Home = () => {
  return (
    <div className="lg:max-w-1/2">
      <h1 className="mb-5 font-sans text-6xl font-bold">Jonathan Kron</h1>
      <p className="mb-5 text-justify font-serif">
        I am a{" "}
        <Link
          to="https://www.th-koeln.de/en/academics/media-technology-masters-program_7573.php"
          target="_blank"
        >
          Mediatechnology
        </Link>{" "}
        student at TH Köln (Cologne University of Applied Sciences). Throughout
        my studies I specialized in machine learning and acoustical programming,
        with many projects also involving web development. I am proficient in{" "}
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
          React
        </Link>
        ,{" "}
        <Link to="#" target="_blank">
          bun, uv, angular, nestjs, pytorch, etc, etc
        </Link>
        .
      </p>
      <p className="mb-5 text-justify font-serif">
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
        . Or feel free to send me an <Link to="mailto:#">E-Mail</Link> (:
      </p>
      <p className="mb-5 text-justify font-serif">
        This website contains my
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
      </p>
      <h2 className="my-5 font-sans text-4xl font-bold" id="projects">
        Projects
      </h2>
      <div className="mb-10 text-justify font-serif">
        <div className="hover:cursor-pointer hover:underline">
          [1] Wavefront <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
          aliquid facere quod vel rem nostrum. Quis beatae praesentium assumenda
          ex, autem quae fugit id incidunt reprehenderit totam pariatur aliquid.
        </div>
        [<Link to="#">Github</Link>
        ][
        <Link to="#">ResearchGate</Link>]
      </div>
      <div className="mb-10 text-justify font-serif">
        <div className="hover:cursor-pointer hover:underline">
          [1] Wavefront <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
          aliquid facere quod vel rem nostrum. Quis beatae praesentium assumenda
          ex, autem quae fugit id incidunt reprehenderit totam pariatur aliquid.
        </div>
        [<Link to="#">Github</Link>
        ][
        <Link to="#">ResearchGate</Link>]
      </div>
      <h2 className="my-5 font-sans text-4xl font-bold" id="publications">
        Publications
      </h2>
      <h2 className="my-5 font-sans text-4xl font-bold" id="cv">
        CV
      </h2>
    </div>
  );
};

export default Home;
