var React = require('react');
var ReactRouter = require('react-router');
var App = require('../components/layout/App.jsx');
var View = require('../components/todos/View.jsx');
var AboutView = require('../components/static/AboutView.jsx');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={View} />
    <Route path="about" component={AboutView} />
  </Route>
);
