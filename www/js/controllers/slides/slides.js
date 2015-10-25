angular.module('starter.controllers').
	controller("SlideOneCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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


			$scope.call = function (){
				$location.path('app/slide2');
			};

			$scope.disponivel = false;

		// INICIALIZA
			$timeout(mostraTitulo,500)

	})
	.controller("SlideTwoCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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
					"message" : "Com a aprovação da lei 5069/2013 passa a ser necessário exame de corpo e delito para comprovar o estupro e só então começar a receber assistência, que antes era garantida com o mero relato da vítima na rede do SUS.",
					"visible" : false
				}
			];
			$scope.disponivel = false;

			$scope.call = function (){
				$location.path('app/slide3');
			};

		// INICIALIZA
			$timeout(mostraTitulo,500)

	})
	.controller("SlideThreeCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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
				"url":"tudo-03.png",
				"active":false
			};
			$scope.titulo = {
				"message": "Pílula do dia seguinte",
				"visible": false
			}
			$scope.paragrafos = [
				{
					"message" : "De acordo com a bancada religiosa, a pilula do dia seguinte passaria a ser considerada um medicamento abortivo. Ao contrário do que aﬁrma o Ministério da Saúde atualmente que a categoriza como método contraceptivo emergencial.",
					"visible" : false
				}
			];
			$scope.disponivel = false;

			$scope.call = function (){
				$location.path('app/slide4');
			};

		// INICIALIZA
			$timeout(mostraTitulo,500)

	})
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
	.controller("SlideFiveCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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
			$scope.color = "pena";
			$scope.imagem = {
				"url":"tudo-05.png",
				"active":false
			};
			$scope.titulo = {
				"message": "Pena",
				"visible": false
			}
			$scope.paragrafos = [
				{
					"message" : "A pena por induzir, instigar ou auxiliar ﬁca como 6 meses a 2 anos. Se cometido por um proﬁssional da saúde a pena aumenta para um a 3 anos. ",
					"visible" : false
				},
				{
					"message" : "E não só isso, a pena aumenta em um terço se a gestante tiver menos que 18 anos.",
					"visible" : false
				}
			];
			$scope.disponivel = false;

			$scope.call = function (){
				$location.path('app/slide6');
			};

		// INICIALIZA
			$timeout(mostraTitulo,500)

	})
	.controller("SlideSixCtrl",function($scope, $timeout, $interval, $location){ // TEXTO
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
			$scope.color = "negligencia";
			$scope.imagem = {
				"url":"tudo-06.png",
				"active":false
			};
			$scope.titulo = {
				"message": "Negligência",
				"visible": false
			}
			$scope.paragrafos = [
				{
					"message" : "Nenhum proﬁssional de saúde ou instituição, em nenhum caso, poderá ser obrigado a aconselhar, receitar ou administrar procedimento que considere abortivo.",
					"visible" : false
				},
				{
					"message" : "Não importa o motivo, incluindo por princípios pessoais ou doutrinas que segue.",
					"visible" : false
				}
			];
			$scope.disponivel = false;

			$scope.call = function (){
				$location.path('app/form1');
			};

		// INICIALIZA
			$timeout(mostraTitulo,500)

	});