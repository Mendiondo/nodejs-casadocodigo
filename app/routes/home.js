module.exports = function(app) {
	app.get('/', function(req,res) {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		
		produtosDAO.lista(function(erros, resultados){
			res.render('home/index', {livros:resultados});
			// res.render('home/index', {
			// 	livros:resultados, 
			// 	urlImagem:'/imgs/nodejs-featured_large.png', 
			// 	linkImagemCapa:'/imgs/nodejs-featured_large.png'
			// });
		});	
		connection.end();
	});
}