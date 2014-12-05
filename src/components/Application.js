var React = require('react');
var LeftColumn = require('./LeftColumn');
var RightColumn = require('./RightColumn');

var Application = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="columns">
          <LeftColumn
            myInfo={this.props.myInfo}
            announcement={this.props.announcement}
          />
          <RightColumn
            welcomeMessage={this.props.welcomeMessage}
            messageBody={this.props.messageBody}
          />
        </div>
      </div>
    );
  }
});

module.exports = Application;
