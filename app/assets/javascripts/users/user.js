app = angular.module('hcma');

app.controller('UsersCtrl', [
'$scope', '$state', 'User',
function($scope, $state, User){
  $scope.user = User.user;
  $scope.genders = ['Male', 'Female'];

  $scope.addUser = function(){
    User.create($scope.user);
  };
}]);

//User factory to create and show registrations
app.factory('User',['$http', '$state', function($http, $state){
  User = {user:{}};

  User.create = function(user){
    $http.post('/newsletter_subscriptions.json', user).success(function(data){
      $state.go('showDetails', {id : data.id });
    });
  }

  User.show_details = function(id){
    $http.get('/newsletter_subscriptions/'+ id + '.json')
    .success(function(data){
      angular.copy(data, User.user);
    });

  }

  return User;
}]);
