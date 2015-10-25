angular.module('starter.controllers')
	.controller("InfograficoTresCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
		// PRIVATE

		// PUBLIC
			$scope.call = function(){
				$location.path("/app/slide7");
			}

		// INICIALIZA
			$scope.$on('$ionicView.enter', function(){
				if (window.StatusBar) {
		      StatusBar.overlaysWebView(true);
		      StatusBar.styleBlackOpaque();
		      if (ionic.Platform.isAndroid())
		        StatusBar.backgroundColorByHexString("#7E0004"); // AJUSTE DA COR SEGUINDO A GUIDELINE
		      else if( ionic.Platform.isIOS() )
		        StatusBar.backgroundColorByHexString("#7E1116"); // AJUSTE DA COR SEGUINDO EXEMPLOS DA INTERNET
		    }    
			});	
	});