(function () {
    'use strict';
    class wnTodos {
        constructor(wnTodoService) {
            this.todos = [];
            this.wnTodoService = wnTodoService;
        }

        $onInit() {
            this.wnTodoService.getTodos().then(todos => {
                this.todos = todos;
            })
        }

        $onChanges(change) {
        }

        onNewTodo(data) {
            this.wnTodoService.addTodo(data).then(x => {

            })
        }

        todoRemoved() {
            this.wnTodoService.getTodos().then(todos => {
                this.todos = todos;
            })
        }

        getTodosLeft(){
            return this.todos.filter(todo => !todo.isComplete).length;
        }

        clearComplete(){
            this.wnTodoService.clearComplete().then(nonComplete=>{
                this.todos = nonComplete;
            })
        }
    }
    angular.module('wnTodos', ['wnInput', 'wnTodo'])
        .component('wnTodos', {
            template: `
                    <section class="todoapp">
                        <header class="header">
                            <h1>ng todos</h1>
                        </header>
                        <wn-Input on-update="$ctrl.onNewTodo(data)"></wn-Input> 
                        <ul class="todo-list">                          
                               <wn-todo todo="todo" ng-repeat="todo in $ctrl.todos" on-remove="$ctrl.todoRemoved(data)"></wn-todo>                         
                        </ul>
                        <footer class="footer">
                            <span class="todo-count">{{$ctrl.getTodosLeft()}} items left</span>
                            <ul class="filters">
                                <li ng-if="$ctrl.todos.length" ng-click="$ctrl.clearComplete()">Clear all complete</li>
                            </ul>
                        </footer>
                    </section>          
            `,
            controller: ['wnTodoService', wnTodos]
        });
})();