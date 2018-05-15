"use strict";
window.addEventListener('DOMContentLoaded',getPosts());
function getPosts() {
	var xhr = new XMLHttpRequest();
 	xhr.open("POST", "http://siteforteam/php/getAllPosts.php");
 	xhr.send();
  	var res;
  	xhr.onload = function() {
    	res = JSON.parse( this.response );
    	printPosts(res);
  	}
}
function printPosts(res) {
	var resultBlock = document.getElementById("result");
  	resultBlock.innerHTML = "";
  	var resultStr = "";
  	for (var i = 0; i < res.length; i++) {
    var div = document.createElement("div");
    var obj = res[i];
		var str = "";
		if(localStorage["user"]) {
			str+='<div class="card mb-4 box-shadow"><img class="card-img-top" style="height: 225px; width: 100%; display: block;" src="'+obj["urlPhoto"] +'" data-holder-rendered="true"><div class="card-body"><p class="card-text text-truncate">'+obj["text"]+'</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button onclick="getFullPost(this.dataset.id)" type="button" data-id="'+obj["id"]+'" class="btn btn-sm btn-outline-secondary">Подробнее</button><button already type="button" data-id="'+obj["id"]+'" class="change btn btn-sm btn-outline-secondary" onclick="editPostShow(this.dataset.id)">Редактировать</button></div><small class="text-muted d-block">'+obj["dateOfPublic"]+'</small></div></div> </div>';
		} 
		else {
			str+='<div class="card mb-4 box-shadow"><img class="card-img-top" style="height: 225px; width: 100%; display: block;" src="'+obj["urlPhoto"] +'" data-holder-rendered="true"><div class="card-body"><p class="card-text text-truncate">'+obj["text"]+'</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button onclick="getFullPost(this.dataset.id)" type="button" data-id="'+obj["id"]+'" class="btn btn-sm btn-outline-secondary">Подробнее</button><button hidden type="button" data-id="'+obj["id"]+'" class="change btn btn-sm btn-outline-secondary" onclick="editPostShow(this.dataset.id)">Редактировать</button></div><small class="text-muted d-block">'+obj["dateOfPublic"]+'</small></div></div> </div>';
		}
			
    div.innerHTML = str;
    div.className = " col-md-4 col-sm-6 mb-4";
    resultBlock.appendChild(div);
  }
}
