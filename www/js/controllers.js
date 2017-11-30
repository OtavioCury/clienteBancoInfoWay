angular.module('app.controllers', [])
  
.controller('loginCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state',
'$rootScope', '$ionicPopup', 'BancoService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, BancoService) {

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.login = function(conta){
		$scope.showLoading();
		BancoService.getLogin(conta)
			.then(function(response){
				$scope.hideLoading();
				$rootScope.conta = response.data;
				if ($rootScope.conta.id != null) {
					$rootScope.conta = response.data;
					$state.go('inicial');
				}else{
					$scope.modal("Informações","Conta não cadastrada");
				}
		});
	};

}])
   
.controller('operacoesCtrl', ['$scope', '$stateParams', '$rootScope', '$ionicLoading', '$state', 'BancoService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, $ionicLoading, $state, BancoService) {

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.adicionarAgencia = function(){
		$scope.showLoading();
		BancoService.getBancos()
			.then(function(response){
				$scope.hideLoading();
				if (response.data != null) {	
					$rootScope.bancos = response.data;
					$state.go('cadastroDeAgencia');																					
				}
		});
	};

	$scope.adicionarCliente = function(){
		$scope.showLoading();
		BancoService.getBancos()
			.then(function(response){
				$scope.hideLoading();
				if (response.data != null) {	
					$rootScope.bancos = response.data;
					$state.go('escolhaInstituicao');																					
				}
		});
	};
}])

.controller('escolhaInstituicaoCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state',
'$rootScope', '$ionicPopup', 'BancoService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, BancoService) {

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.proximaEtapa = function(banco){
		$scope.showLoading();
		BancoService.getAgenciasBanco(banco.id)
			.then(function(response){
				$scope.hideLoading();
				if (response.data != null) {	
					$rootScope.agencias = response.data;
					$state.go('cadastroDeCliente');																					
				}
		});
	};

}])
   
.controller('cadastroDeInstituicaoCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state',
'$rootScope', '$ionicPopup', 'BancoService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, BancoService) {

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.adicionar = function(banco){
		$scope.showLoading();
		BancoService.postBanco(banco)
			.then(function(response){
				$scope.hideLoading();
				$scope.modal("Informações","Banco cadastrado com sucesso!");
		});
	};

}])
   
.controller('cadastroDeAgenciaCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state',
'$rootScope', '$ionicPopup', 'BancoService', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, BancoService, $rootScope) {

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.adicionar = function(agencia){
		$scope.showLoading();
		BancoService.postAgencia(agencia)
			.then(function(response){
				$scope.hideLoading();	
				$scope.modal("Informações","Agência cadastrada com sucesso!");																			
		});
	};

}])
   
.controller('cadastroDeClienteCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state',
'$rootScope', '$ionicPopup', 'BancoService', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, BancoService, $rootScope) {

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.adicionar = function(conta){
		$scope.showLoading();
		if (conta.tipoConta == 'Corrente') {
			conta.tipoConta = 'CORRENTE';
		}else{
			conta.tipoConta = 'POUPANCA';
		}
		BancoService.postContaCliente(conta)
			.then(function(response){
				$scope.hideLoading();	
				$scope.modal("Informações","Cliente/Conta adicionados com sucesso!");																			
				
		});
	};

}])
   
.controller('inicialCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state',
'$rootScope', '$ionicPopup', 'BancoService', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, BancoService, $rootScope) {

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.extrato = function(){
		$scope.showLoading();
		BancoService.getExtrato($rootScope.conta.id)
			.then(function(response){
				$scope.hideLoading();	
				$rootScope.operacoes = response.data;
				$state.go('extrato');																			
		});
	};
}])
   
.controller('saqueCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state',
'$rootScope', '$ionicPopup', 'BancoService', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, BancoService, $rootScope) {

	$scope.movimentacaoFinanceira = {};
	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.saque = function(valor){
		$rootScope.conta.saldo = $rootScope.conta.saldo - valor; 
		$scope.movimentacaoFinanceira.conta = $rootScope.conta;
		$scope.movimentacaoFinanceira.operacao = 'SAQUE';
		$scope.movimentacaoFinanceira.valor = valor;
		$scope.showLoading();
		BancoService.postAdicionaMovimentacao($scope.movimentacaoFinanceira)
			.then(function(response){
			BancoService.postAtualizaConta($rootScope.conta)
			.then(function(response){
				$scope.hideLoading();	
				$scope.modal("Informações","Saque realizado com sucesso!");																			
			});																			
		});
	};

}])
   
.controller('depositoCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state',
'$rootScope', '$ionicPopup', 'BancoService', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, BancoService, $rootScope) {

	$scope.movimentacaoFinanceira = {};
	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.deposito = function(valor){
		$rootScope.conta.saldo = $rootScope.conta.saldo + valor; 
		$scope.showLoading();
		$scope.movimentacaoFinanceira.conta = $rootScope.conta;
		$scope.movimentacaoFinanceira.operacao = 'DEPOSITO';
		$scope.movimentacaoFinanceira.valor = valor;
		BancoService.postAdicionaMovimentacao($scope.movimentacaoFinanceira)
			.then(function(response){
			BancoService.postAtualizaConta($rootScope.conta)
			.then(function(response){
				$scope.hideLoading();	
				$scope.modal("Informações","Depósito realizado com sucesso!");																			
			});																			
		});
	};

}])
   
.controller('transferenciaCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state',
'$rootScope', '$ionicPopup', 'BancoService', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, BancoService, $rootScope) {

	$scope.movimentacaoFinanceira = {};
	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.transferencia = function(valor, numero, agencia){
		$scope.showLoading();
		$scope.movimentacaoFinanceira.conta = $rootScope.conta;
		$scope.movimentacaoFinanceira.operacao = 'TRANSFERENCIA';
		$scope.movimentacaoFinanceira.valor = valor;
		BancoService.getConta(numero, agencia)
			.then(function(response){
			$scope.hideLoading();	
			$scope.conta = response.data;
				$scope.conta.saldo = $scope.conta.saldo + valor;
				$rootScope.conta.saldo = $rootScope.conta.saldo - valor;
				BancoService.postAdicionaMovimentacao($scope.movimentacaoFinanceira)
					.then(function(response){
					BancoService.postAtualizaConta($scope.conta)
					.then(function(response){																		
					});
					BancoService.postAtualizaConta($rootScope.conta)
						.then(function(response){
							$scope.modal("Informações","Transferência realizada com sucesso!");																			
					});																			
				});															
		}); 
	};

}])

.controller('extratoCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state',
'$rootScope', '$ionicPopup', 'BancoService', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, BancoService, $rootScope) {

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

}])
 