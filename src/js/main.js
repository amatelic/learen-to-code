(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
(function () {
  function Todo() {
    this.todos = [];
  }

  Todo.prototype.add = function (title) {
    this.todos.push({ title: title, done: false });
  };

  Todo.prototype.remove = function () {};

  Todo.prototype.complited = function () {
    return this.todo.reduce(function (prev, next, index) {
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

  View.prototype.addEvents = function () {
    this.button.on('click', function (e) {
      var title = this.todoInput.val();
      if (title.length > 0) {
        this.addTodo(title, ++this.count);
      }
    }.bind(this));

    this.$el.on('click', '.delete', function (e) {
      $(e.target).closest('.tasks__item').remove();
    });

    this.$el.on('click', 'input:checkbox', function (e) {
      if (e.target.checked) {
        $('.tasks__info').html('Complited taks: 1');
      } else {
        $('.tasks__info').html('Complited taks: 0');
      }
    });
  };

  View.prototype.addTodo = function (title, hash) {
    console.log(this.$el);
    this.$el.append('\n      <li class="tasks__item">\n        <div class="tasks__checkbox">\n          <input type="checkbox" value="0" id="checkboxFourInput' + hash + '" name="" />\n          <label for="checkboxFourInput' + hash + '"></label>\n        </div>\n        ' + title + '\n        <button class="tasks__button delete">Delete</button>\n      </li>\n    ');
  };
  var todoView = new View('.tasks');
})();

},{}]},{},[1]);
