window.onload = setWelcome();

function setWelcome() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("MainText").innerHTML =
        this.responseText;

        clearButtons();

        document.getElementById("welcome_button").style.backgroundColor =
          "rgba(25, 129, 190, 0.7)";
      }
    };
    xhttp.open("GET", "static/welcome.txt", true);
    xhttp.send();
}

function clearSection() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("VolatileSection").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "templates/resume.html", true);
  xhttp.send();
}

function setResume() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("MainText").innerHTML =
      this.responseText;

      clearButtons();

      document.getElementById("resume_button").style.backgroundColor =
        "rgba(25, 129, 190, 0.7)";
    }
  };
  xhttp.open("GET", "static/resume.txt", true);
  xhttp.send();
}

function clearButtons()
{
  var x = document.getElementsByTagName("button");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = " rgba(0,0,0,0.6)";
  }
}