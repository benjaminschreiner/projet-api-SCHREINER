var express = require('express');
var app = express();
var form=require('form')

//création de l'appli, ref au doc html pour IHM
var urlcodedParser = form.urlencoded({extended:false})

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
//------------------------------------------------
//Method Post

app.post('/addUser', function (req, res) {
	//preparation du Json
	response={
		email: req.body.email_post,
		lastName:req.body.lastName_post,
		firstName:req.body.firstName_post
	};
   // premierement on regarde s'il existe
   form.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       if (data["email"] == response["email"]){
       	console.error( Erreur409: existe déja );
       }
       res.end( JSON.stringify(data));
   });
   //puis on l'ecrit
   form.writeFile('user.json', response,  function(err) {
   if (err) {
      return console.error(erreur500);
   }
})


//Methode get email

app.get('/:email', function (req, res) {
	//preparation du Json
	response={
		email: req.body.email_get
	};
   // on regarde si sa existe
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   	 if (err) {
      return console.error(erreur500);
   	 }
   	 //si on trouve on envoie
      var users = JSON.parse( data );
      if (users["email"]==response["email"]){
	      var user = users["email"] 
	      console.log( user );
	      res.end( JSON.stringify(user));
      }
      else {
      	return console.error(erreur404)
      }
   });
})


//Method Post produit

app.post('/product', function (req, res) {
	//preparation du Json
	response={
		id: req.body.id_produit,
		title:req.body.title_produit,
		description:req.body.description_produit,
		price:req.body.price_produit
	};
   // premierement on regarde s'il existe
   form.readFile( __dirname + "/" + "produit.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       if (data["id"] == response["id"]){
       	console.error( Erreur409: existe déja );
       }
       res.end( JSON.stringify(data));
   });
   //puis on l'ecrit
   form.writeFile('user.json', response,  function(err) {
   if (err) {
      return console.error(erreur500);
   }
})

//Methode get produit by id

app.get('product/:id_product', function (req, res) {
	//preparation du Json
	response={
		id: req.body.id_produit_get
	};
  // premierement on regarde s'il existe
   fs.readFile( __dirname + "/" + "produit.json", 'utf8', function (err, data) {
   	 if (err) {
      return console.error(erreur500);
   	 }
      var produits = JSON.parse( data );
      //si on trouve on envoie
      if (produits["id"]==response["id"]){
	      var produit = produit["id"] 
	      console.log( produit );
	      res.end( JSON.stringify(produit));
      }
      else {
      	return console.error(erreur404)
      }
   });
})


//Method Post commmande

app.post('user/:id_user', function (req, res) {
	//preparation du Json
	response={
		id_co: req.body.id_co_commande,
		title:req.body.title_commande,
		price:req.body.price_commande
	};
   // premierement on regarde s'il existe
   form.readFile( __dirname + "/" + "commande.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       if (data["id_co"] == response["id_co"]){
       	console.error( Erreur409: existe déja );
       }
       res.end( JSON.stringify(data));
   });
   //puis on l'ecrit
   var commande={
   		id_user: id_user,
   		id_co: req.body.id_co_commande,
		title:req.body.title_commande,
		price:req.body.price_commande

   }
   form.writeFile('commande.json', commande,  function(err) {
   if (err) {
      return console.error(erreur500);
   }
})
