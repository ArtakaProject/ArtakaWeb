const config = {
<<<<<<< HEAD
    domain : 'https://artaka-api.com/api',
=======
    domain : 'https://artaka-api.com',
    login :  'https://artaka-api.com/api/subscriber',
>>>>>>> 7146a8eb19eff6357e13647235cab0f091259fa4
    urlImage : 'http://localhost:3001/artaka/api/product/images',
    domainAuth : 'http://localhost:3001/artaka/auth/',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key"
  }
  
  export default config