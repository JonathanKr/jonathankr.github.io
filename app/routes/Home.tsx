import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-teal-900">
      <HeroSection overline="Hello I'm" heading="Jonathan Kron" />
      <section className="z-10 mx-8 mb-10 max-w-3xl text-justify">
        <h2 className="font-sans text-5xl leading-tight font-bold">
          Publications
        </h2>
        <div className="mb-10 font-mono">
          <div className="relative hover:cursor-pointer hover:underline">
            <svg
              className="absolute top-0 left-15 -z-1 overflow-visible"
              // viewBox="0 0 200 30"
              xmlns="http://www.w3.org/2000/svg"
              opacity={0.5}
            >
              <path
                fill="teal"
                d="M49.5,-50.9C63.2,-47.4,73,-31,75.6,-13.7C78.2,3.6,73.6,21.7,61.4,28.4C49.1,35,29.2,30.2,13.2,35.7C-2.7,41.3,-14.7,57.3,-29.4,60.7C-44.2,64.1,-61.7,54.9,-69.1,40.6C-76.5,26.3,-73.8,6.9,-62.9,-3.5C-52,-13.9,-33,-15.3,-21.2,-19.2C-9.3,-23.1,-4.7,-29.5,6.6,-37.4C17.8,-45.2,35.7,-54.5,49.5,-50.9Z"
              />
            </svg>
            <span className="">[1] Wavefront</span> <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
            aliquid facere quod vel rem nostrum. Quis beatae praesentium
            assumenda ex, autem quae fugit id incidunt reprehenderit totam
            pariatur aliquid.
          </div>
          [
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            Github
          </span>
          ][
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            ResearchGate
          </span>
          ]
        </div>
        <div className="mb-10 font-mono">
          <div className="hover:cursor-pointer hover:underline">
            [1] Wavefront <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
            aliquid facere quod vel rem nostrum. Quis beatae praesentium
            assumenda ex, autem quae fugit id incidunt reprehenderit totam
            pariatur aliquid.
          </div>
          [
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            Github
          </span>
          ][
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            ResearchGate
          </span>
          ]
        </div>
        <div className="mb-10 font-mono">
          <div className="hover:cursor-pointer hover:underline">
            [1] Wavefront <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
            aliquid facere quod vel rem nostrum. Quis beatae praesentium
            assumenda ex, autem quae fugit id incidunt reprehenderit totam
            pariatur aliquid.
          </div>
          [
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            Github
          </span>
          ][
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            ResearchGate
          </span>
          ]
        </div>
      </section>
      <section className="mx-8 mb-10 max-w-3xl text-justify">
        <h2 className="font-sans text-5xl leading-tight font-bold">Projects</h2>
        <div className="mb-10 font-mono">
          <div className="hover:cursor-pointer hover:underline">
            [1] Wavefront <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
            aliquid facere quod vel rem nostrum. Quis beatae praesentium
            assumenda ex, autem quae fugit id incidunt reprehenderit totam
            pariatur aliquid.
          </div>
          [
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            Github
          </span>
          ][
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            ResearchGate
          </span>
          ]
        </div>
        <div className="mb-10 font-mono">
          <div className="hover:cursor-pointer hover:underline">
            [1] Wavefront <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
            aliquid facere quod vel rem nostrum. Quis beatae praesentium
            assumenda ex, autem quae fugit id incidunt reprehenderit totam
            pariatur aliquid.
          </div>
          [
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            Github
          </span>
          ][
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            ResearchGate
          </span>
          ]
        </div>
        <div className="mb-10 font-mono">
          <div className="hover:cursor-pointer hover:underline">
            [1] Wavefront <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
            aliquid facere quod vel rem nostrum. Quis beatae praesentium
            assumenda ex, autem quae fugit id incidunt reprehenderit totam
            pariatur aliquid.
          </div>
          [
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            Github
          </span>
          ][
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            ResearchGate
          </span>
          ]
        </div>
      </section>
      <section className="mx-8 mb-10 max-w-3xl text-justify">
        <h2 className="font-sans text-5xl leading-tight font-bold">CV</h2>
        <div className="mb-10 font-mono">
          <div className="hover:cursor-pointer hover:underline">
            [1] Wavefront <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
            aliquid facere quod vel rem nostrum. Quis beatae praesentium
            assumenda ex, autem quae fugit id incidunt reprehenderit totam
            pariatur aliquid.
          </div>
          [
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            Github
          </span>
          ][
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            ResearchGate
          </span>
          ]
        </div>
        <div className="mb-10 font-mono">
          <div className="hover:cursor-pointer hover:underline">
            [1] Wavefront <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
            aliquid facere quod vel rem nostrum. Quis beatae praesentium
            assumenda ex, autem quae fugit id incidunt reprehenderit totam
            pariatur aliquid.
          </div>
          [
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            Github
          </span>
          ][
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            ResearchGate
          </span>
          ]
        </div>
        <div className="mb-10 font-mono">
          <div className="hover:cursor-pointer hover:underline">
            [1] Wavefront <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
            aliquid facere quod vel rem nostrum. Quis beatae praesentium
            assumenda ex, autem quae fugit id incidunt reprehenderit totam
            pariatur aliquid.
          </div>
          [
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            Github
          </span>
          ][
          <span className="text-indigo-300 hover:cursor-pointer hover:underline">
            ResearchGate
          </span>
          ]
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
