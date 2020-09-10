// jshint esversion:7

module.exports = app => {   
   app.get(`/login`, (req, res) => {
      res.render(`./../views/user/login.views.ejs`);
   });

   app.get(`/register`, (req, res) => {
      res.render(`./../views/user/register.views.ejs`);
   });

   app.get(`/forgotPassword`, (req, res) => {
    res.render(`./../views/user/forgotPassword.views.ejs`);
 });
};