import React, { useState, useEffect, useRef } from "react";
import { saveState } from "../../helpers/localStorage";
import LoadingScreen from "../LoadingScreen";
import PortfolioListItem from "./PortfolioListItem";
import projectsContext from "../../App";
import CallToAction from "../CallToAction";

const PortfolioList = () => {
  const projectsStore = projectsContext();
  const projects = projectsStore.props.value;
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  useEffect(() => {
    if (!loading && containerRef.current) {
      const items = containerRef.current.querySelectorAll(".portfolio-item");
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 100}ms`;
        setTimeout(() => {
          item.classList.add("opacity-100");
          item.classList.remove("opacity-0", "translate-y-20");
        }, 100 + index * 100);
      });
    }
  }, [loading]);

  const projectKeys = Object.keys(projects);
  const renderedProjects = projectKeys.map((projectKey, index) => {
    const project = projects[projectKey];
    return (
      <div
        key={index}
        className="portfolio-item opacity-0 translate-y-20 transition-all duration-700 ease-out"
      >
        <PortfolioListItem project={project} index={index} />
      </div>
    );
  });

  saveState(projectKeys);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <section className="container py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in">
              My Portfolio
            </h1>
            <p className="text-center text-gray-dark dark:text-gray-light max-w-3xl mx-auto mb-16 animate-fade-in-up">
              Here are some of the projects I've worked on. Each project has
              pushed my skills and helped me grow as a developer.
            </p>

            <div
              ref={containerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {renderedProjects}
            </div>
          </section>

          <CallToAction />
        </div>
      )}
    </div>
  );
};

export default PortfolioList;
