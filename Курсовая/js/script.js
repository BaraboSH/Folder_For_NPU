"use strict";
window.addEventListener("load",function() {
		var main = document.getElementById("main");
	if(main) {
		main.addEventListener("keydown",init);
		function init(e) {
			if(e.shiftKey && e.ctrlKey && e.keyCode == 65)
				{
					alert("Спасибо Сергею за помощь в создании сайта");
				}
		}
	}
		});
enter.addEventListener("click",getPassword);
window.addEventListener('DOMContentLoaded',checkAdmin());
function checkAdmin() {
	if(localStorage["user"]) {
		var user = JSON.parse(localStorage["user"]);
		hiUser.innerHTML = '<strong><i class="fas fa-pencil-alt"></i> '+user[0].Login +'</strong>';
		switchElem();
	} 
			
}
function checkData() {	
	var login = document.getElementById("exampleInputLogin1");
	var password = document.getElementById("exampleInputPassword1");
	var submitButton = document.getElementById("enter");
	if(login.value == ""|| password.value == "") {
		submitButton.disabled = true;
	}
		else {
			submitButton.disabled = false;
		}
}
 function getPassword() {
	var form = new FormData( document.forms.logIN);
    var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/getPass.php");
  	xhr.send(form);
	xhr.onload = function() {
    	var res = this.response;
		if(res != "null") {
			localStorage.setItem("user",res);
			location.reload();
		}
		else {
			document.forms.logIN[0].value = "";
			document.forms.logIN[1].value = "";
			wrongAlert.removeAttribute("hidden");
		}
  	}
	
  }
function logout () {
	localStorage.clear();
	switchElem();
}
function switchElem () {
		var elems = document.getElementsByClassName("change");
		for (var i = 0; i < elems.length; i++) {
    		if (elems[i].matches('[hidden]')) {
				elems[i].removeAttribute("hidden");
				elems[i].setAttribute("data","");
    		}
			else if(elems[i].matches('[data]')) {
				elems[i].removeAttribute("data");
				elems[i].setAttribute("hidden","");
			}
  }
}
function clearInputs() {
	document.editAddPlayer.reset();
	document.editAddPlayer.id = "addPlayer";
	headOfForm.textContent = "Добавление игрока";
	submitButPlayer.textContent = "Добавить";
	document.editAddPlayer.removeEventListener("submit",editPlayer);
	document.editAddPlayer.addEventListener("submit",addPlayer);
}
function hideAlert() {
	wrongAlert.setAttribute("hidden","");
}
function deletePlayer (player) {
	var formData = new FormData();
	formData.append("id",player);
	var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/deletePlayer.php");
  	xhr.send(formData);
	location.reload();
}
function editPlayerShow(player) {
	headOfForm.textContent = "Редактирование игрока";
	submitButPlayer.textContent = "Сохранить";
	document.editAddPlayer.id = "editPlayer";
	document.editAddPlayer.removeEventListener("submit",addPlayer);
	document.editAddPlayer.addEventListener("submit",editPlayer);
	var form = new FormData();
	form.append("id",player);
    var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/getPlayerByID.php");
  	xhr.send(form);
	xhr.onload = function() {
    	var res = this.response;
		if(res != "null") {
			var result = JSON.parse(res);
			setInputs(result[0]);
		}
  	}
}
function setInputs(obj) {
	var form = document.editAddPlayer;
	form.id.value = obj["id"];
	form.FName.value = obj["Fname"];
	form.LName.value = obj["Lname"];
	form.City.value = obj["citezenship"];
	form.Date.value = obj["dateOfBirth"];
	form.Number.value = obj["gameNumber"];
	form.Photo.value = obj["photo"];
	form.Position.value = obj["position"];
	$('#editAddMenu').modal();
	
}
function editPostShow(post) {
	headOfFormPost.textContent = "Редактирование статьи";
	submitButPost.textContent = "Сохранить";
	document.editAddPost.id = "editPost";
    document.editAddPost.removeEventListener("submit",addPost);
	document.editAddPost.addEventListener("submit",editPost);
	var form = new FormData();
	form.append("id",post);
    var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/getPostByID.php");
  	xhr.send(form);
	xhr.onload = function() {
    	var res = this.response;
		if(res != "null") {
			var result = JSON.parse(res);
			setInputsPost(result[0]);
		}
  	}
}
function setInputsPost(obj) {
	var form = document.editAddPost;
	form.id.value = obj["id"];
	form.Photo.value = obj["urlPhoto"];
	form.Date.value = obj["dateOfPublic"];
	form.Text.value = obj["text"];
	$('#editAddPost').modal();
}
function editPlayer () {
	var form = new FormData(document.editAddPlayer);
    var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/editPlayer.php");
  	xhr.send(form);
}
function addPlayer () {
	var form = new FormData(document.editAddPlayer);
	var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/addPlayer.php");
  	xhr.send(form);
}
function clearInputsPost() {
	document.editAddPost.reset();
	document.editAddPost.id = "addPost";
	headOfFormPost.textContent = "Добавление игрока";
	submitButPost.textContent = "Добавить";
	document.editAddPost.removeEventListener("submit",editPost);
	document.editAddPost.addEventListener("submit",addPost);
}
function editPost () {
	var form = new FormData(document.editAddPost);
    var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://siteforteam/php/editPost.php");
  	xhr.send(form);
}
function addPost () {
	var form = new FormData(document.editAddPost);
    var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/addPost.php");
  	xhr.send(form);
}
