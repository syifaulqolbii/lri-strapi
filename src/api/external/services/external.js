'use strict';

/**
 * external service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::external.external');
