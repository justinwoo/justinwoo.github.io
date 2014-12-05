var React = require('react');
var LeftColumn = require('./LeftColumn');

var Application = React.createClass({
  render: function () {
    return (
      <div className="right-column">
        {this.props.welcomeMessage}
        {this.props.messageBody}
      </div>
    );
  }
});

module.exports = Application;
