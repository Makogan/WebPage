window.onload = setWelcome();

function setWelcome() {
    setElementToHTML("MainText", "static/welcome.txt");

    clearButtons();

    document.getElementById("welcome_button").style.backgroundColor =
      "rgba(25, 129, 190, 0.7)";
}

function setResume() {
  setElementToHTML("VolatileSection", "/resume");
  setElementToHTML("MainText", "static/resume.html");

  clearButtons();

  document.getElementById("resume_button").style.backgroundColor =
    "rgba(25, 129, 190, 0.7)";
}

function clearButtons()
{
  var x = document.getElementsByTagName("button");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = " rgba(0,0,0,0.6)";
  }
}

function setElementToHTML(elementID, file)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(elementID).innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}