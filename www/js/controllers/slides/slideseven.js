angular.module('starter.controllers')
	.controller("SlideSevenCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
		// PRIVATE
			
		// PUBLIC

			$scope.call = function (){
				$location.path('app/slide8');
			};


		// INICIALIZA
			
	});