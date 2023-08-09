function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
    },

    // Uncomment the following extend
    // if existing Tailwind color palette will be used

    // extend: {
    textColor: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
        sub: withOpacity("--color-border"),
        inverted: withOpacity("--color-fill"),
      },
    },
    backgroundColor: {
      skin: {
        fill: withOpacity("--color-fill"),
        subfill: withOpacity("--color-subfill"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-text-base"),
        card: withOpacity("--color-card"),
        "card-muted": withOpacity("--color-card-muted"),
      },
    },
    outlineColor: {
      skin: {
        fill: withOpacity("--color-accent"),
      },
    },
    borderColor: {
      skin: {
        line: withOpacity("--color-border"),
        fill: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
      },
    },
    fill: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
      },
      transparent: "transparent",
    },
    fontFamily: {
      mono: ["IBM Plex Mono", "monospace"],
      noto: ["Noto Sans JP"],
      barlow: ["Barlow Condensed"],
      roboto_mono: ["Roboto Mono"],
      poppins: ["Poppins"],
    },
    // },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              //color: '#ffffff !important',
              borderLeft: 'solid 10px #ab1717',
              padding: '0.5em',
              lineHeight: '0.7'
            },
            h2: {
              borderLeftWidth: '4px',
              borderLeftStyle: 'solid', 
              borderColor: '#ab1717',
              padding: '0.5em',
              lineHeight: '0.7'
            },
            h3: {
              fontStyle: 'normal',
            },
            'code': {
              backgroundColor: '#eee',
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
