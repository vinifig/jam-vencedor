angular.module('starter.controllers')
	.controller("InfograficoDoisCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
		// PRIVATE
			var nMortos = [6,3,1];
		// PUBLIC
			$scope.mulheres = [];
			$scope.numberDeMortos = 0;
			
			$scope.call = function(){
				$location.path("/app/infografico3");
			}

			$scope.mudaMortos = function(index){
				var btn = document.querySelectorAll(".leftSide");
				for(var i = 0; i < btn.length; i++)
					btn[i].setAttribute("class","leftSide");
				btn[index - 1].setAttribute("class","leftSide selected");
				$scope.numberDeMortos = nMortos[index-1];
			}

		// INICIALIZA

			$scope.$on('$ionicView.enter', function(){
				if (window.StatusBar) {
		      StatusBar.overlaysWebView(true);
		      StatusBar.styleBlackOpaque();
		      if (ionic.Platform.isAndroid())
		        StatusBar.backgroundColorByHexString("#A3E0FA "); // AJUSTE DA COR SEGUINDO A GUIDELINE
		      else if( ionic.Platform.isIOS() )
		        StatusBar.backgroundColorByHexString("#D5EFFA"); // AJUSTE DA COR SEGUINDO EXEMPLOS DA INTERNET
		    }    
			});	

			var init = function(){
				for ( var i = 0; i < 20; i++)
					$scope.mulheres.push(i);
				$scope.mudaMortos(1);
			}
			init();
	});