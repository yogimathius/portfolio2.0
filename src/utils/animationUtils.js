/**
 * Utility functions for animations
 */

/**
 * Generates a staggered animation delay based on index
 * @param {number} index - The index of the item in a list
 * @param {number} baseDelay - Base delay in milliseconds (default 50ms)
 * @returns {Object} Style object with animation delay
 */
export const getStaggeredDelay = (index, baseDelay = 50) => {
  return {
    animationDelay: `${index * baseDelay}ms`,
    style: { animationDelay: `${index * baseDelay}ms` },
  };
};

/**
 * Set up Intersection Observer for reveal animations
 * @param {RefObject} ref - React ref object for the container
 * @param {string} visibleClass - Class to add when visible
 * @param {string} hiddenClass - Class to remove when visible
 * @param {number} threshold - Intersection threshold (0-1)
 * @param {string} rootMargin - Root margin for intersection
 */
export const useRevealOnScroll = (
  ref,
  visibleClass = "opacity-100",
  hiddenClass = "opacity-0 translate-y-10",
  threshold = 0.1,
  rootMargin = "0px"
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          if (hiddenClass) {
            const classes = hiddenClass.split(" ");
            entry.target.classList.remove(...classes);
          }
        }
      });
    },
    {
      root: null,
      rootMargin,
      threshold,
    }
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  return () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
};
