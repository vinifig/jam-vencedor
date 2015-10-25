angular.module('starter.controllers').
	controller("IntroCtrl", function($scope, $timeout, $interval, $location){
		// PRIVATE
			var i = 0;

			var mostraParagrafo = function(){
				if(i < $scope.intro.paragrafos.length)
					$scope.intro.paragrafos[i].visible = true
				else
					$scope.disponivel = true;
				i++;
			}

		// PUBLIC
			$scope.intro = {};
			$scope.intro.color = "intro",
			$scope.intro.paragrafos = [
					{
						"message" : "O que te faz Feliz?",
						"fim" : false,
						"visible" : false
					},
					{
						"message" : "Me pergunto... o que te faz feliz também faz os outros felizes?",
						"fim" : true,
						"visible" : false
					},
					{
						"message" : "A coisa certa, o que é? ",
						"fim" : false,
						"visible" : false
					},
					{
						"message" : "Me pergunto... quando você faz a coisa certa todos ficam felizes?",
						"fim" : true,
						"visible" : false
					}
			];
			$scope.disponivel = false;

			$scope.call = function (){
				$location.path('app/slide1');
			};

		// INICIALIZA
			$timeout(mostraParagrafo,500)
			$interval(mostraParagrafo,1700)

	});