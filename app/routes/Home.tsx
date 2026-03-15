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
      <section className="mx-15 mb-10 max-w-3xl text-justify">
        <h2 className="font-sans text-5xl leading-tight font-bold">
          Publications
        </h2>
        <div className="mb-10 font-mono">
          <div className="hover:cursor-pointer hover:underline">
            [1] Wavefront <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
            aliquid facere quod vel rem nostrum. Quis beatae praesentium
            assumenda ex, autem quae fugit id incidunt reprehenderit totam
            pariatur aliquid.
          </div>
          [
          <span className="text-white/70 hover:cursor-pointer hover:underline">
            Github
          </span>
          ][
          <span className="text-white/70 hover:cursor-pointer hover:underline">
            ResearchGate
          </span>
          ]
        </div>
        <div className="mb-10 font-mono">
          [1] Wavefront <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
          aliquid facere quod vel rem nostrum. Quis beatae praesentium assumenda
          ex, autem quae fugit id incidunt reprehenderit totam pariatur aliquid.
          <br />
          <span className="text-white/70">[Github]</span>
          <span className="text-white/70">[ResearchGate]</span>
        </div>
        <div className="mb-10 font-mono">
          [1] Wavefront <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
          aliquid facere quod vel rem nostrum. Quis beatae praesentium assumenda
          ex, autem quae fugit id incidunt reprehenderit totam pariatur aliquid.
          <br />
          <span className="text-white/70">[Github]</span>
          <span className="text-white/70">[ResearchGate]</span>
        </div>
      </section>
      <section className="mx-15 mb-10 max-w-3xl">
        <h2 className="font-sans text-5xl leading-tight font-bold">Projects</h2>
        <div className="mb-10 font-mono">
          [1] Wavefront <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
          aliquid facere quod vel rem nostrum. Quis beatae praesentium assumenda
          ex, autem quae fugit id incidunt reprehenderit totam pariatur aliquid.
          <br />
          <span className="text-white/70">[Github]</span>
          <span className="text-white/70">[ResearchGate]</span>
        </div>
      </section>
      <section className="mx-15 mb-10 max-w-3xl">
        <h2 className="font-sans text-5xl leading-tight font-bold">CV</h2>
        <div className="mb-10 font-mono">
          [1] Wavefront <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
          aliquid facere quod vel rem nostrum. Quis beatae praesentium assumenda
          ex, autem quae fugit id incidunt reprehenderit totam pariatur aliquid.
          <br />
          <span className="text-white/70">[Github]</span>
          <span className="text-white/70">[ResearchGate]</span>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
