import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section bg-gradient-to-r from-secondary via-accent to-primary text-white opacity-0 translate-y-10 transform transition-all duration-1000 ease-out"
    >
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in-up">
            Interested in working together?
          </h2>
          <p
            className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <Link
              to="/contact"
              className="btn bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary focus:ring-white transform hover:scale-105 transition-transform"
            >
              Get In Touch
            </Link>
            <Link
              to="/portfolio"
              className="btn bg-white text-primary hover:bg-gray-100 focus:ring-white transform hover:scale-105 transition-transform"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
