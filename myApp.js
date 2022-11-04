var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function uusiElementti() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputField").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Kirjoita tekstikenttään jotain!");
    inputField.style.border = "3px solid red";
  } else {
    document.getElementById("myUL").appendChild(li);
    inputField.style.border = "none";
    function tallenna() {
      console.log();
      var tallennus = JSON.parse(localStorage.getItem("tehtävät")) || [];
      tallennus.push(inputValue);
      localStorage.setItem("tehtävät", JSON.stringify(tallennus));
    }
  }
  document.getElementById("inputField").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function hae() {
  var list = JSON.parse(localStorage.getItem("tehtävät"));

  if (list != null) {
    let kpl = list.length;

    for (i = 0; i < kpl; i++) {
      console.log(list[i]);
      document.getElementById("myUL").innerHTML += "<LI>" + list[i] + "</LI>";
    }
  }
}
