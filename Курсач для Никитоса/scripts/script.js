"use strict";
function print(res) {
  var resultBlock = document.getElementById("result");
  resultBlock.innerHTML = "";
  var resultStr = "";
  for (var i = 0; i < res.length; i++) {
    var li = document.createElement("li");
    var obj = res[i];
    var str = "";
    for (var key in obj) {
      if (key == 'price') {
        str += obj[key] + ".грн ";
      } else if (key == 'id') {
        str += "<span class='badge badge-primary'>" + obj[key] + "</span>" + " ";
      } else if (key == 'storage') {
        str += obj[key] + ".шт ";  
      } else {
        str += obj[key] + " ";
      }
    }
      li.innerHTML = str;
      li.className = "list-group-item list-group-item-action";
      resultBlock.appendChild(li);
  }
}

function getAllData() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://practisephp/getAllData.php");
  xhr.send();
  var res;
  xhr.onload = function() {
    res = JSON.parse( this.response );
    print(res);
  }
}

function getMax() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://practisephp/getMax.php");
  xhr.send();
  var res;
  xhr.onload = function() {
    res = JSON.parse( this.response );
    print(res);
  }
}
function getMin() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://practisephp/getMin.php");
  xhr.send();
  var res;
  xhr.onload = function() {
    res = JSON.parse( this.response );
    print(res);
  }
}