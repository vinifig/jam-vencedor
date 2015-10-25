angular.module('starter.controllers')
	.controller("SlideFiveCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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
			$scope.color = "pena";
			$scope.imagem = {
				"url":"tudo-05.png",
				"active":false
			};
			$scope.titulo = {
				"message": "Pena",
				"visible": false
			}
			$scope.paragrafos = [
				{
					"message" : "A pena por induzir, instigar ou auxiliar ﬁca como 6 meses a 2 anos. Se cometido por um proﬁssional da saúde a pena aumenta para um a 3 anos. ",
					"visible" : false
				},
				{
					"message" : "E não só isso, a pena aumenta em um terço se a gestante tiver menos que 18 anos.",
					"visible" : false
				}
			];
			$scope.disponivel = false;

			$scope.call = function (){
				$location.path('app/slide6');
			};

		// INICIALIZA
			$timeout(mostraTitulo,500)

	})