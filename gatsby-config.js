module.exports = {
  siteMetadata: {
    title: "andrewcircelli",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@common": "src/components/common",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@templates": "src/templates",
        },
        extensions: ["js"],
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
