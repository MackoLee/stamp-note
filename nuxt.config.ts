// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    ssr: false,
    devtools: {enabled: true},
    app: {
        cdnURL: 'https://mackolee.github.io/stamp-note/',
        buildAssetsDir: './',
    },
    dir:{
        public: 'public',

    },

    modules: [
        'nuxt-typed-router',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxthq/ui',
        'nuxt-lodash',
        'nuxt-icon'
    ],
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
            // @TODO: list all vuetify options
        },

        moduleOptions: {
            /* nuxt-vuetify module options */
            treeshaking: true,
            useIconCDN: true,

            /* vite-plugin-vuetify options */
            styles: true,
            autoImport: true,
            useVuetifyLabs: true,
        }
    },
    lodash: {
        prefix: "_",
        prefixSkip: ["string"],
        upperAfterPrefix: false
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    sourceMap: true,
                    additionalData: `@import '~/style/index.scss';`
                }
            }
        }
    }

})

