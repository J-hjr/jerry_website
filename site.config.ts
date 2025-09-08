import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1d36b9977e5e80e6b48df3619db2f1c1',
  // rootNotionPageId: '2246b9977e5e80c28de3cbd9f854c9d6',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Jerry Huang',
  domain: 'jerryhjr.space',
  author: 'Jerry Huang',

  // open graph metadata (optional)
  description: 'My Website',

  // social usernames (optional)
  twitter: 'transitive_bs',
  github: 'J-hjr',
  linkedin: 'jerry-huang-jh8186',
  instagram: 'itsnotjerryh',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/GenRec4Music': '1db6b9977e5e80888b40fa5178080f7c',
    '/spotify-song-popularity-analysis': '1d36b9977e5e80bea714fa87dbfb914d',
    '/yelp-dataset-analysis': '1d66b9977e5e8019ba65da9e9fcf2b76',
    '/my-music-playground': '1d36b9977e5e8045a9a7f632b83e1a6c',
    '/smons-nyc': '1d36b9977e5e80df911fe335c05699db',
    '/internship-at-irc': '2246b9977e5e80c28de3cbd9f854c9d6',
    '/Summer-Internship-RVNG': '2246b9977e5e81f98a42f778cd3332c9',
    '/Returning-Fall-Internship-RVNG': '25a6b9977e5e802289bbf3efc3659274',
    '/Professional-experience-gallery': '2246b9977e5e81cd8007000ce9a4ba6d',
    '/Project-experience': '1d36b9977e5e802d9ed8000cbc381b20',
    '/new-LOrk': '22f6b9977e5e80e78debf6656bfc8988',
    '/music-therapy-research': '2346b9977e5e807cb9f9d6fdfda7e420',
    '/Music-Festival-at-nonelsesays': '2536b9977e5e80529bc6f38c4146618f',
    '/cashflow-forecasting': '2556b9977e5e80a3aeedd5a4e237ac54',
    '/did': '25d6b9977e5e80999e6fcd7a23178446',
    '/nyu-fingerstyle-club': '2606b9977e5e80dfa3e2de8dd012d64c',
    '/terminal-5': '2606b9977e5e80e0ac5bff4660c6ee40',
    '/band-competition-at-mercury-lounge': '2606b9977e5e808c985ee2ded72b3085',
    '/gig-gallery': '2616b9977e5e81f899a1000c2073474d',
    '/research-assistant-at-nyu-david-poeppl': '2636b9977e5e80f7bdd9f5b0b320ad78',
    '/spotify-genre-classification-model': '2676b9977e5e80079c59dd96e8f34b13'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '1d36b9977e5e80e6b48df3619db2f1c1'
    },
    {
      title: 'Music',
      pageId: '1d36b9977e5e8045a9a7f632b83e1a6c'
    },
    // {
    //   title: 'Projects',
    //   pageId: ''
    // }
  ]
})
