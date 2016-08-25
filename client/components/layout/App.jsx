var React = require('react');
var Reqwest = require('reqwest');
var TodosView = require('../todos/View.jsx');
var Menu = require('./Menu.jsx');
var ReactRouter = require('react-router');
var Uri = require('jsuri');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  getInitialState: function() {
    return {showMenu: false, signedIn: false, currentUser: {handle: ''}};
  },
  componentWillMount: function() {
    var jwt = new Uri(location.search).getQueryParamValue('jwt');
    if (!!jwt) {sessionStorage.setItem('jwt', jwt);}
  },
  componentDidMount: function() {
    if (!!sessionStorage.getItem('jwt')) {this.currentUserFromAPI();}
  },
  currentUserFromAPI: function() {
    this.readFromAPI(this.props.origin + '/set_user', function(user) {
      this.setState({signedIn: true, currentUser: user});
    }.bind(this));
  },
  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },
  handleMenuClick: function() {
    this.setState({showMenu: !this.state.showMenu});
  },
  render: function() {
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div id="app" className={menu}>
        <Menu origin={this.props.origin} sendMenuClick={this.handleMenuClick} signedIn={this.state.signedIn} />
        <div id="content">
          {this.props.children && React.cloneElement(this.props.children, {origin: this.props.origin, readFromAPI: this.readFromAPI, signedIn: this.state.signedIn})}
        </div>
      </div>
    );
  }
});
