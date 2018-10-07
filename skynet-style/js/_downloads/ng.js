var app = angular.module("skynet", []);

var gamelist = GameData

var weblist = [
    {
        "name": "poptropica",
        "alt": "Poptropica",
        "url": "https://www.poptropica.com"
    }
]

class Game {
    constructor(name, bindingAddress, imageAddress, altText) {
        this.name = name;
        this.bindingAddress = bindingAddress;
        this.imageAddress = imageAddress;
        this.altText = altText;
    }
}

var games = [];
for(i = 0; i < gamelist.length; i++)
{
    games.push(new Game(
        gamelist[i].name,
        " 	https://s3.us-east-2.amazonaws.com/skynet-game-files/" + gamelist[i].name + ".zip",
        "https://s3.us-east-2.amazonaws.com/skynet-game-images/" + gamelist[i].name + ".jpg",
        gamelist[i].alt
    ));
}
for(i = 0; i < weblist.length; i++)
{
    games.push(new Game(
        weblist[i].name,
        weblist[i].url,
        "https://s3.us-east-2.amazonaws.com/skynet-game-images/" + weblist[i].name + ".jpg",
        weblist[i].alt
    ));
}

games.sort(function (a, b) {
    if(a.altText < b.altText) return -1;
    if(a.altText > b.altText) return 1;
    return 0;
})

app.controller("GameController", function() {
    var gameController = this;
    gameController.games = games;
})