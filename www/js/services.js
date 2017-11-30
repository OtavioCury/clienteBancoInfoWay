angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BancoService', ['$http', function($http){
	var ip = 'http://192.168.100.5:8080/BancoInfoWay/rest';

	return{
		postBanco: function(banco){
			URL = ip+'/banco/adiciona-banco';

			body = {	          
	      		nome: banco.nome
	        }
	        return $http.post(URL, body).then(function(response){	        	
				return response;
			}).catch(function(response){				
				return response;
			});
		},

		getBancos: function(){
			URL = ip+'/banco/bancos';					
			return $http.get(URL).then(function(response){							
				return response;
			}).catch(function(response){							
				return response;
			});
		},

		getAgenciasBanco: function(id){
			URL = ip+'/banco/todas-agencias/'+id;					
			return $http.get(URL).then(function(response){							
				return response;
			}).catch(function(response){							
				return response;
			});
		},

		getConta: function(numero, agencia){
			URL = ip+'/conta/conta/'+numero+"/"+agencia;					
			return $http.get(URL).then(function(response){							
				return response;
			}).catch(function(response){							
				return response;
			});
		},

		getMovimentacoesConta: function(id){
			URL = ip+'/movimentacaoFinanceira/movimentacoes-conta/'+id;					
			return $http.get(URL).then(function(response){							
				return response;
			}).catch(function(response){							
				return response;
			});
		},

		postAdicionaMovimentacao: function(movimentacaoFinanceira){
			URL = ip+'/movimentacaoFinanceira/adiciona-movimentacao';

			body = {
	      		operacao: movimentacaoFinanceira.operacao,
	      		conta: movimentacaoFinanceira.conta,
	      		valor:  movimentacaoFinanceira.valor
	        }
	        return $http.post(URL, body).then(function(response){	        	
				return response;
			}).catch(function(response){				
				return response;
			});
		},

		postAgencia: function(agencia){
			URL = ip+'/agencia/adiciona-agencia';

			body = {	          
	      		numero: agencia.numero,
	      		banco: agencia.banco 
	        }
	        return $http.post(URL, body).then(function(response){	        	
				return response;
			}).catch(function(response){				
				return response;
			});
		},

		postContaCliente: function(conta){
			URL = ip+'/conta/adiciona-conta';

			body = {	          
	      		tipoConta: conta.tipoConta,
	      		cliente: conta.cliente,
	      		agencia: conta.agencia,
	      		senha: conta.senha,
	      		numero: conta.numero 
	        }
	        return $http.post(URL, body).then(function(response){	        	
				return response;
			}).catch(function(response){				
				return response;
			});
		},

		postAtualizaConta: function(conta){
			URL = ip+'/conta/atualiza-conta';

			body = {	          
	      		id: conta.id,
	      		cliente: conta.cliente,
	      		agencia: conta.agencia,
	      		senha: conta.senha,
	      		numero: conta.numero,
	      		tipoConta: conta.tipoConta,
	      		saldo: conta.saldo 
	        }
	        return $http.post(URL, body).then(function(response){	        	
				return response;
			}).catch(function(response){				
				return response;
			});
		},

		getLogin: function(conta){
			URL = ip+'/conta/login/'+conta.numero+"/"+conta.senha;					
			return $http.get(URL).then(function(response){							
				return response;
			}).catch(function(response){							
				return response;
			});
		},

		getExtrato: function(id){
			URL = ip+'/movimentacaoFinanceira/movimentacoes-conta/'+id;					
			return $http.get(URL).then(function(response){							
				return response;
			}).catch(function(response){							
				return response;
			});
		}

	}
}]);