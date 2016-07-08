'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: 'localhost',
      port: '',
      database: 'blog',
      user: 'root',
      password: 'S691018',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};