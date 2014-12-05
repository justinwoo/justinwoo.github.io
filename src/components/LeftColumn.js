var React = require('react');

var LeftColumn = React.createClass({
  render: function () {
    var myInfo = this.props.myInfo.map(function (a) {
      return (
        <li className={a.className} key={a.className}>
          <i className={a.className + '-icon'}/>
          {a.outlet}
        </li>
      );
    });
    return (
      <div className="left-column">
        <img
          className="avatar"
          src="https://avatars1.githubusercontent.com/u/2396926?v=3&amp;s=460"
        />
        <div className="my-roles">
          <span className="my-name">Justin Woo</span>
          <span className="my-description">Developer</span>
        </div>
        <ul className="my-info">
          {myInfo}
        </ul>
        {this.props.announcement}
      </div>
    );
  }
});

module.exports = LeftColumn;
