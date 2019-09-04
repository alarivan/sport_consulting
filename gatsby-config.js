module.exports = {
  siteMetadata: {
    title: `sportconsulting.ca`,
    description: `Sportconsulting.ca provides services for athletes and teams that help improve their performance and achieve goals.`,
    keywords: `sport consulting, players, teams, professional, semi-pro, amateur, personal trainer, sport nutrition, DISC, personality test, athlete performance, baseball, basketball, football, hockey, soccer, lacrosse, Frisbee ultimate, tennis, swimming, try-out, college`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sportconsulting.ca`,
        short_name: `sportconsulting`,
        start_url: `/`,
        background_color: `#1171b7`,
        theme_color: `#1171b7`,
        display: `minimal-ui`,
        icon: `src/images/logo_sq.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
