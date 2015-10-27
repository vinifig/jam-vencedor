angular.module('starter.controllers')
	.controller("SlideEightCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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
			$scope.color = "situacao";
			$scope.imagem = {
				"url":"tudo-07.png",
				"active":false
			};
			$scope.titulo = {
				"message": "A Situação",
				"visible": false
			}
			$scope.paragrafos = [
				{
					"message" : "A PL5069/2013 está em tramitação e sem data prevista para votação",
					"visible" : false
				},
				{
					"message" : "Pode-se acompanhar o processo clicando nesta imagem:",
					"visible" : false
				}
			];
			$scope.disponivel = false;

			$scope.call = function (){
				$location.path('app/infografico1');
			};

		// INICIALIZA
			$timeout(mostraTitulo,500)
	});