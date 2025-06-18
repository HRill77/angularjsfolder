angular.module('todoApp')
// Storage Service (simulated localStorage)
        .service('StorageService', function() {
            var storage = {};

            this.get = function(key) {
                return storage[key];
            };

            this.set = function(key, value) {
                storage[key] = value;
            };

            this.remove = function(key) {
                delete storage[key];
            };
        })