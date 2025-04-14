/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        typography: () => ({
          DEFAULT: {
            css: {
              a: {
                  textUnderlineOffset: "2px",
                  "&:hover": {
                      "@media (hover: hover)": {
                          textDecorationThickness: "2px",
                      },
                  },
              },
              "h1 a": {
                "text-decoration": "none",
              },
              "h2 a": {
                "text-decoration": "none",
              },
              blockquote: {
                "font-style": "normal",
              },
              code: {
                borderRadius: "2px",
              },
              pre: {
                border: "1px solid var(--color-border)",
              },
              'ol > li::marker': {
                fontWeight: '400',
                color: 'var(--tw-prose-body)',
              },
              'ul > li::marker': {
                color: 'var(--tw-prose-body)',
              },
            },
          },
          neutral: {
            css: {
            "--tw-prose-headings": "var(--color-neutral-800)",
            "--tw-prose-invert-headings": "var(--color-neutral-200)",
            '--tw-prose-links': "var(--color-neutral-800)",
            '--tw-prose-bold': "var(--color-neutral-800)",
            '--tw-prose-invert-links': "var(--color-neutral-200)",
            '--tw-prose-invert-bold': "var(--color-neutral-200)",
            },
          },
          quoteless: {
            css: {
              "blockquote p:first-of-type::before": { content: "none" },
              "blockquote p:first-of-type::after": { content: "none" },
            },
          },
          sm: {
            css: {
              code: {
                fontSize: "var(--text-sm)",
                fontWeight: "400",
              },
            },
          },
        }),
      },
    },
  };
