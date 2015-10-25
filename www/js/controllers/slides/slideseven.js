angular.module('starter.controllers')
	.controller("SlideSevenCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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
			$scope.color = "negligencia";
			$scope.imagem = {
				"url":"tudo-06.png",
				"active":false
			};
			$scope.titulo = {
				"message": "Negligência",
				"visible": false
			}
			$scope.paragrafos = [
				{
					"message" : "Nenhum proﬁssional de saúde ou instituição, em nenhum caso, poderá ser obrigado a aconselhar, receitar ou administrar procedimento que considere abortivo.",
					"visible" : false
				},
				{
					"message" : "Não importa o motivo, incluindo por princípios pessoais ou doutrinas que segue.",
					"visible" : false
				}
			];
			$scope.disponivel = false;

		// INICIALIZA
			$timeout(mostraTitulo,500)
			$scope.$on('$ionicView.enter', function(){
				if (window.StatusBar) {
		      StatusBar.overlaysWebView(true);
		      StatusBar.styleBlackOpaque();
		      if (ionic.Platform.isAndroid())
		        StatusBar.backgroundColorByHexString("#9B35A1"); // AJUSTE DA COR SEGUINDO A GUIDELINE
		      else if( ionic.Platform.isIOS() )
		        StatusBar.backgroundColorByHexString("#9D55A1"); // AJUSTE DA COR SEGUINDO EXEMPLOS DA INTERNET
		    }    
			});	
	});