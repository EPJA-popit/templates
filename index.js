// const app = require('express')();

function applyHbs(app) {
  const hbs = require("express-hbs");

  app.engine("hbs", hbs.express4({}));
  app.set("view engine", "hbs");
  app.set("views", __dirname + "/views");

  hbs.registerHelper("toJSON", (obj) => {
    if (typeof obj === "object") {
      return JSON.stringify(obj);
    }
    return obj;
  });
}

module.exports = applyHbs;

// app.get('/', (req, res) => {
//   res.render('index', {
//     staticUrl: '/static',
//     fireAppVersion: '1.0.0',
//     apps: {
//       foo: {
//         version: '1.0.0',
//         name: 'foo'
//       }
//     },
//     navigation: {
//       'dummy.main': '/dummy',
//       'dummy.login': '/dummy/login',
//     },
//     config: {},
//     title: 'Popit app',
//   })
// });

// applyHbs(app)
// app.listen(5000, () => {
//   console.log(`❤️❤️❤️  Server started listening on http://localhost:5000  ❤️❤️❤️`);
// });
