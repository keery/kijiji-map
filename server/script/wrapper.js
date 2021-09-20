const strapiLib = import("strapi");

const start = async () => {
  const instance = await strapiLib;
  await instance
    .default()
    .load()
    .then(async (strapi) => {
      // strapi.services.ad.scrape();
      // console.log("start");
      // const adsToUpdate = await strapi.connections.default.raw(
      //   `UPDATE ads SET city = ${757} WHERE id = ${40009}`
      // );
      // console.log("over");
      // return;
      const res = await strapi.connections.default.raw(
        "SELECT name, COUNT(name) FROM cities GROUP BY name HAVING COUNT(name)>1"
      );

      for (let index = 0; index < res.rows.length; index++) {
        const { name, count } = res.rows[index];

        if (count === "2") {
          const res = await strapi.connections.default.raw(
            `SELECT * FROM cities WHERE name = '${name.replace("'", "''")}'`
          );

          if (name !== "Montréal") continue;

          console.log(name, " : ");
          const sortedList = res.rows.sort((a, b) => (a.id > b.id ? -1 : 1));
          const last = sortedList[0];
          const toChange = sortedList[1];

          // Modifier annonces
          const adsToUpdate = await strapi.connections.default.raw(
            `SELECT * FROM ads WHERE city = ${toChange.id}`
          );
          console.log(adsToUpdate.rows.length, `resultats trouvés pour`, name);

          for (let indexe = 0; indexe < adsToUpdate.rows.length; indexe++) {
            const ad = adsToUpdate.rows[indexe];
            console.log("Modification de ", ad.id, "vers", last.id);
            await strapi.connections.default.raw(
              `UPDATE ads SET city = ${last.id} WHERE id = ${ad.id}`
            );
          }
          //Fin annonces
        }
      }
    });
};

start();
