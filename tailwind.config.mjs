/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [

  ],
  daisyui: {
    themes: [
      {
        cityrail_light: {
          "primary": "#5a9dff",
          "secondary": "#f595ff",
          "accent": "#2eecb6",
          "neutral": "#2b2b2b",
          "base-100": "#ffffff",
          "info": "#5a9dff",
          "success": "#067354",
          "warning": "#ffb906",
          "error": "#de2727",
        },
        cityrail_dark: {
          "primary": "#5a9dff",
          "secondary": "#f595ff",
          "accent": "#2eecb6",
          "neutral": "#2b2b2b",
          "base-100": "#151515",
          "info": "#5a9dff",
          "success": "#067354",
          "warning": "#ffb906",
          "error": "#de2727",
        },
      },
      "light",
      "dark",
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "cityrail_dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
