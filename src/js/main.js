// load styling with webpack
require('../sass/index.scss');

var React = require('react');
var Application = require('./components/Application');
var EtchSketch = require('kimagure-etch-sketch');

var myInfo = [{
  className: 'location',
  outlet: '✈・旅行中'
}, {
  className: 'email',
  outlet: <a href="mailto:justin@gohome.club">justin@gohome.club</a>
}, {
  className: 'github',
  outlet: <a href="https://github.com/justinwoo">justinwoo</a>
}, {
  className: 'twitter',
  outlet: <a href="https://twitter.com/jusrin00">@jusrin00</a>
}, {
  className: 'qiita',
  outlet: <a href="http://qiita.com/kimagure">Qiita</a>
}, {
  className: 'speakerdeck',
  outlet: <a href="https://speakerdeck.com/justinwoo">Speakerdeck</a>
}];

var announcement = (
  <div className="announcement">
    <p>
      I'm periodically in DC, so please
      <a href="mailto:moomoowoo@gmail.com"> drop me a line </a>
      if you want to hang out! (No recruiters, please.)
    </p>
    <p>
      私の日本語は下手ですが、チャットしたかったらぜひ
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
    <p>
      I will not entertain any employment opportunities in the Washington metro/DMV
      area, so please stop e-mailing me about them.
    </p>
    <p>
      Play with my Etch a Sketch here: (press ? for help)
      <EtchSketch bindWindow={true} className="my-etch-sketch"/>
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
