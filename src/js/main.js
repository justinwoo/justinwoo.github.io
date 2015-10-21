// load styling with webpack
require('../sass/index.scss');

var React = require('react');
var Application = require('./components/Application');
var EtchSketch = require('kimagure-etch-sketch');

var myInfo = [{
  className: 'location',
  outlet: '✈・旅行中'
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
    I like to connect with folks, but e-mail just gets me sapmmed by recruiters.
    Please reach out on Twitter!
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
      I'm totally done with the Washington area. Don't spam me with offers from there.
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
