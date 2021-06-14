"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async set(state) {
    try {
      return strapi.services.lock.update({ name: "ad" }, { isblocked: state });
    } catch (err) {
      console.log("[ERROR-LOCK]", err);
      return null;
    }
  },
};
