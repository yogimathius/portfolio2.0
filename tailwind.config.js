module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // Changed from false to 'class' for toggling dark mode
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        // Modern tech palette - updated with more cohesive colors
        primary: "#4F46E5", // Indigo
        "primary-dark": "#4338CA",
        secondary: "#06B6D4", // Cyan
        "secondary-dark": "#0891B2",
        accent: "#8B5CF6", // Purple
        "accent-dark": "#7C3AED",
        light: "#F9FAFB",
        dark: "#111827",
        "dark-blue": "#1E3A8A",
        "gray-light": "#F3F4F6",
        "gray-medium": "#9CA3AF",
        "gray-dark": "#4B5563",
        // Keep some original colors for compatibility
        cyan: "#5FB4A2",
        "gray-dk-blue": "#33323D",
        "light-grey": "#FAFAFA",
        "light-grey-text": "#EAEAEB",
        "bright-red": "#F43030",
      },
      height: {
        "75-screen": "75vh",
        "85-screen": "85vh",
      },
      backgroundImage: (theme) => ({
        hero: "url('/src/assets/images/header-background.jpg')",
      }),
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        header: ["Montserrat", "sans-serif"],
      },
      stroke: (theme) => ({
        cyan: theme("colors.cyan"),
        primary: theme("colors.primary"),
        secondary: theme("colors.secondary"),
        accent: theme("colors.accent"),
      }),
      fill: (theme) => ({
        cyan: theme("colors.cyan"),
        primary: theme("colors.primary"),
        secondary: theme("colors.secondary"),
        accent: theme("colors.accent"),
      }),
      boxShadow: {
        card: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "card-hover":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "fade-in-down": "fadeInDown 0.5s ease-out",
        "fade-in-left": "fadeInLeft 0.5s ease-out",
        "fade-in-right": "fadeInRight 0.5s ease-out",
        "bounce-in": "bounceIn 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-up": "slideInUp 0.5s ease-out",
        "slide-in-down": "slideInDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus", "dark"],
      backgroundColor: ["dark", "hover", "focus"],
      textColor: ["dark", "hover", "focus"],
      borderColor: ["dark", "hover", "focus"],
      animation: ["responsive", "motion-safe", "motion-reduce"],
      translate: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
