var React = require('react');
var TodosView = require('../todos/View.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="content">
        <TodosView/>
      </div>
    );
  }
});
