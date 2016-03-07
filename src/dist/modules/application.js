import Router from './router';

export default class Application {
    constructor() {
      Object.assign(this, ...arguments);
      this.route = new Router();
      // new Proxy({}, {})

      this.route.map(function() {
        this.route('users', function() {
          this.route('anze', {path: 'test/:id'});
          this.route('matej', {path: 'test/:id'});
        });
        this.route('about', {path: 'test/:id'});
      });

      console.log(this.route);
    }
}
