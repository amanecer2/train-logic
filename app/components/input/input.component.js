(function () {
    'use strict';
    class wnInput {
        constructor() {
            this.todo = '';
        }

        $onInit() {
        }

        $onChanges(change) {
        }

        onKeyPress(event){
            if(event.key === 'Enter'){
                this.onUpdate({data: this.todo})
                this.todo = '';
            }
        }
    }
    angular.module('wnInput', [])
        .component('wnInput', {
            template: `
                    <input type="text" placeholder="What do we need to be done?" class="new-todo" ng-model="$ctrl.todo" ng-keypress="$ctrl.onKeyPress($event)"/>         
            `,
            controller: [wnInput],
            bindings: {
                onUpdate: '&'
            }
        });
})();