require('../../dotenv/config');

const withImages = require('next-images');

module.exports = withImages({
  distDir: '../../dist/.next',
  env: {
    APOLLO_SERVER: process.env.APOLLO_SERVER,
  },
});
