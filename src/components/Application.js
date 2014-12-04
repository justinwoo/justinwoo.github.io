var React = require('react');
var LeftColumn = require('./LeftColumn');
var RightColumn = require('./RightColumn');

var Application = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="columns">
          <LeftColumn/>
          <RightColumn/>
        </div>
      </div>
    );
  }
});

module.exports = Application;
