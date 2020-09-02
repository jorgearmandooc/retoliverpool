app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "components/sectionProducts/sectionProductsView.html",
		controller: "sectionProductsController",
		resolve: {
			//resolvemos la lista de productos antes de entrar a la ruta
			products:function(webservice){
				return new Promise((resolve, reject) => {
					webservice.get("/products").then( (response) => {
						resolve(response);
					});
				});
			}
		}
	});
});