const fs = require('fs');
const path = require('path');


const controller = {
	index: (req, res) => {
		res.render ("index"); 
	},
	sobremi: (req, res) => {
		res.render ("sobremi"); 
	},
	formacion: (req, res) => {
		res.render ("formacion"); 
	},
	portfolio: (req, res) => {
		res.render ("portfolio"); 
	},
	contacto: (req, res) => {
		res.render ("contacto"); 
	},

};

module.exports = controller;