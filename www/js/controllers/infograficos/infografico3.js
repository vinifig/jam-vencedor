angular.module('starter.controllers')
	.controller("InfograficoTresCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
		// PRIVATE

		// PUBLIC
			$scope.call = function(){
				$location.path("/app/slideFinal");
			}

		// INICIALIZA
					
	});