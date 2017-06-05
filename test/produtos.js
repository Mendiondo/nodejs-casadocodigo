var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function() {

	beforeEach(function(done) {
		var conn = express.infra.connectionFactory();
		conn.query("delete from produtos", function(ex, result) {
			if (!ex) {
				done();
			}
		});
	});

	it('#listagem json', function(done) {
		request.get('/produtos')
		.set('Accept','application/json')
		.expect('Content-Type',/json/)
		.expect(200,done);
	});

	it('#cadastrar novo produto com dados invalidos', function(done) {
		request.post('/produtos')
		.send({titulo: "",descricao: "novo livro"})
		.expect(400,done);
	});

	it('#cadastrar novo produto com dados validos', function(done) {
		request.post('/produtos')
		.send({titulo: "teste",descricao: "novo livro", preco: 20.50})
		.expect(302,done);
	});

});
/*var http = require('http');
var assert = require('assert');
describe('#ProdutosController', function() {
	it('#listagem json', function(funcaoFinalizacao) {
		var configuracoes = {
			hostname: 'localhost',
			port:3000,
			path:'/produtos',
			headers: {
				'Accept':'application/json'
			}
		};
		request.get(configuracoes, function(res) {
			assert.equal(res.statusCode,200);
			assert.equal(res.headers['content-type'],'application/json; charset=utf-8');

			if (res.statusCode == 200) {
				console.log('Status ok');
			}
			if (res.headers['content-type'] == 'application/json; charset=utf-8') {
				console.log('Content type ok');	
			}
			funcaoFinalizacao();
		})
	});

});*/