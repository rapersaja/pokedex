var pokemon = angular.module("pokemon",[]);
//controler creation
pokemon.controller("ListadoPokemon",function($scope,$http) {
	$scope.Imagen ="https://assets.pokemon.com/assets/cms2/img/pokedex/full"
	$scope.poke=[];
	$scope.conteo = 0;

		for(var y=0; y<=806; y++){

			$scope.conteo = $scope.conteo + 1 


// esta llamando a la api
				$http ({
					method:"POST",
					url: "https://www.pokeapi.co/api/v2/pokemon/"+ $scope.conteo


				}).then(function successcallback(objeto){
		//llamamos al pokemon 
					$scope.poke.push(objeto.data)
					console.log($scope.poke.data.sprites)	
		

				})
		}		
})

pokemon.controller("login",function($scope){
    $scope.validar = function(usuario, clave){
    	$scope.usuario= "pokeMerrick";
    	$scope.clave= "mon";
    	if (usuario== $scope.usuario && clave== $scope.clave){
    		window.open("Pages/pokedex.html","_parent")
    	}else {alert ("Usuario o clave incorrecta")}
    }
});