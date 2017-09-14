(function () {
    'use strict';

    class wnTodoService {
        constructor($q) {
            this.todos = [
                new TodoModal({id: 0, todo: 'milke', isComplete: false}),
                new TodoModal({id: 1, todo: 'milke1', isComplete: false})
            ];
            this.$q = $q;
        }

        getTodos() {
            const d = this.$q.defer();
            d.resolve(this.todos);
            return d.promise;
        }

        addTodo(newTodo) {
            const todo = new TodoModal({id: this.todos.length, todo: newTodo, isComplete: false})
            this.todos.push(todo);
            const d = this.$q.defer();
            d.resolve(this.todos);
            return d.promise;
        }

        removeTodo(removeTodo) {
            this.todos = this.todos.filter(todo => {
                    return todo.id !== removeTodo.id
                }
            );
            const d = this.$q.defer();
            d.resolve(this.todos);
            return d.promise;
        }

        toggleCompleted(todoToggled) {
            this.todos = this.todos.map(todo => {
                if (todo.id === todoToggled.id) {
                    todo.isComplete = !todoToggled.isComplete;
                }
                return todo;
            });
            const d = this.$q.defer();
            d.resolve(this.todos);
            return d.promise;
        }

        clearComplete(){
            this.todos = this.todos.filter(todo => !todo.isComplete);
            const d = this.$q.defer();
            d.resolve(this.todos);
            return d.promise;
        }
    }
    wnTodoService.$inject = ['$q'];
    angular
        .module('wnTodoService', [])
        .factory('wnTodoService', wnTodoService);
})();