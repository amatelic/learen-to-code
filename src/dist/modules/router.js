// window.history.back();
// window.history.forward();
// window.history.go();
// history.pushState(stateObj, "page 2", "bar.html");
import {isFunction} from './helpers';

export default class Router {
  constructor() {
    this.routes = {};
  }

  map(callback) {
    this.isNested = false;
    callback.call(this);

  }

  toggleNested() {
    this.isNested = !this.isNested;
  }

  route(name, options) {
    if (!name) throw new Error('The route name is not defined');

    if (isFunction(options)) {
      this.nestedRoot = name;
      this.toggleNested();
      options.call(this);
      this.toggleNested();
    }

    if (this.isNested) {
      this.routes[`${this.nestedRoot}.${name}`] = { name: name };
      return this;
    }

    this.routes[name] = { name: name };

  }
}
