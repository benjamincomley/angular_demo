(function () {
  'use strict';
  angular
    .module("demoApp")
    .service('userService', userService);

  function userService() {
    var collection = [
      {firstName: 'Ben', lastName: 'Comley'},
      {firstName: 'Claes', lastName: 'Enlund'},
      {firstName: 'Andy', lastName: 'Carnahan'}
    ];

    return {
      users: function() {
        return collection;
      },
      add: function(object) {
        collection.push(object);
      }
    }
  };
})();
