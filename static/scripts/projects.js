var pDir = "static/pages/projects/";
var projects = ["vgi", "mass-springs", "ray-tracer", "mre", "haptics", "vWorld", "pios",
    "boids", "orrery"];

$(function() {
    $('.coverflow').coverflow();

    if ($.fn.reflect) {
        $('.projects .cover').reflect();
    }

    $('.projects').coverflow({
        duration:		1000,
        index:			0,
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
            
            var img = $(cover).children().andSelf().filter('img').last();
			$('#photos-name').text(img.data('name') || 'unknown').stop(true).fadeIn('fast');
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
      }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
}