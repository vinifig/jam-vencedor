angular.module('starter.controllers').
	controller("SlideOneCtrl",function($scope, $timeout, $interval){ // TEXTO
		// PRIVATE
			var i = 0;

			var mostraTitulo = function(){
				$scope.titulo.visible = true;
				$interval(mostraParagrafo,1000);
			}
			var mostraParagrafo = function(){
				if(i < $scope.paragrafos.length){
					$scope.paragrafos[i].visible = true
					$scope.imagem.active = true;
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
			$scope.disponivel = false;

		// INICIALIZA
			$timeout(mostraTitulo,500)

	})
	.controller("SlideTwoCtrl",function($scope, $timeout, $interval){ // TEXTO
		// PRIVATE
			var i = 0;

			var mostraTitulo = function(){
				$scope.titulo.visible = true;
				$interval(mostraParagrafo,1000);
			}
			var mostraParagrafo = function(){
				if(i < $scope.paragrafos.length){
					$scope.paragrafos[i].visible = true
					$scope.imagem.active = true;
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
					"message" : "Com a aprovação da lei 5069/2013 passa a ser necessário exame de corpo e delito para comprovar o estupro e só então começar a receber assistência, que antes era garantida com o mero relato da vítima na rede do SUS",
					"visible" : false
				}
			];
			$scope.disponivel = false;

		// INICIALIZA
			$timeout(mostraTitulo,500)

	})
	
	.controller("SlideFormCtrl",function($scope, $rootScope, $timeout, $interval, $location){ // FORMULARIO
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
			$scope.color = "questionario";
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