import path from "path";

module.exports = {
  webpack: {
    alias: {
      app: path.resolve(__dirname, "src/app"),
      img: path.resolve(__dirname, "src/assets/img"),
    },
  },
};
