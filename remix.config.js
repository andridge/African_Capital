/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const db = require('./models');
//const route = require('./router/routes');
const { createRequestHandler } = require('@remix-run/express');
const express = require('express');
const expressApp = express();
//const route =require ('./app/routes')

module.exports = {
  ignoredRouteFiles: ['**/.*'],
  tailwind: true,
  getRequestHandler() {
    return createRequestHandler({ getLoadContext });
  },
  expressMiddleware: (app) => {
    // Mount the Express app onto the Remix server
    app.use(expressApp);
  },
};
 // Perform database synchronization
 db.sequelize.sync({ force: true }).then(() => {
  console.log("Database synchronized successfully");
}).catch(error => {
  console.error("Error synchronizing database:", error);
});
expressApp.use('/api_V1',(req, res) => {
  res.json({ message: 'Hello from Express!' });
});

const PORT = process.env.PORT || 3002;
expressApp.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
