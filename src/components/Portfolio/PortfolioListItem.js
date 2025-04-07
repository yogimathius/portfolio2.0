import React from "react";
import { Link } from "react-router-dom";
import { loadState, saveState } from "../../helpers/localStorage";

const PortfolioListItem = ({ project, index }) => {
  const projectImage = project.image_url;
  const title = project.title;
  const description = project.text_body;
  const pageId = project.page_id;
  const projectKeys = loadState();
  const stateObj = {
    pageId,
    projectKeys,
  };

  // Truncate description to keep cards consistent in height
  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="group h-full">
      <div className="card flex flex-col h-full overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
        {/* Image container with overlay */}
        <div className="relative overflow-hidden h-48">
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={projectImage}
            alt={title}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-bold text-primary dark:text-secondary mb-2">
            {title}
          </h3>
          <p className="text-gray-dark dark:text-gray-light text-sm mb-4 flex-grow">
            {truncateDescription(description)}
          </p>

          <div className="mt-auto">
            <Link
              to={`/project/${pageId}`}
              onClick={() => saveState(stateObj)}
              className="inline-flex items-center text-primary dark:text-secondary font-semibold transition-all hover:text-primary-dark dark:hover:text-secondary-dark group-hover:translate-x-1"
            >
              <span>View Project</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioListItem;
