window.onload = setWelcome();

function setWelcome() {
  changeToPage("/home", "welcome_button");
}

function setResume() {
  changeToPage("/resume", "resume_button");
}

function setProjects() {
  changeToPage("/projects", "projects_button");
}

function changeToPage(page, button) {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        $('#VolatileSection').empty();
        $('#VolatileSection').append(this.responseText);

        clearButtons();

        setButton(button);
      }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
}

function setButton(id) {
  var button = document.getElementById(id);
  button.classList.remove('NavButton');
  button.classList.add('NavButtonS');
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

function openPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.add("show");
}

function closePopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.remove("show");
}