angular.module('starter.controllers')
	.controller("SlideOneCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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
				"url":"tudo-01.png",
				"active":false
			};
			$scope.titulo = {
				"message": "PL 5069/2013",
				"visible": false
			}
			$scope.paragrafos = [
					{
						"message" : "Se trata de um projeto de lei que visa alterar a lei de atendimento as vítimas de violência sexual. (Lei N°12845/13)",
						"visible" : false
					},
					{
						"message" : "Atualmente a lei 12845 prevê o tratamento físico e mental das vítimas de violência sexual inclundo medicamentos para a profilaxia da gravidez, sendo um desses a pílula do dia seguinte.",
						"visible" : false
					}
			];


			$scope.call = function (){
				$location.path('app/slide2');
			};

			$scope.disponivel = false;

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
	});