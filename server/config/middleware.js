const isProd = process.env.NODE_ENV === "production";

module.exports = {
  settings: {
    cors: {
      enabled: isProd,
      origin: isProd ? [process.env.FRONT_URL] : ["*"],
    },
  },
};
