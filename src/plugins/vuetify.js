import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      themes: {
        light: {
          primary: colors.green,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
          background: colors.white
        },
        dark: {
          primary: colors.green,
          background: "#222629",
        },
      },
  },
});
