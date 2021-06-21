const strapiLib = import("strapi");

const start = async () => {
  const instance = await strapiLib;
  await instance
    .default()
    .load()
    .then(async (strapi) => {
      strapi.services.ad.scrape();
    });
};

start();
