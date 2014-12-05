var React = require('react');
var LeftColumn = require('./LeftColumn');

var Application = React.createClass({
  render: function () {
    return (
      <div className="right-column">
        <h1 className="welcome-message">
          {this.props.welcomeMessage}
        </h1>
        {this.props.messageBody}
      </div>
    );
  }
});

module.exports = Application;
