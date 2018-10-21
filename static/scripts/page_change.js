window.onload = setWelcome();

function setWelcome() {
    setElementToFile("MainText", "static/welcome.txt");

    clearButtons();

    document.getElementById("welcome_button").style.backgroundColor =
      "rgba(25, 129, 190, 0.7)";
}

function setResume() {
  setElementToFile("MainText", "static/resume.txt");

  //$('head').append('<link rel="stylesheet" type="text/css" href="static/resume.css"/>');
  $("article").empty()
  $(".TopHeader").css("margin-left", "10%");
  var more_info = $('<h2 class="TopHeader" id="SecondHead">hallo</h2>');
  $(".TopHeader").after(more_info);

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