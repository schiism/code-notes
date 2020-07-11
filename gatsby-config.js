module.exports = {
  siteMetadata: {
    title: 'Random notes',
    description: `Random snippets I'll probably use again`,
    author: 'Marco',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: true,
        showDescriptionInSidebar: true,
      },
    },
  ],
}
