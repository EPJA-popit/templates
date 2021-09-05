// const app = require('express')();
const hbs = require('express-hbs');

module.exports = function applyHbs(app) {
  app.engine('hbs', hbs.express4({}));
  app.set('view engine', 'hbs');
  app.set('views', __dirname + '/views');

  hbs.registerHelper('toJSON', (obj) => {
    if (typeof obj === 'object') {
      return JSON.stringify(obj)
    }
    return obj
  });
}
 
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
//     navigations: {
//       'dummy.main': '/dummy',
//       'dummy.login': '/dummy/login',
//     },
//     config: {},
//     title: 'Popit app',
//   })
// }); 

// app.listen(5000, () => {
//   console.log(`❤️❤️❤️  Server started listening on http://localhost:5000  ❤️❤️❤️`);
// });