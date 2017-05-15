angular.module("demoApp").service('userService', function(){
  var collection = [
    {firstName: 'Ben', lastName: 'Comley'},
    {firstName: 'Claes', lastName: 'Enlund'},
    {firstName: 'Andy', lastName: 'Carnahan'}
  ];
  return {
    users: function(){
      return collection;
    },
    add: function(object){
      collection.push(object);
    }
  }
});
