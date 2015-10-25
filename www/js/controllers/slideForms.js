angular.module('starter.controllers')
	.controller("SlideFormCtrl",function($scope, $rootScope, $timeout, $interval, $location){ // FORMULARIO
		// PRIVATE
			var i = 0;
			var mostraTitulo = function(){
				$scope.pergunta.visible = true;
				$interval(mostraOpcoes,600);
			}
			var mostraOpcoes = function(){
				$scope.imagem.active = true;
				if(i < $scope.opcoes.length){
					$scope.opcoes[i].visible = true;

				}
				i++;
			}

		// PUBLIC
			$scope.color = "questionario";
			$scope.imagem = {
				"url":"tudo-01.png",
				"active":false
			};
			$scope.resp = {};

			$scope.pergunta = {
				"message" : "Você gosta de batata?",
				"visible" : "false" 
			}
			$scope.opcoes = [
					{
						"id" : 0,
						"opcao" : "Sim eu gosto de batata",
						"visible" : false
					},
					{
						"id" : 1,
						"opcao" : "Não eu não gosto de batata",
						"visible" : false
					}
			];

			$scope.saveValue = function(){
				$rootScope.addResp(0,$scope.resp.resp);
				$location.path("app/intro");
			}
			$scope.debug = function(){
				console.log($scope);
			}
		// INICIALIZA
			$timeout(mostraTitulo,500)
				

	});