var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="todo">
        <span className="todo-text">{this.props.content}</span>
      </li>
    );
  }
});
