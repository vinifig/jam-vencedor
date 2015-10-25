angular.module('starter.controllers')
	.controller("SlideTwoCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
		// PRIVATE
			var i = 0;

			var mostraTitulo = function(){
				$scope.titulo.visible = true;
				$interval(mostraParagrafo,1000);
			}
			var mostraParagrafo = function(){
				$scope.imagem.active = true;
				if(i < $scope.paragrafos.length){
					$scope.paragrafos[i].visible = true
				}
				else
					$scope.disponivel = true;
				i++;
			}

		// PUBLIC
			$scope.color = "pls";
			$scope.imagem = {
				"url":"tudo-02.png",
				"active":false
			};
			$scope.titulo = {
				"message": "PL 5069/2013",
				"visible": false
			}
			$scope.paragrafos = [
				{
					"message" : "Com a aprovação da lei 5069/2013 passa a ser necessário exame de corpo e delito para comprovar o estupro e só então começar a receber assistência, que antes era garantida com o mero relato da vítima na rede do SUS.",
					"visible" : false
				}
			];
			$scope.disponivel = false;

			$scope.call = function (){
				$location.path('app/slide3');
			};

		// INICIALIZA
			$timeout(mostraTitulo,500)
			$scope.$on('$ionicView.enter', function(){
				if (window.StatusBar) {
		      StatusBar.overlaysWebView(true);
		      StatusBar.styleBlackOpaque();
		      if (ionic.Platform.isAndroid())
		        StatusBar.backgroundColorByHexString("#EF1708"); // AJUSTE DA COR SEGUINDO A GUIDELINE
		      else if( ionic.Platform.isIOS() )
		        StatusBar.backgroundColorByHexString("#EF4438"); // AJUSTE DA COR SEGUINDO EXEMPLOS DA INTERNET
		    }    
			});	
	})