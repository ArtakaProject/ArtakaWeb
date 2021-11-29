const config = {
    domain : 'https://artaka-api.com/',
    urlImage : 'https://artaka-api.com//product/images',
    domainAuth : 'https://artaka-api.com/auth/',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key"
  }
  
  export default config