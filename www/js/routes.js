angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('operacoes', {
    url: '/operacoes',
    templateUrl: 'templates/operacoes.html',
    controller: 'operacoesCtrl'
  })

  .state('cadastroDeInstituicao', {
    url: '/cadastroInsttituicao',
    templateUrl: 'templates/cadastroDeInstituicao.html',
    controller: 'cadastroDeInstituicaoCtrl'
  })

  .state('cadastroDeAgencia', {
    url: '/cadastroAgencia',
    templateUrl: 'templates/cadastroDeAgencia.html',
    controller: 'cadastroDeAgenciaCtrl'
  })

  .state('cadastroDeCliente', {
    url: '/cadastroCliente',
    templateUrl: 'templates/cadastroDeCliente.html',
    controller: 'cadastroDeClienteCtrl'
  })

  .state('inicial', {
    url: '/inicial',
    templateUrl: 'templates/inicial.html',
    controller: 'inicialCtrl'
  })

  .state('saque', {
    url: '/saque',
    templateUrl: 'templates/saque.html',
    controller: 'saqueCtrl'
  })

  .state('deposito', {
    url: '/deposito',
    templateUrl: 'templates/deposito.html',
    controller: 'depositoCtrl'
  })

  .state('transferencia', {
    url: '/transferencia',
    templateUrl: 'templates/transferencia.html',
    controller: 'transferenciaCtrl'
  })

  .state('escolhaInstituicao', {
    url: '/escolhaInstituicao',
    templateUrl: 'templates/escolhaInstituicao.html',
    controller: 'escolhaInstituicaoCtrl'
  })

  .state('extrato', {
    url: '/extrato',
    templateUrl: 'templates/extrato.html',
    controller: 'extratoCtrl'
  })

$urlRouterProvider.otherwise('/operacoes')


});