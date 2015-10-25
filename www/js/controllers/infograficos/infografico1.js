angular.module('starter.controllers')
	.controller("InfograficoUmCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
		// PRIVATE

		// PUBLIC
			$scope.call = function(){
				$location.path("app/infografico2");
			}
		// INICIALIZA

	});