'use strict';

/**
 * session configs
 */
export default {
  name: 'thinkjs',
  type: 'file',
  secret: 'R5MG6)DT',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.RUNTIME_PATH + '/session',
    }
  }
};