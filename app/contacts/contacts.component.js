(function () {
    'use strict';
    class tlContacts {
        constructor(tlContactService) {
            this.tlContactService = tlContactService;
            this.contacts = [];
        }

        $onInit() {
            this.tlContactService.getContacts().then(contacts=>{
                this.contacts = contacts;
            })
        }

        $onChanges(change) {}

    }
    angular.module('tlContacts', [])
        .component('tlContacts', {
            template: `
                    <section>
                        <h1>hello worlldldld</h1>
                        <tl-contact ng-repeat="contact in $ctrl.contacts" contact="contact"></tl-contact>
                    </section>          
            `,
            controller: ['tlContactService', tlContacts]
        });
})();