var React = require('react');

var LeftColumn = React.createClass({
  render: function () {
    return (
      <div className="left-column">
        <img
          className="avatar"
          height="230"
          src="https://avatars1.githubusercontent.com/u/2396926?v=3&amp;s=460"
          width="230"
        />
        <h2>Justin Woo</h2>
      </div>
    );
  }
});

module.exports = LeftColumn;
