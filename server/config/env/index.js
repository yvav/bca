import path from 'path';

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`); // eslint-disable-line import/no-dynamic-require
const credentials = require('./credentials');

config.db = `${credentials.login}:${credentials.password}@${credentials.dbUrl}`;

const defaults = {
  root: path.join(__dirname, '/..')
};

export default Object.assign(defaults, config);
