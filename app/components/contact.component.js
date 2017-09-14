(function () {
    'use strict';
    class tlContact {
        constructor() {
            this.contact = {};
            this.showContacts = false;
            this.isNoContacts = false;
        }

        $onInit() {
        }

        $onChanges(change) {
            this.contact = change.contact.currentValue;
            if(change.contact.currentValue && angular.isUndefined(this.contact.contacts) ){
                this.isNoContacts = true;
            }
        }

        show () {
            this.showContacts = !this.showContacts;
            if(!this.showContacts || this.isNoContacts){
                this.onUpdate();
            }
        }
        hide () {
            this.showContacts = false;
        }
    }
    angular.module('tlContact', [])
        .component('tlContact', {
            template: `
                    <section class="space-left "> 
                                 <div ng-click="$ctrl.show()">
                                    {{$ctrl.contact.name}}
                                </div>
                            
                            <tl-contact 
                                ng-if="$ctrl.showContacts"                       
                                ng-repeat="contact in $ctrl.contact.contacts"
                                contact="contact"
                                on-update="$ctrl.hide()">                    
                            </tl-contact>
                    </section>          
            `,
            controller: [tlContact],
            bindings: {
                contact: '<',
                onUpdate: '&'
            }
        });
})();