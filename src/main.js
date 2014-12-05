var React = require('react');
var Application = require('./components/Application');

var myInfo = [{
  className: 'location',
  outlet: <a href="http://goo.gl/pWEQis">Washington DC</a>
}, {
  className: 'email',
  outlet: <a href="mailto:justin@gohome.club">justin@gohome.club</a>
}, {
  className: 'github',
  outlet: <a href="https://github.com/kimagure">kimagure</a>
}, {
  className: 'twitter',
  outlet: <a href="https://twitter.com/jusrin00">@jusrin00</a>
}, {
  className: 'qiita',
  outlet: <a href="http://qiita.com/kimagure">Qiita</a>
}, {
  className: 'speakerdeck',
  outlet: <a href="https://speakerdeck.com/kimagure">Speakerdeck</a>
}];

var announcement = (
  <div className="announcement">
    <p>
      Live in the DC area? Cool, let's
      <a href="mailto:moomoowoo@gmail.com"> hang out. </a>
    </p>
    <p>
      私の日本語は下手ですが、チャットしたかっらぜひ
      <a href="mailto:moomoowoo@gmail.com">連絡</a>
      してください。
    </p>
  </div>
)

var welcomeMessage = (
  <h1 className="welcome-message">
    Welcome to my home page in 帰宅.部!
  </h1>
);

var messageBody = (
  <div className="message-body">
    <p>
      Please see the information on the left.
    </p>
  </div>
)

React.render(
  <Application
    myInfo={myInfo}
    announcement={announcement}
    welcomeMessage={welcomeMessage}
    messageBody={messageBody}
  />,
  document.body
);
