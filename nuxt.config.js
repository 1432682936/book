module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '简书' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/1.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css','~/assets/css/font-awesome.css','~/assets/css/font-awesome.min.css','~/assets/css/animate.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
