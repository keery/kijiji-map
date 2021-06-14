const strapiLib = import("strapi");

const start = async () => {
  const instance = await strapiLib;
  await instance
    .default()
    .start()
    .then(async (strapi) => {});
};

start();
