import React from "react";
import { createRoot } from "react-dom/client";
import { Agentation } from "agentation";
import { InfiniteSlider } from "./components/core/infinite-slider";
import "../styles.css";

function App() {
  return (
    <>
      <main>
        <section className="hero" aria-label="Matter Studios Earth introduction">
          <video
            className="hero__video"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            ref={(el) => {
              if (
                el &&
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                el.pause();
              }
            }}
          >
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>

          <div className="hero__backdrop">
            <div className="hero__orb hero__orb--one" />
            <div className="hero__orb hero__orb--two" />
            <div className="hero__orb hero__orb--three" />
            <div className="hero__grain" />
          </div>

          <h1 className="hero__title">MATTER</h1>

          <header className="hero__copy">
            <p>
              Matter Studios is an artist-led branding studio. We work with
              companies building new worlds across the arts, culture, and
              technology. Matter integrates a deeply intentional approach to
              visual storytelling, translating the distinct essence of each
              client through art direction, visual identity, and positioning.
            </p>
            <p>
              Select Clients include LALO Tequila, Float Lab, and Mandrake
              Hotel. 
              <br /> 
              <a href="#work">WORK</a>{" "}
              <a href="mailto:hello@matter.earth">CONTACT</a>.
            </p>
          </header>

          <div className="scroll-pill" aria-hidden="true" />
        </section>

        <section className="work" id="work" aria-label="Selected brand work">
          <nav className="topbar" aria-label="Portfolio navigation">
            <div className="nav-links">
              <a href="#work" className="muted">WORK</a>
              <a href="mailto:hello@matter.earth">CONTACT</a>
            </div>
          </nav>

          <h2>Selected Work</h2>

          <div className="filters" aria-label="Work filters">
            <button className="active" type="button">ALL</button>
          </div>

          <div className="work-index">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <div className="project-meta">
                  <div className="project-client">{project.client}</div>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-gallery">
                  <InfiniteSlider speedOnHover={18} gap={10}>
                    {project.tiles.map((tile) => (
                      <figure
                        className={`tile ${tile.className}`}
                        key={tile.label}
                        aria-label={tile.label}
                      />
                    ))}
                  </InfiniteSlider>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="studio" id="studio">
          <p>
            Matter Studios Earth makes brand systems for regenerative products,
            cultural platforms and organizations building a more careful world.
          </p>
        </section>
      </main>

      <Agentation />
    </>
  );
}

const projects = [
  {
    client: "Terra Forma",
    title: "Terra Forma Regenerative Goods",
    description: "Brand identity, art direction, and positioning.",
    tiles: [
      { label: "soil care", className: "wide clay" },
      { label: "seed library", className: "moss portrait" },
      { label: "field notes", className: "dark" },
      { label: "harvest kit", className: "cream wide" },
      { label: "market wall", className: "green" },
    ],
  },
  {
    client: "Orbit Water",
    title: "Orbit Water Circular Identity",
    description: "Brand identity, art direction, and positioning.",
    tiles: [
      { label: "refill station", className: "blue wide" },
      { label: "vessel", className: "aqua" },
      { label: "poster run", className: "ink portrait" },
      { label: "capsule", className: "sand" },
    ],
  },
  {
    client: "Common Ground",
    title: "Common Ground Public Program",
    description: "Brand identity, art direction, and positioning.",
    tiles: [
      { label: "assembly", className: "mono wide" },
      { label: "wayfinding", className: "black" },
      { label: "symbols", className: "lime" },
      { label: "journal", className: "stone portrait" },
      { label: "signal set", className: "rust" },
      { label: "archive", className: "white" },
    ],
  },
  {
    client: "Morrow",
    title: "Morrow Plant Pharmacy",
    description: "Brand identity, art direction, and positioning.",
    tiles: [
      { label: "adaptogens", className: "amber" },
      { label: "pack suite", className: "berry wide" },
      { label: "retail shelf", className: "leaf" },
      { label: "insert", className: "paper portrait" },
      { label: "campaign", className: "red" },
    ],
  },
  {
    client: "Earth Office",
    title: "Earth Office Climate Forum",
    description: "Brand identity, art direction, and positioning.",
    tiles: [
      { label: "summit", className: "green wide" },
      { label: "badges", className: "cream" },
      { label: "screen system", className: "blue portrait" },
      { label: "installation", className: "clay" },
    ],
  },
];

createRoot(document.getElementById("root")).render(<App />);
