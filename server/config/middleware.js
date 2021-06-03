const isProd = process.env.NODE_ENV === "production";

module.exports = {
  settings: {
    cors: {
      enabled: false,
      origin: "*",
      headers: "*",
      // origin: isProd ? [process.env.FRONT_URL] : ["*"],
    },
  },
};
