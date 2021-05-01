module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '73e2ad215acd5b4ccaa0b40aa1fbb9e2'),
    },
  },
});
