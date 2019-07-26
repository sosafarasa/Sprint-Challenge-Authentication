
const jwtKey =
  process.env.JWT_SECRET ||
  'Secrets are not meant to be shared, so keep em!';

module.exports = jwtKey;