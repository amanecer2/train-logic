(function () {
    'use strict';
    class wnTodo {
        constructor(wnTodoService) {
            this.todo = '';
            this.wnTodoService = wnTodoService;
        }

        $onInit() {
        }

        $onChanges(change) {
        }

        toggleCompleted(todo){

            this.wnTodoService.toggleCompleted(todo).then(x=>{
                console.log("todo toggled", todo);
            })
        }
        removeTodo(todo){
            this.wnTodoService.removeTodo(todo).then(x=>{
                this.onRemove({data: todo});
            })
        }
    }
    angular.module('wnTodo', [])
        .component('wnTodo', {
            template: `
              <li ng-class="{completed: $ctrl.todo.isComplete}">
                <div class="view">
                    <input class="toggle" ng-model="$ctrl.d" type="checkbox" ng-change="$ctrl.toggleCompleted($ctrl.todo)" >
                    <label>{{$ctrl.todo.todo}}</label>
                    <button ng-click="$ctrl.removeTodo($ctrl.todo)" class="destroy"></button>
                </div>
              </li>  
            `,
            controller: ['wnTodoService', wnTodo],
            bindings: {
                todo: '<',
                onUpdate: '&',
                onRemove: '&'
            }
        });
})();