"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterFind(ads) {
      // const res = await Promise.all(
      //   ads.map(async (ad) => strapi.services.ad.checkAd(ad.url))
      // );
      // console.log(res);
      // res.filter((isValid, index) => {
      //   ads[index] = isValid ? ads[index] : undefined;
      // });
    },
  },
};
