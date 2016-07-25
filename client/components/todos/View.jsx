var React = require('react');
var TodosList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.setState({data: [{id: 2, content: 'and another fake todo'}, {id: 1, content: 'this is a fake todo'}]});
  },
  render: function() {
    return (
      <div className="todos-view">
        <TodosList data={this.state.data} />
      </div>
    );
  }
});
