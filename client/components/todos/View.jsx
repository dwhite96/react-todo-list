var React = require('react');
var TodosList = require('./List.jsx');
var TodosForm = require('./Form.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: {data: []}};
  },
  componentDidMount: function() {
    this.readTodosFromAPI();
  },
  readTodosFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/todos', function(todos) {
      this.setState({data: todos});
    }.bind(this));
  },
  writeTodoToAPI: function(data) {
    this.props.writeToAPI('post', this.props.origin + '/todos', data, function(todo) {
      var todos = this.state.data;
      todos.data.pop();
      todos.data.push(todo.data);
      this.setState({data: todos});
    }.bind(this));
  },
  optimisticUpdate: function(todo) {
    var todos = this.state.data;
    // Build currentUser data that can be rendered by TodosList.jsx:
    var currentUser = {user: {data: this.props.currentUser.data.attributes.handle}};
    todo["relationships"] = currentUser
    todos.data.push(todo);
    this.setState({data: todos});
  },
  render: function() {
    return (
      <div className="todos-view">
        <TodosForm writeTodoToAPI={this.writeTodoToAPI} optimisticUpdate={this.optimisticUpdate} currentUser={this.props.currentUser} signedIn={this.props.signedIn} />
        <TodosList data={this.state.data} />
      </div>
    );
  }
});
