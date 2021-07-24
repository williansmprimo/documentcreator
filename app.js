var express = require("express");
var app = express();
var handlebars = require("express-handlebars");
var bodyParser = require("body-parser");
//var Post = require("./models/Post");

app.engine("handlebars", handlebars({defaultLayout: "index"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res){
	//Post.findAll().then(function(posts){
		//res.render("posts",{posts: posts});
	//});
	
	//var a = Post.findAll();
	//res.render("posts",{posts: a.rows});
	var posts = [{titulo: "titulo", conteudo: "conteudo"}];
	res.render("posts",{posts: posts});
});

app.get("/rota", function(req, res){
	//res.send("Hello JS World!");
	//res.send("Hello JS World!");
	res.render("form");
	//res.json({name: "Willians", idade: 27});
});

app.post("/cad", function(req, res){
	//res.send("Titulo:" + req.body.nome + "Conteudo:" + req.body.telefone);
	//Post.create({titulo: req.body.titulo, conteudo: req.body.conteudo}).then(function(){
		//res.send("Cadastro com sucesso!");
	//}).catch(function(erro){
		//res.send("Houve erro: " + erro);
	//});
	res.send("Tudo certo!");
});

app.listen(process.env.PORT || 3000, function(){
	console.log("escuntando na porta 3000!");
});