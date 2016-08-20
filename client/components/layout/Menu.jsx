var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

module.exports = React.createClass({
  render: function() {
    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">Todo List</span>
            <ul>
              <li><IndexLink to={"/"}>Todos</IndexLink></li>
              <li><Link to={"about"}>About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
