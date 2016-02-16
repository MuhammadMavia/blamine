angular.module('starter', ['ionic', 'ionic.rating'])
  .run(function ($ionicPlatform, $rootScope, $state) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
    $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromState, fromParams) {
        if (toState.url === "/list") {
          event.preventDefault();
          $state.go("app.list.all")
        }
        else if (toState.url === "/search") {
          event.preventDefault();
          $state.go("app.search.favorite")
        }
      })
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.search.favorite', {
        url: '/favorite',
        views: {
          'searchContent': {
            templateUrl: 'templates/favorite-interpreter.html'
          }
        }
      })

      .state('app.search.featured', {
        url: '/featured',
        views: {
          'searchContent': {
            templateUrl: 'templates/featured-interpreter.html'
          }
        }
      })

      .state('app.list', {
        url: '/list',
        views: {
          'menuContent': {
            templateUrl: 'templates/list.html'
          }
        }
      })
      .state('app.list.all', {
        url: '/all',
        views: {
          'listContent': {
            templateUrl: 'templates/all.html'
          }
        }
      })
      .state('app.list.online', {
        url: '/online',
        views: {
          'listContent': {
            templateUrl: 'templates/online.html'
          }
        }
      })
      .state('app.list.offline', {
        url: '/offline',
        views: {
          'listContent': {
            templateUrl: 'templates/offline.html'
          }
        }
      })
      .state('profile', {
        url: '/profile',
        abstract: true,
        templateUrl: 'templates/profile.html'
      })
      .state('profile.profile-1', {
        url: '/profile-1',
        views: {
          'profileContent': {
            templateUrl: 'templates/profile-1.html'
          }
        }
      })
      .state('profile.profile-2', {
        url: '/profile-2',
        views: {
          'profileContent': {
            templateUrl: 'templates/profile-2.html'
          }
        }
      })
      .state('payment-method', {
        url: '/payment-method',
        templateUrl: 'templates/payment-method.html',
        controller: 'yourCtrl'
      })
      .state('review', {
        url: '/review',
        templateUrl: 'templates/review.html',
        controller: 'yourCtrl'
      })
      .state('confirm-payment', {
        url: '/confirm-payment',
        templateUrl: 'templates/confirm-payment.html',
        controller: 'yourCtrl'
      })
      .state('login-1', {
        url: '/login-1',
        templateUrl: 'templates/login-1.html'
      })
      .state('login-2', {
        url: '/login-2',
        templateUrl: 'templates/login-2.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html'
      })
      .state('call', {
        url: '/call',
        templateUrl: 'templates/call.html',
        controller: 'yourCtrl'
      })
      .state('calling', {
        url: '/calling',
        templateUrl: 'templates/calling.html'
      });
    $urlRouterProvider.otherwise('/login-1');
    $ionicConfigProvider.tabs.position('bottom');

  })
  .controller('yourCtrl', function ($scope, $state, $timeout) {
    $scope.rate = 4;
    $scope.max = 5;
    $scope.showMessage = function () {
      $scope.msgContent = !$scope.msgContent;
    };
    $scope.calling = function () {
      $state.go("calling");
      $timeout(function () {
        $state.go("call");
      },3000)
    }
  });
