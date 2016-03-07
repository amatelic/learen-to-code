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

// import Application from './modules/application';
//
// var app = new  Application({
//   container: 'body',
//   onLoad: _ =>  'sorry problems with internet',
// });
(function() {
  function Todo() {
    this.todos = [];
  }

  Todo.prototype.add = function(title) {
    this.todos.push({title: title, done: false});
  };

  Todo.prototype.remove = function() {

  };

  Todo.prototype.complited = function() {
    return this.todo.reduce(function(prev, next, index) {
      return 5;
    });
  };

  function View(el) {
    this.$el = $(el);
    this.todoInput = $('.tasks__add').find('input');
    this.button = $('.tasks__add').find('button');
    this.addEvents();
    this.count = 3;
  }

  View.prototype.addEvents = function() {
    this.button.on('click', function(e) {
      var title = this.todoInput.val();
      if (title.length > 0) {
        this.addTodo(title, ++this.count);
      }
    }.bind(this));

    this.$el.on('click', '.delete', function(e) {
      $(e.target).closest('.tasks__item').remove();
    });

    this.$el.on('click', 'input:checkbox', function(e) {
      if (e.target.checked) {
        $('.tasks__info').html('Complited taks: 1');
      } else {
        $('.tasks__info').html('Complited taks: 0');
      }
    });
  };

  View.prototype.addTodo = function(title, hash) {
    console.log(this.$el);
    this.$el.append(`
      <li class="tasks__item">
        <div class="tasks__checkbox">
          <input type="checkbox" value="0" id="checkboxFourInput${hash}" name="" />
          <label for="checkboxFourInput${hash}"></label>
        </div>
        ${title}
        <button class="tasks__button delete">Delete</button>
      </li>
    `);
  };
  var todoView = new View('.tasks');
})();
