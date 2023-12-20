/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
