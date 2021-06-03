module.exports = ({ env }) => {
  const SSL = env.bool("POSTGRESQL_ADDON_SSL_SELF", false);
  const settings = {
    client: "postgres",
    host: env("POSTGRESQL_ADDON_HOST", "localhost"),
    port: env.int("POSTGRESQL_ADDON_PORT", 5432),
    database: env("POSTGRESQL_ADDON_DB", "strapi"),
    username: env("POSTGRESQL_ADDON_USER", "strapi"),
    password: env("POSTGRESQL_ADDON_PASSWORD", "strapi"),
    ssl: SSL && {
      rejectUnauthorized: SSL,
    },
  };
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings,
        options: {
          useNullAsDefault: true,
          pool: {
            min: 0,
            max: 50,
            idleTimeoutMillis: 30000,
            createTimeoutMillis: 30000,
            acquireTimeoutMillis: 30000,
          },
        },
      },
    },
  };
};
