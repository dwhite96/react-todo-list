var React = require('react');
var TodosList = require('./List.jsx');

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
  render: function() {
    return (
      <div className="todos-view">
        <TodosList data={this.state.data} />
      </div>
    );
  }
});
