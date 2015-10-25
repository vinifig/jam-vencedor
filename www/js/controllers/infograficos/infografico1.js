angular.module('starter.controllers')
	.controller("InfograficoUmCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
		// PRIVATE

		// PUBLIC
			$scope.call = function(){
				$location.path("app/infografico2");
			}
		// INICIALIZA
			$scope.$on('$ionicView.enter', function(){
				if (window.StatusBar) {
		      StatusBar.overlaysWebView(true);
		      StatusBar.styleBlackOpaque();
		      if (ionic.Platform.isAndroid())
		        StatusBar.backgroundColorByHexString("#90BADD"); // AJUSTE DA COR SEGUINDO A GUIDELINE
		      else if( ionic.Platform.isIOS() )
		        StatusBar.backgroundColorByHexString("#BACDDD"); // AJUSTE DA COR SEGUINDO EXEMPLOS DA INTERNET
		    }    
			});	

	});