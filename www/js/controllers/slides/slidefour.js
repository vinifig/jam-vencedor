angular.module('starter.controllers')
	.controller("SlideFourCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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
				"url":"tudo-04.png",
				"active":false
			};
			$scope.titulo = {
				"message": "Pílula do dia seguinte",
				"visible": false
			}
			$scope.paragrafos = [
				{
					"message" : "Isso é importante porque a pílula do dia seguinte deixaria de ser fornecida legalmente em farmácias e até mesmo na rede pública de saúde.(SUS)",
					"visible" : false
				},
				{
					"message" : "E seu uso, comercialização, e administração se tornaria crime com pena variando de 6 meses a 2 anos de cadeia.",
					"visible" : false
				}
			];
			$scope.disponivel = false;

			$scope.call = function (){
				$location.path('app/slide5');
			};

		// INICIALIZA
			$timeout(mostraTitulo,500)

	})