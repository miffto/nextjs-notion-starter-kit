module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'c2b5d7a47c0144978c514998cbb3d03f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'もふもふハウス',
  domain: '',
  author: 'miffto',

  // open graph metadata (optional)
  description: '子育てや日常を漫画で描くnotionブログ',
  socialImageTitle: 'もふもふハウス',
  socialImageSubtitle: 'もふもふハウス',

  // social usernames (optional)
  twitter: '',
  github: 'miffto',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'miffto/nextjs-notion-starter-kit',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
     'Blog': '2b3f212117dd4caf9ccb9323d3bed4c4'
   },

  pageUrlOverrides: null
}
