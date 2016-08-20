var React = require('react');
var Reqwest = require('reqwest');
var TodosView = require('../todos/View.jsx');
var Menu = require('./Menu.jsx');
var ReactRouter = require('react-router');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  getInitialState: function() {
    return {showMenu: false};
  },
  handleMenuClick: function() {
    this.setState({showMenu: !this.state.showMenu});
  },
  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },
  render: function () {
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div id="app" className={menu}>
        <Menu sendMenuClick={this.handleMenuClick} />
        <div id="content">
          {this.props.children && React.cloneElement(this.props.children, {origin: this.props.origin, readFromAPI: this.readFromAPI})}
        </div>
      </div>
    );
  }
});
