module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@star_wars/assets/scss/main.scss";`
        }
      }
    }
  };