var game = [];
var user = [];
var rand = "Green";
var count = 0;
var counter = 0;
var userCount = 0;
var n = 0;

$(document).ready(function() {
    $('.outer').click(power)
    $('#start').click(startGame)
});

let colors = ["Green", "Red", "Yellow", "Blue"]

function power() {

    if ($('.outer').hasClass('outer-inactive')) {

        $('.outer').removeClass('outer-inactive');
        $('.outer').addClass('outer-active');

    } else {


        $('.outer').removeClass('outer-active');
        $('#start').removeClass('game-active');
        $('.outer').addClass('outer-inactive');
    }
}

function startGame() {
    n = 0;
    game = [];
    user = [];
    count = 0;
    counter = 0;
    userCount = 0;
    if ($('.outer').hasClass('outer-active')) {
        $('#start').addClass('game-active');
        runGame();
    } else {
        console.log("game is off")
    }

}

function reset() {
    $("#Green").removeClass("highlightGreen");
    $("#Red").removeClass("highlightRed");
    $("#Yellow").removeClass("highlightYellow");
    $("#Blue").removeClass("highlightBlue");
}

function random() {
    rand = colors[Math.floor(Math.random() * 4)]
    game.push[rand];
    console.log(rand);
}
//add css(background-color)
function yellow() {
    reset()
    $("#Yellow").addClass("highlightYellow");
}

function red() {
    reset()
    $("#Red").addClass("highlightRed");
}

function blue() {
    reset()
    $("#Blue").addClass("highlightBlue");

}

function green() {
    reset()
    $("#Green").addClass("highlightGreen");
}

function simon() {
    if (rand == "Green")
        green();
    if (rand == "Red")
        red();
    if (rand == "Yellow")
        yellow();
    if (rand == "Blue")
        blue()
}

function runGame() {
    var Machine = setInterval(function() {

        reset()
        random()
        console.log(rand)
        simon()

        count++;
    }, 750)


}