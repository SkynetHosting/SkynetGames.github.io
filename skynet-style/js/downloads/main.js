var searchbox = document.getElementById("searchbox");

searchbox.onkeyup = function() {
    var input = searchbox.value;
    for (i = 0; i < gamelist.length; i++)
    {
        var element = document.getElementById("game-" + gamelist[i].name);		
        if(gamelist[i].alt.toLowerCase().includes(input.toLowerCase())) {
            element.style.display = "block";
		} else if(gamelist[i].dev.toLowerCase().includes(input.toLowerCase())) {
            element.style.display = "block";
		} else if(gamelist[i].pub.toLowerCase().includes(input.toLowerCase())) {
            element.style.display = "block";
        } else if (tagCheck(i, input)) {
			element.style.display = "block";
		} else {
            element.style.display = "none";
        }
    }
    for (i = 0; i < weblist.length; i++)
    {
       var element = document.getElementById("game-" + weblist[i].name);
        if(weblist[i].alt.toLowerCase().includes(input.toLowerCase())) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

function tagCheck(num, input) {
	for (x = 0; x < gamelist[num].tags.length; x++) {
		if(gamelist[num].tags[x].toLowerCase().includes(input.toLowerCase())) { return true; }
	}
}