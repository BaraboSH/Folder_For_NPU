"use strict";
window.addEventListener('DOMContentLoaded',getAllPlayer());
function searchPlayers() {
	var form = new FormData(document.forms.searchByLastName);
	var xhr = new XMLHttpRequest();
 	xhr.open("POST", "http://siteforteam/php/searchByLastName.php");
 	xhr.send(form);
  	var res;
  	xhr.onload = function() {
    	res = JSON.parse( this.response );
		if(res.length == 0) {
			console.log("11");
			var resultBlock = document.getElementById("result");
			resultBlock.innerHTML = '';
			var div = document.createElement("div");
			div.className = "container text-center pt-5";
			div.innerHTML = "<h1>Ничего не найдено</h1>"
			resultBlock.appendChild(div);
		}
		else {
			printPlayers(res);
		}
  	}
}
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
  for (var i = 0; i < res.length; i++) {
    var div = document.createElement("div");
    var obj = res[i];
	var str = "";
	if(localStorage["user"]) { 
        str+='<div class="card mb-3" data-toggle="collapse" data-target="#collapseExample'+obj["id"]+'" aria-expanded="false" aria-controls="collapseExample"><h4 class="card-header">'+obj["Fname"]+' ' +obj["Lname"]+'<span class="badge badge-primary float-right ">'+obj["gameNumber"]+'</span></h4><img style="height: 450px; width: 100%; display: block;" src="' + obj["photo"] + '" alt="Card image"><div class="collapse" id="collapseExample'+obj["id"]+'"><div class="alert alert-primary mb-0"><table class="table table-dark"><thead class="thead-light"><tr class="text-center"><th scope="col">Матчі</th>';
        if(obj["position"] == "Воротар") {
            str+='<th scope="col"><i class="far fa-hand-rock fa-2x"></i></th>';
        }
        else {
            str+='<th scope="col"><i style="color:#000;"class="far fa-futbol fa-2x"></i></th>';
        }
        str+='<th scope="col"><i style="color:#ddda15" class="fas fa-sticky-note fa-2x"></i></th><th scope="col"><i style="color:#dd1515" class="fas fa-sticky-note fa-2x"></i></th></tr></thead><tbody><tr class="text-center"><td>'+obj["matches"] +'</td><td>'+obj["goals"] +'</td><td>'+obj["yellowcards"] +'</td><td>'+obj["redcards"] +'</td></tr></tbody></table></div></div><ul class="list-group list-group-flush"><li class="list-group-item">'+obj["position"]+'</li><li class="list-group-item">'+obj["citezenship"]+'</li><li class="list-group-item">'+obj["dateOfBirth"]+'</li><li already class="change list-group-item"><button data-id="'+obj["id"]+'" onclick="editPlayerShow(this.dataset.id)" type="button" class="btn btn-warning float-right"><i class="fas fa-edit"></i></button><button data-id="'+obj["id"]+'" onclick="deletePlayer(this.dataset.id)" type="button" class="btn btn-danger float-left"><i class="fas fa-trash"></i></button></li></ul></div>';
	}
	else {
		str+='<div class="card mb-3" data-toggle="collapse" data-target="#collapseExample'+obj["id"]+'" aria-expanded="false" aria-controls="collapseExample"><h4 class="card-header">'+obj["Fname"]+' ' +obj["Lname"]+'<span class="badge badge-primary float-right ">'+obj["gameNumber"]+'</span></h4><img style="height: 450px; width: 100%; display: block;" src="' + obj["photo"] + '" alt="Card image"><div class="collapse" id="collapseExample'+obj["id"]+'"><div class="alert alert-primary mb-0"><table class="table table-dark"><thead class="thead-light"><tr class="text-center"><th scope="col">Матчі</th>';
        if(obj["position"] == "Воротар") {
            str+='<th scope="col"><i class="far fa-hand-rock fa-2x"></i></th>';
        }
        else {
            str+='<th scope="col"><i style="color:#000;"class="far fa-futbol fa-2x"></i></th>';
        }
        str+='<th scope="col"><i style="color:#ddda15" class="fas fa-sticky-note fa-2x"></i></th><th scope="col"><i style="color:#dd1515" class="fas fa-sticky-note fa-2x"></i></th></tr></thead><tbody><tr class="text-center"><td>'+obj["matches"] +'</td><td>'+obj["goals"] +'</td><td>'+obj["yellowcards"] +'</td><td>'+obj["redcards"] +'</td></tr></tbody></table></div></div><ul class="list-group list-group-flush"><li class="list-group-item">'+obj["position"]+'</li><li class="list-group-item">'+obj["citezenship"]+'</li><li class="list-group-item">'+obj["dateOfBirth"]+'</li><li hidden class="change list-group-item"><button data-id="'+obj["id"]+'" onclick="editPlayerShow(this.dataset.id)" type="button" class="btn btn-warning float-right"><i class="fas fa-edit"></i></button><button data-id="'+obj["id"]+'" onclick="deletePlayer(this.dataset.id)" type="button" class="btn btn-danger float-left"><i class="fas fa-trash"></i></button></li></ul></div>';
	}
	
    div.innerHTML = str;
    div.className = " col-md-4 col-sm-6 mb-4";
    resultBlock.appendChild(div);
  }
}
