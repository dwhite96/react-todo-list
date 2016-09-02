var React = require('react');
var Todo = require('./Todo.jsx');

module.exports = React.createClass({
  render: function() {
    var todos = this.props.data.data.map(function(todo) {
      return (
        <Todo key={todo.id} content={todo.attributes.title} author={todo.relationships.user.data} />
      )
    });

    return (
      <ul className="todos-list">
        {todos}
      </ul>
    );
  }
});
