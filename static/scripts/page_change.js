window.onload = setWelcome();

function setWelcome() {
    setElementToFile("MainText", "static/welcome.txt");

    clearButtons();

    document.getElementById("welcome_button").style.backgroundColor =
      "rgba(25, 129, 190, 0.7)";
}

function setResume() {
  setElementToFile("MainText", "static/resume.txt");

  $('head').append('<link rel="stylesheet" type="text/css" href="static/resume.css"/>');
  $("article").empty()
  $(".TopHeader").css("margin-left", "10%");

  var more_info = $('<div class="TopHeader"></div> id="SecondHead"');

  more_info.append(
    $('<a target="_blank" href="https://github.com/Makogan">\
      <img src="static/images/GitHub-Mark.png" width="64px" height="64px" alt="github">\
      </a>'));
  more_info.append(
    $('<a target="_blank" href="https://gitlab.com/Makogan">\
      <img src="static/images/gitlab_logo.png" alt="github" width="64px" height="64px">\
      </a>'));
  more_info.append(
    $('<a target="_blank" href="https://www.linkedin.com/in/camilo-talero-3906a9167/">\
      <img src="static/images/linkedin_logo.png" alt="github" width="64px" height="64px">\
      </a>'));
  more_info.append(
    $('<a target="_blank" href="https://www.linkedin.com/in/camilo-talero-3906a9167/">\
      <img src="static/images/mail.png" alt="github" width="64px" height="64px">\
      </a>'));


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