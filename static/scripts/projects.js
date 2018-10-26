var pDir = "static/pages/projects/";
var projects = ["vgi", "mre", "pios"];

$(function() {
    $('.coverflow').coverflow();

    if ($.fn.reflect) {
        $('.projects .cover').reflect();
    }

    $('.projects').coverflow({
        duration:		1000,
        index:			3,
        width:			320,
        height:			240,

        selectedCss:	{	opacity: 1	},
        outerCss:		{	opacity: .1	},

        before:			function() {
            $('#photos-name').stop(true).fadeOut('fast');
        },

        select:			function(event, cover) {
            var pIndex = $(cover).index();
            setDesc(pDir + projects[pIndex] + ".html");
        },
    });
});

function setDesc(page)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        $('#projDesc').empty();
        $('#projDesc').append(this.responseText);

        clearButtons();

        setButton(button);
      }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
}