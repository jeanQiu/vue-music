const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("_c", resolve("src/components"))
      .set("api", resolve("src/api"))
      .set("libs", resolve("src/libs"));
  }
};
