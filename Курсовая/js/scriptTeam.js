"use strict";
window.addEventListener('DOMContentLoaded',getAllPlayer());
function sortPlayers(obj) {
	var form = new FormData;
	form.append("position",obj.value);
	var xhr = new XMLHttpRequest();
 	xhr.open("POST", "http://siteforteam/php/sortPlayers.php");
 	xhr.send(form);
  	var res;
  	xhr.onload = function() {
    	res = JSON.parse( this.response );
		if(res.length == 0) {
			getAllPlayer();
		}
		else {
			printPlayers(res);
		}
  	}
}
function getAllPlayer() {
	var xhr = new XMLHttpRequest();
 	xhr.open("POST", "http://siteforteam/php/getAllPlayer.php");
 	xhr.send();
  	var res;
  	xhr.onload = function() {
    	res = JSON.parse( this.response );
    	printPlayers(res);
  	}
}
function printPlayers(res) {
  var resultBlock = document.getElementById("result");
  resultBlock.innerHTML = "";
  var resultStr = "";
  for (var i = 0; i < res.length; i++) {
    var div = document.createElement("div");
    var obj = res[i];
	var str = "";
	if(localStorage["user"]) { 
		str+='<div class="card mb-3" data-toggle="collapse" data-target="#collapseExample'+obj["id"]+'" aria-expanded="false" aria-controls="collapseExample"><h4 class="card-header">'+obj["Fname"]+' ' +obj["Lname"]+'<span class="badge badge-primary float-right ">'+obj["gameNumber"]+'</span></h4><img style="height: 450px; width: 100%; display: block;" src="' + obj["photo"] + '" alt="Card image"><div class="collapse" id="collapseExample'+obj["id"]+'"><div class="alert alert-primary mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes andersocred nesciunt sapiente ea proident.</div></div><ul class="list-group list-group-flush"><li class="list-group-item">'+obj["position"]+'</li><li class="list-group-item">'+obj["citezenship"]+'</li><li class="list-group-item">'+obj["dateOfBirth"]+'</li><li already class="change list-group-item"><button data-id="'+obj["id"]+'" onclick="editPlayerShow(this.dataset.id)" type="button" class="btn btn-warning float-right"><i class="fas fa-edit"></i></button><button data-id="'+obj["id"]+'" onclick="deletePlayer(this.dataset.id)" type="button" class="btn btn-danger float-left"><i class="fas fa-trash"></i></button></li></ul>';
	}
	else {
		str+='<div class="card mb-3" data-toggle="collapse" data-target="#collapseExample'+obj["id"]+'" aria-expanded="false" aria-controls="collapseExample"><h4 class="card-header">'+obj["Fname"]+' ' +obj["Lname"]+'<span class="badge badge-primary float-right ">'+obj["gameNumber"]+'</span></h4><img style="height: 450px; width: 100%; display: block;" src="' + obj["photo"] + '" alt="Card image"><div class="collapse" id="collapseExample'+obj["id"]+'"><div class="alert alert-primary mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes andersocred nesciunt sapiente ea proident.</div></div><ul class="list-group list-group-flush"><li class="list-group-item">'+obj["position"]+'</li><li class="list-group-item">'+obj["citezenship"]+'</li><li class="list-group-item">'+obj["dateOfBirth"]+'</li><li hidden class="change list-group-item"><button data-id="'+obj["id"]+'" onclick="editPlayerShow(this.dataset.id)" type="button" class="btn btn-warning float-right"><i class="fas fa-edit"></i></button><button data-id="'+obj["id"]+'" onclick="deletePlayer(this.dataset.id)" type="button" class="btn btn-danger float-left"><i class="fas fa-trash"></i></button></li></ul>';
	}
	
    div.innerHTML = str;
    div.className = " col-md-4 col-sm-6 mb-4";
    resultBlock.appendChild(div);
  }
}
