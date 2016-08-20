require('./assets/app.css');
require('./assets/menu.css');
require('./assets/todos.css');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var routes = require('./config/routes.jsx');
var App = require('./components/layout/App.jsx');
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById("app"));
