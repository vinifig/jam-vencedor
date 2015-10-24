angular.module('starter.controllers').
	controller("IntroCtrl", function($scope, $timeout, $interval){
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
			$scope.intro.color = "blue"
			$scope.intro.paragrafos = [
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
			$interval(mostraParagrafo,1700)

	});