var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

var client = new Client();
var  SERVER_TOKEN="Token token=a390301578948c5f11e1a38c104d842e";

function getResponse(req, res) {
	res.send("Hello");
	}
function getHome(req, res) {
	res.render('home', { title: 'Ganesh' });
	}
function activateBeacon(req, res){
	console.log('Factory Id: '+req.param('factory_id')+'\nName: '+req.param('name'));
	var req_data={
        "factory_id": req.param('factory_id'),
        "name": req.param('name'),
        "visibility": "private"
   };
	var args = {
			data: req_data,
		    headers: { "AUTHORIZATION": SERVER_TOKEN , "Content-Type": "application/json"}
		}; 
	client.post("https://manager.gimbal.com/api/beacons",args, function (data, response) {
	    if(data.error){ //
	    	console.log("ERROR",data.error.message);
	    	res.send({'ERROR': data.error.message});
	    }
	    else
	    {
		console.log("data",data);
	    res.send({'Success': 'Beacon activated'});
		}
	    // */
	    

	});
	
}

exports.getResponse=getResponse;	
exports.getHome=getHome;
exports.activateBeacon=activateBeacon;