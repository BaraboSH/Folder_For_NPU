"use strict";
//Убираю стандартное поведение браузера
$( function() {
            $('form').submit(function() {
                return false;
            });
        });


//Добавляю пасхалку
window.addEventListener("load",function() {
	var main = document.getElementById("main");
	if(main) {
		main.addEventListener("keydown",init);
		function init(e) {
			if(e.shiftKey && e.ctrlKey && e.keyCode == 65)
					alert("Спасибо Сергею за помощь в создании сайта");
		}
	}
		});




//Событые на нажатие кнопки входа
enter.addEventListener("click",getPassword);


// Проверка на вход
window.addEventListener('DOMContentLoaded',checkAdmin());
function checkAdmin() {
	if(localStorage["user"]) {
		var user = JSON.parse(localStorage["user"]);
		hiUser.innerHTML = '<strong><i class="fas fa-pencil-alt"></i> '+user[0].Login +'</strong>';
		switchElem();
	} 
			
}



//Проверка введенные ли данные
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


//Проверка пароля
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


//Выход с аккаунта
function logout () {
	localStorage.clear();
	switchElem();
}



//Смена данных при входе
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


//Скрыть окно ошибки
function hideAlert() {
	wrongAlert.setAttribute("hidden","");
}


//Очистить поля перед добавлением и изменить надписи
function clearInputs() {
	document.editAddPlayer.reset();
	document.editAddPlayer.id = "addPlayer";
	headOfForm.textContent = "Добавление игрока";
	submitButPlayer.textContent = "Добавить";
	document.editAddPlayer.removeEventListener("submit",editPlayer);
	document.editAddPlayer.addEventListener("submit",addPlayer);
}


//Удалить игрока
function deletePlayer (player) {
	var formData = new FormData();
	formData.append("id",player);
	var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/deletePlayer.php");
  	xhr.send(formData);
	location.reload();
}



//Изменить игрока
function editPlayer () {
	var form = new FormData(document.editAddPlayer);
    var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/editPlayer.php");
  	xhr.send(form);
	location.reload();
}



//Добавить игрока
function addPlayer () {
	var form = new FormData(document.editAddPlayer);
	var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/addPlayer.php");
  	xhr.send(form);
	location.reload();
}



//Сделать запрос по игроку на изменение
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
//Установить значения в инпуты
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

//Сделать запрос по статьи на изменение
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


//Установить значения в инпуты (статьи)
function setInputsPost(obj) {
	var form = document.editAddPost;
	form.id.value = obj["id"];
	form.Photo.value = obj["urlPhoto"];
	form.Date.value = obj["dateOfPublic"];
	form.Text.value = obj["text"];
	$('#editAddPost').modal();
}



//Очистить поля перед добавлением и изменить надписи
function clearInputsPost() {
	document.editAddPost.reset();
	document.editAddPost.id = "addPost";
	headOfFormPost.textContent = "Добавление игрока";
	submitButPost.textContent = "Добавить";
	document.editAddPost.removeEventListener("submit",editPost);
	document.editAddPost.addEventListener("submit",addPost);
}


//Изменить статью
function editPost () {
	var form = new FormData(document.editAddPost);
    var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://siteforteam/php/editPost.php");
  	xhr.send(form);
	location.reload();
}


//Добавить статью
function addPost () {
	var form = new FormData(document.editAddPost);
    var xhr = new XMLHttpRequest();
  	xhr.open("POST", "http://siteforteam/php/addPost.php");
  	xhr.send(form);
	location.reload();
}
