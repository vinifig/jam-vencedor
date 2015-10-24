angular.module('starter.controllers').
	controller("SlideOneCtrl",function($scope, $timeout, $interval){ // TEXTO
		// PRIVATE
			var i = 0;
			var mostraParagrafo = function(){
				if(i < $scope.paragrafos.length)
					$scope.paragrafos[i].visible = true
				else
					$scope.disponivel = true;
				i++;
			}

		// PUBLIC
			$scope.color = "blue"
			$scope.paragrafos = [
					{
						"message" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
						"visible" : false
					},
					{
						"message" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
						"visible" : false
					}
			];
			$scope.disponivel = false;

		// INICIALIZA
			$timeout(mostraParagrafo,500)
			$interval(mostraParagrafo,1500)

	})
	.controller("SlideTwoCtrl",function($scope, $rootScope, $timeout, $interval, $location){ // FORMULARIO
		// PRIVATE
			var i = 0;
			var mostraTitulo = function(){
				$scope.pergunta.visible = true;
				$interval(mostraParagrafo,600);
			}
			var mostraParagrafo = function(){
				if(i < $scope.opcoes.length)
					$scope.opcoes[i].visible = true;
				i++;
			}

		// PUBLIC
			$scope.color = "blue";
			$scope.resp = {};

			$scope.pergunta = {
				"message" : "Você gosta de batata?",
				"visible" : "false" 
			}
			$scope.opcoes = [
					{
						"id" : 0,
						"opcao" : "Lorem ipsum dolor sit sed diam nonummy",
						"visible" : false
					},
					{
						"id" : 1,
						"opcao" : "Lorem ipsum dolor sit amet, diam nonummy",
						"visible" : false
					}
			];

			$scope.saveValue = function(){
				$rootScope.addResp(0,$scope.resp.resp);
				$location.path("app/chart")
			}
			$scope.debug = function(){
				console.log($scope);
			}
		// INICIALIZA
			$timeout(mostraTitulo,500)
				

	});