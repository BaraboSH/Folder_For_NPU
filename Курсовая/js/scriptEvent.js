"use strict";
window.addEventListener('load',function(){
    getAllPlayerToTable();
    addMatchToSelect(1);
});
window.addEventListener('DOMContentLoaded',	 function() {
	var xhr = new XMLHttpRequest();
 	xhr.open("POST", "http://siteforteam/php/getLeagueForSelect.php");
 	xhr.send();
	  var res;
	  xhr.onload = function() {
		res = JSON.parse( this.response );
        var select = document.getElementById("exampleSelectLeague");
		for(var i = 0; i < res.length; i++) {
			var option = document.createElement("option");
			option.setAttribute("value",res[i].id);
			option.innerHTML = res[i].name;
			select.appendChild(option);
		}
	  }
});
document.forms.matchEvent.addEventListener("submit",saveEvent);
function addMatchToSelect(id) {
    var form = document.forms.matchEvent;
    $('form input').val("");
    var checkbox = document.querySelectorAll('input[type="checkbox"]');
    for(var i = 0; i<checkbox.length; i++) {
        checkbox[i].checked = false;
    }
    var event = new Event("change");
    var xhr = new XMLHttpRequest();
    var form = new FormData();
    form.append("id",id);
    xhr.open("POST", "http://siteforteam/php/getMatchesFromLeague.php");
 	xhr.send(form);
	var res;
	xhr.onload = function() {
		res = JSON.parse( this.response );
        var select = document.getElementById("matchesFromLeague");
        select.innerHTML = "";
		for(var i = 0; i < res.length; i++) {
            var obj = res[i];
            var option = document.createElement("option");
            var str = '';
            var res1 = obj["finalResult"].slice(0,obj["finalResult"].indexOf(":"));
            var res2 = obj["finalResult"].slice(obj["finalResult"].indexOf(":")+1);
            str +=obj["idOfTour"] +'тур |  '
            if(obj["isHomeGame"] == 1) {
                str+='Нива Бузова '+res1+':'+res2+' '+obj["enemyTeam"];
            }
            else if(obj["isHomeGame"] == 0) {
                str+=obj["enemyTeam"]+' '+res2+':'+res1+' Нива Бузова';
            }
			option.setAttribute("value",obj.id);
			option.innerHTML = str;
            select.appendChild(option);
        }
        document.matchEvent.Match.dispatchEvent(event);
	}
}
function getAllPlayerToTable() {
    var xhr = new XMLHttpRequest();
     xhr.open("POST", "http://siteforteam/php/getAllPlayer.php");
     xhr.send();
      var res;
      xhr.onload = function() {
        res = JSON.parse( this.response );
        printPlayersInTable(res);
      }
}
function printPlayersInTable(res) {
    var resultTable = document.getElementById("players");
    resultTable.innerHTML = "";
    for(var i = 0; i<res.length; i++) {
        var resultRow = document.createElement("tr");
        var obj = res[i];
        var str = '';
        str = '<th>'+obj["id"]+'</th><td>' + obj["Fname"] + '</td><td>'+obj["Lname"]+'</td><td class="text-center"><input value="Yes" name="sostav-'+ obj["id"] +'"  type="checkbox"/></td><td class="text-center"><input min="0" name="substitute-'+ obj["id"] +'" class="w-25" type="number"/></td><td class="text-center"><input min="0"  name="goals-'+ obj["id"] +'" class="w-25" type="number"/></td><td class="text-center"><input min="0"  name="ycards-'+ obj["id"] +'" class="w-25" type="number"/></td><td class="text-center"><input min="0"  name="rcards-'+ obj["id"] +'" class="w-25" type="number"/></td>';
        resultRow.innerHTML = str;
        resultRow.className = "table-primary";
        resultTable.appendChild(resultRow);
    }
   
}
function getEventsForPlayer(id) {
    var form = document.forms.matchEvent;
    $('form input').val("");
    var checkbox = document.querySelectorAll('input[type="checkbox"]');
    for(var i = 0; i<checkbox.length; i++) {
        checkbox[i].checked = false;
    }
    var formData = new FormData();
    formData.append("id",id);
    var xhr = new XMLHttpRequest();
    xhr.open("POST","http://siteforteam/php/getEventsByMatch.php");
    xhr.send(formData);
    xhr.onload = function(){
       var res = JSON.parse(this.response);
       if(res != "null") {
          for(var i=0; i< res.length;i++) {
            var obj = res[i];
             if(obj["isInStart"] == 1) {
                form["sostav-"+(i+1)].checked = true;
             }
             else if(obj["isInStart"] == 0) {
                form["sostav-"+(i+1)].checked = false;
             }
             form["substitute-"+(i+1)].value = obj["substitute"];
             form["goals-"+(i+1)].value = obj["numberofGoals"];
             form["ycards-"+(i+1)].value = obj["isYellowCards"];
             form["rcards-"+(i+1)].value = obj["isRedCard"];

          }
        }
    };
}
function saveEvent() {
    var formData = new FormData(document.forms.matchEvent);
    var xhr = new XMLHttpRequest();
    xhr.open("POST","http://siteforteam/php/Events.php");
    xhr.send(formData);
    xhr.onload = function() {
        $('#saveOK').modal('show');
    }
}