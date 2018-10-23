window.onload = setWelcome();

function setWelcome() {

    $('link').remove();
    $('head').append('<link rel="stylesheet" type="text/css" href="static/general.css"/>');
    $('head').append('<link rel="stylesheet" type="text/css" href="static/welcome.css"/>');
    $('h1').not('#FirstHead').remove();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        $('#VolatileSection').empty();
        $('#VolatileSection').append(this.responseText);

        clearButtons();

        setButton('welcome_button');

        setElementToFile("MainText", "static/welcome.txt");
      }
    };
    xhttp.open("GET", "/home", true);
    xhttp.send();
}

function setButton(id) {
  var button = document.getElementById(id);
  button.classList.remove('NavButton');
  button.classList.add('NavButtonS');
}

function setResume() {
  $('resumeCSS').remove();
  $('link').remove();
  $('head').append('<link rel="stylesheet" type="text/css" href="static/general.css"/>');
  $('head').append('<link rel="stylesheet" type="text/css" href="static/resume.css" id="resumeCSS"/>');

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      $('#VolatileSection').empty();
      $('#VolatileSection').append(this.responseText);

      clearButtons();

      setButton('resume_button');
    }
  };
  xhttp.open("GET", "/resume", true);
  xhttp.send();


}

function clearButtons()
{
  var x = document.getElementsByTagName("button");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].classList.remove("NavButtonS");
      x[i].classList.add("NavButton");
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
}