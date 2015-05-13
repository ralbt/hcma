// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require angular
//= require angular-rails-templates
//= require angular-ui-router
//= require checklist-model
//= require_self
//= require_tree .

var app = angular.module('hcma', ['ui.router', 'templates', 'checklist-model']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('userRegistration');
  $stateProvider
    .state('userRegistration',  {
      url: '/userRegistration',
      templateUrl: 'assets/users/_registration.html',
      controller: 'UsersCtrl'
    })
    .state('showDetails',  {
      url: '/show/:id',
      templateUrl: 'assets/users/_show.html',
      controller: 'UsersCtrl',
      resolve: {                     //Promise to fetch data from DB
        promiseObj: function($stateParams, User){
          return User.show_details($stateParams.id);
        }
      }
    });

}]);
