module.exports = {
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: 'Meta description' }
          ],
        script: [
            { src: '~assets/js/materialize.js' }
        ],
        link: [
            { rel: 'stylesheet', href: '~assets/css/materialize.css' }
        ]
    },
    css: [
        '~assets/css/materialize.css'
    ],
    script: [
        { src: '~assets/js/materialize.js' }
    ],
}