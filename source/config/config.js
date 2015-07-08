'use strict';

angular.module('sif')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/home/home.html',
      })
      .state('survey1', {
        url: '/survey1',
        templateUrl: '/views/home/survey1.html'
      })
      .state("survey2",{
        url:"/survey2",
        templateUrl: "/views/home/survey2.html"
      })
      .state("survey3",{
        url:"/survey3",
        templateUrl: "/views/home/survey3.html"
      });
      // .state('user.register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
      // .state('user.login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});
  });
