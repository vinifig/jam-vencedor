angular.module('starter.controllers')
	.controller("SlideThreeCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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
			$scope.color = "pilula";
			$scope.imagem = {
				"url":"tudo-03.png",
				"active":false
			};
			$scope.titulo = {
				"message": "Pílula do dia seguinte",
				"visible": false
			}
			$scope.paragrafos = [
				{
					"message" : "De acordo com a bancada religiosa, a pilula do dia seguinte passaria a ser considerada um medicamento abortivo. Ao contrário do que aﬁrma o Ministério da Saúde atualmente que a categoriza como método contraceptivo emergencial.",
					"visible" : false
				}
			];
			$scope.disponivel = false;

			$scope.call = function (){
				$location.path('app/slide4');
			};

		// INICIALIZA
			$timeout(mostraTitulo,500)
			$scope.$on('$ionicView.enter', function(){
				if (window.StatusBar) {
		      StatusBar.overlaysWebView(true);
		      StatusBar.styleBlackOpaque();
		      if (ionic.Platform.isAndroid())
		        StatusBar.backgroundColorByHexString("#EE4607"); // AJUSTE DA COR SEGUINDO A GUIDELINE
		      else if( ionic.Platform.isIOS() )
		        StatusBar.backgroundColorByHexString("#EE6937"); // AJUSTE DA COR SEGUINDO EXEMPLOS DA INTERNET
		    }    
			});	
	})