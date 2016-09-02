var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var content = this.refs.content.value.trim();
    if (!content) {return;}
    if (this.props.signedIn) {
      // optimisticUpdate is intended to render updated state without making a server roundtrip
      this.props.optimisticUpdate({id: 'fake-id', attributes: {title: content, completed: false}});
      this.props.writeTodoToAPI(JSON.stringify({todo: {title: content}}));
      this.refs.content.value = '';
      this.refs.content.blur();
    } else {
      alert('Please sign in to add todo!');
    }
  },
  render: function() {
    console.log(this.props.data)
    return (
      <form className="todos-form pure-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="add todo..." ref="content" />
        <button type="submit" className="pure-button pure-button-primary">Submit Todo</button>
      </form>
    );
  }
});
