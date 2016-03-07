// window.history.back();
// window.history.forward();
// window.history.go();
// history.pushState(stateObj, "page 2", "bar.html");


/**
 * TODO
 *  Comunication with other views
 *  Inforamtion about user
 *  pub sub  model
 *  worker help
 *  promise for asyns
 *  cycels - beforeInit init afterInit onChange onDestroy
 */

import Application from './modules/application';

var app = new  Application({
  container: 'body',
  onLoad: _ =>  'sorry problems with internet',
});
