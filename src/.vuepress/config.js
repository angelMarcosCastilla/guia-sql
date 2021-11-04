const { description } = require("../../package");

module.exports = {
  dest: "docs",
  base: "/guia-sql/",
  title: "Guía básica de SQL",
  locales: {
    "/": {
      lang: "es-ES",
    },
  },

  description:
    "Guía basica para aprender los basico del gestor de base de datos SQL server",
  head: [
    ["meta", { name: "theme-color", content: "#174EA6" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  markdown: {
    lineNumbers: false,
  },

  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Repositorio",
        link: "https://github.com/angelMarcosCastilla/guia-sql",
      },
    ],
    sidebar: [
      "/",
      "/guias/",
      "/consultas-ddl/",
      "/consultas-dml/",
      "/consultas-avanzadas/",
      "/extras/",
      "/practica/",
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
