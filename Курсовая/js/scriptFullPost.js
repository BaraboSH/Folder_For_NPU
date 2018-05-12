"use strict";
window.addEventListener('DOMContentLoaded',getFullPost());
function getFullPost() {
	var form = new FormData();
	var id = location.href.slice(location.href.indexOf("=")+1);
	var xhr = new XMLHttpRequest();
 	xhr.open("POST", "http://siteforteam/php/getFullPost.php");
 	form.append("id",id);
	xhr.send(form);
  	var res;
  	xhr.onload = function() {
    	res = JSON.parse( this.response );
		printResult(res[0]);
  	}
}
function printResult(obj) {
	var resultBlock = document.getElementById("result");
  	resultBlock.innerHTML = "";
  	var resultStr = "";
    var div = document.createElement("div");
    var str = "";
	str+='<img style=" width: 100%; display: block;" class="card-img-top img-fluid" src="'+obj["urlPhoto"]+'" alt="Photo"><div class="card-body"><p class="card-text" style="white-space:pre-wrap;">'+obj["text"]+'</p></div>';
    div.innerHTML = str;
    div.className = "card";
    resultBlock.appendChild(div);
}