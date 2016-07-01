'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: 'localhost',
      port: '',
      database: 'blog',
      user: 'root',
      password: 'S691018',
      prefix: 'think_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};