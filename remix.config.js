/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const db = require('./models');
//const route = require('./router/routes');
const { createRequestHandler } = require('@remix-run/express');
const express = require('express');
const expressApp = express();
var bodyParser = require('body-parser');
//const route =require ('./app/routes')
const route = require ('./routes/routes');
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
//body parser
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({
    extended: true
}));
expressApp.use('/api_V1',route(express)
);


const PORT = process.env.PORT || 3002;
expressApp.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
