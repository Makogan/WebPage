window.onload = setWelcome();

function setWelcome() {

    $('link').remove();
    $('head').append('<link rel="stylesheet" type="text/css" href="static/general.css"/>');
    $('h1').not('#FirstHead').remove();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        $('#VolatileSection').empty();
        $('#VolatileSection').append(this.responseText);
      }
    };
    xhttp.open("GET", "/home", true);
    xhttp.send();

    clearButtons();

    document.getElementById("welcome_button").style.backgroundColor =
      "rgba(25, 129, 190, 0.7)";


    setElementToFile("MainText", "static/welcome.txt");
}

function setResume() {
  $('resumeCSS').remove();
  $('head').append(
    '<link rel="stylesheet" type="text/css" href="static/resume.css" id="resumeCSS"/>');

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      $('#VolatileSection').empty();
      $('#VolatileSection').append(this.responseText);
    }
  };
  xhttp.open("GET", "/resume", true);
  xhttp.send();

  clearButtons();

  document.getElementById("resume_button").style.backgroundColor =
    "rgba(25, 129, 190, 0.7)";
}

function clearButtons()
{
  var x = document.getElementsByTagName("button");
  var i;
  for (i = 0; i < x.length; i++) {
      var color = getComputedStyle(document.body).getPropertyValue('--button_background_color');
      x[i].style.backgroundColor = color;
  }
}

function setElementToFile(elementID, file)
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

function openPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.add("show");
}

function closePopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.remove("show");
  $("#myPopup").classList.remove("show");
}