const isProd = process.env.NODE_ENV === "production";

module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: "*",
      headers: "*",
      // origin: isProd ? [process.env.FRONT_URL] : ["*"],
    },
  },
};
