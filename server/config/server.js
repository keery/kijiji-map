module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  cron: {
    enabled: env.bool("ENABLE_CRON", true),
  },
  url: env("BASE_URL", "/"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9e3df40dee2b9c9aa36404d215962f8d"),
    },
  },
});
