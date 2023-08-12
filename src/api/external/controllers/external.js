'use strict';

/**
 * external controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::external.external');
