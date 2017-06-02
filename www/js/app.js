// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var user;
var app = angular.module('minemywine', ['ionic', 'minemywine.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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
     //DbService.initDB();

      //DB Service call sample
     /* DbService.getLoginDetails(1).then(function (data) {
          console.log(data.rows.item(0).name);
      });*/

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.location', {
    url: '/location',
    views: {
      'menuContent': {
        templateUrl: 'templates/location/location.html',
        controller: 'locationCtrl'
      }
    }
  })

  .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'templates/account/account.html'
        }
      }
    })
    .state('app.shop', {
      url: '/shop',
      views: {
        'menuContent': {
          templateUrl: 'templates/shop/shop.html',
          controller: 'shopCtrl'
        }
      }
    })

    .state('app.shop-list', {
      url: '/shop-list',
      views: {
        'menuContent': {
          templateUrl: 'templates/shop/shop-list.html',
          controller: 'shopCtrl'
        }
      }
    })
    

    .state('account', {
    url: '/account',
    abstract: true,
    templateUrl: 'templates/account/account-view.html'
  })

.state('account.mybar', {
      url: '/mybar',
      views: {
        'account-view': {
          templateUrl: 'templates/account/mybar.html',
        }
      }
    })

.state('account.mySettings', {
      url: '/mySettings',
      views: {
        'account-view': {
          templateUrl: 'templates/account/account-setting.html'
        }
      }
    })

.state('account.contact-us', {
      url: '/contact-us',
      views: {
        'account-view': {
          templateUrl: 'templates/account/contact-us.html'
        }
      }
    })
 .state('account.accountBottle', {
      url: '/accountBottle',
      views: {
        'account-view': {
          templateUrl: 'templates/singleBottle/bottleDescription.html',
        }
      }
    })

 .state('account.accountBottleDummy', {
      url: '/accountBottleDummy',
      views: {
        'account-view': {
          templateUrl: 'templates/singleBottle/bottledescription-afterBuyDummy.html',
        }
      }
    })

 .state('account.accountBottleSmirnoff', {
      url: '/accountBottleSmirnoff',
      views: {
        'account-view': {
          templateUrl: 'templates/singleBottle/bottleDescriptionSmirnoff.html',
        }
      }
    })

 .state('account.qr', {
      url: '/qr',
      views: {
        'account-view': {
          templateUrl: 'templates/qr/qr.html',
        }
      }
    })
 .state('account.consume', {
      url: '/consume',
      views: {
        'account-view': {
          templateUrl: 'templates/qr/consume.html',
        }
      }
    })
 .state('account.consumeSmirnoff', {
      url: '/consumeSmirnoff',
      views: {
        'account-view': {
          templateUrl: 'templates/qr/consumeSmirnoff.html',
        }
      }
    })
 .state('account.mybar-dummybalance', {
      url: '/mybar-dummybalance',
      views: {
        'account-view': {
          templateUrl: 'templates/account/mybar-dummybalance.html',
        }
      }
    })

 
  /*.state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });*/
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/shop');

});
