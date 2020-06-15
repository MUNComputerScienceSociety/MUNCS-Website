module.exports = {
  siteMetadata: {
    title: `MUN Computer Science Society`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`, // TODO change
    author: `MUN Computer Science Society`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MUN Computer Science Society`,
        short_name: `muncs`,
        start_url: `/`,
        background_color: `#663399`, // TODO modify
        theme_color: `#663399`, // TODO modify
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // TODO modify // This path is relative to the root of the site.
      },
    },
  ],
};
