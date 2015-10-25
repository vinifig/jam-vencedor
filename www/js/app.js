// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) {
  
  $ionicPlatform.registerBackButtonAction(function(e){
    ionic.Platform.exitApp();
  }, 100)
  $rootScope.respostas = [];
  $rootScope.addResp = function(index,value){
    $rootScope.respostas[index] = value;
    console.log($rootScope);
  }

  $ionicPlatform.ready(function() {
    $scope.$on('$ionicView.enter', function(){
      if (window.StatusBar) {
        StatusBar.overlaysWebView(true);
        StatusBar.styleBlackOpaque();
        if (ionic.Platform.isAndroid())
          StatusBar.backgroundColorByHexString("#D85CA8"); // AJUSTE DA COR SEGUINDO A GUIDELINE
        else if( ionic.Platform.isIOS() )
          StatusBar.backgroundColorByHexString("#D888B9"); // AJUSTE DA COR SEGUINDO EXEMPLOS DA INTERNET
      }    
    }); 

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    // SLIDES
    .state('app.intro', {
      url: '/intro',
      views: {
        'menuContent': {
          templateUrl: 'templates/slides/intro.html',
          controller: 'IntroCtrl'
        }
      }
    })
    .state('app.slide1', {
      url: '/slide1',
      views: {
        'menuContent': {
          templateUrl: 'templates/slides/slide1.html',
          controller: 'SlideOneCtrl'
        }
      }
    })
    .state('app.slide2', {
      url: '/slide2',
      views: {
        'menuContent': {
          templateUrl: 'templates/slides/slide2.html',
          controller: 'SlideTwoCtrl'
        }
      }
    })
    .state('app.slide3', {
      url: '/slide3',
      views: {
        'menuContent': {
          templateUrl: 'templates/slides/slide3.html',
          controller: 'SlideThreeCtrl'
        }
      }
    })
    .state('app.slide4', {
      url: '/slide4',
      views: {
        'menuContent': {
          templateUrl: 'templates/slides/slide4.html',
          controller: 'SlideFourCtrl'
        }
      }
    })
    .state('app.slide5', {
      url: '/slide5',
      views: {
        'menuContent': {
          templateUrl: 'templates/slides/slide5.html',
          controller: 'SlideFiveCtrl'
        }
      }
    })
    .state('app.slide6', {
      url: '/slide6',
      views: {
        'menuContent': {
          templateUrl: 'templates/slides/slide6.html',
          controller: 'SlideSixCtrl'
        }
      }
    })
    // INFOGRAFICOS
    .state('app.infografico1', {
      url: '/infografico1',
      views: {
        'menuContent': {
          templateUrl: 'templates/infograficos/infografico1.html',
          controller: 'InfograficoUmCtrl'
        }
      }
    })
    .state('app.infografico2', {
      url: '/infografico2',
      views: {
        'menuContent': {
          templateUrl: 'templates/infograficos/infografico2.html',
          controller: 'InfograficoDoisCtrl'
        }
      }
    })
    .state('app.infografico3', {
      url: '/infografico3',
      views: {
        'menuContent': {
          templateUrl: 'templates/infograficos/infografico3.html',
          controller: 'InfograficoTresCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/intro');
  });

