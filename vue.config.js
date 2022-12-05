const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  publicPath: "",
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                @import "./src/styles/imports/_colors.scss";
            `,
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },
});
