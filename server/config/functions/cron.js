"use strict";
const subMonths = require("date-fns/subMonths");
/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

module.exports = {
  // Every 5 minutes this task will scrape new ads
  "*/5 * * * *": {
    task: async () => {
      console.log("---- Start scraping:");
      await strapi.services.ad.scrape();
      console.log("---- End scraping");
    },
  },
  // Every day at 3am this task will remove ads older than 3 months
  "0 3 * * *": {
    task: async () => {
      const date = subMonths(new Date(), 1);
      const deleted = [];
      const ads = await strapi.services.ad.find({ date_lte: date }, []);

      console.log("---- Start removing old ads:", ads.length);
      await Promise.all(
        ads.map((ad) =>
          strapi.services.ad.delete({ id: ad.id }, []).then((res) => {
            deleted.push(res);
          })
        )
      );
      console.log("---- End removing", deleted.length, "ads deleted");
    },
  },
};
