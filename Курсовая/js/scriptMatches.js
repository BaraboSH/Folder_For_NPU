"use strict";
window.addEventListener('DOMContentLoaded',getAllMatches());
function getAllMatches() {
	var xhr = new XMLHttpRequest();
 	xhr.open("POST", "http://siteforteam/php/getAllMatches.php");
 	xhr.send();
  	var res;
  	xhr.onload = function() {
    	res = JSON.parse( this.response );
    	printPosts(res);
  	}
}
function printPosts (res) {
	var resultBlock = document.getElementById("result");
  	resultBlock.innerHTML = "";
  	var resultStr = "";
  	for (var i = 0; i < res.length; i++) {
		var div = document.createElement("div");
		var obj = res[i];
		var str = "";
		str+='<div class="card-header text-left bg-success text-white font-weight-bold text-md-center">'+obj["name"]+'<h5 class="text-center">'+obj["idOfTour"]+' тур</h5></div>';
		if(obj["isHomeGame"] == 1) {
			var res1 = obj["finalResult"].slice(0,obj["finalResult"].indexOf(":"));
			var res2 = obj["finalResult"].slice(obj["finalResult"].indexOf(":")+1);
			str+='<div class="card-body row" style="font-size:25px"><div class="col text-md-right">Нива Бузова</div><div class="badge badge-success mb-2 mb-md-0 col-md-auto mr-md-2 col-12">'+res1+'</div><div class="badge badge-success col-md-auto col-12">'+res2+'</div><div class="col">'+obj["enemyTeam"]+'</div></div>';
		}
		else if(obj["isHomeGame"] == 0){
			var res1 = obj["finalResult"].slice(0,obj["finalResult"].indexOf(":"));
			var res2 = obj["finalResult"].slice(obj["finalResult"].indexOf(":")+1);
			str+='<div class="card-body row" style="font-size:25px"><div class="col text-md-right">'+obj["enemyTeam"]+'</div><div class="badge badge-success mb-2 mb-md-0 col-md-auto mr-md-2 col-12">'+res2+'</div><div class="badge badge-success col-md-auto col-12">'+res1+'</div><div class="col">Нива Бузова</div></div>';
		}
		str+='<div class="card-footer text-left text-muted">'+obj["date"]+'</div>';
		div.innerHTML = str;
		div.className = "card w-75 mx-auto mb-3";
		resultBlock.appendChild(div);
	}
}
