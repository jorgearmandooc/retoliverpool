app.service('webservice', function($http) {
	this.endpoint = "http://localhost:3000";
	this.get = function (uri) {
		return new Promise((resolve, reject) => {
			$http({
				method:"GET",
				url:this.endpoint + uri,
				dataType: 'jsonp'
			}).then( ( response ) => {
				
				//aqui se puede hacer comprobaciones de la respuesta
				
				//devolvemos solo el data por proposito de pruebas
				resolve(response.data);
				
			});
		});
	}
});