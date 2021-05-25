module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    url: '/dashboard',
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'g3htO2cwm3N__V6udSfSpf2EEPrKVYPd'),
    },
  },
});
