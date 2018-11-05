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
    $("#Yellow").click(function() {
        console.log("here in");
        yellow();
        user.push("Yellow");
        userPlay();
    })

    $("#Green").click(function() {
        console.log("here in");
        green()
        user.push("Green")
        userPlay();
    })

    $("#Blue").click(function() {
        console.log("here in");
        blue()
        user.push("Blue")
        userPlay();
    })
    $("#Red").click(function() {
        console.log("here in");
        green()
        user.push("Red")
        userPlay();
    })
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
        $("#Yellow").removeClass("winner");
        $("#Green").removeClass("winner");
        $("#Red").removeClass("winner");
        $("#Blue").removeClass("winner");
        $("#Yellow").removeClass("loser");
        $("#Green").removeClass("loser");
        $("#Red").removeClass("loser");
        $("#Blue").removeClass("loser");
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
        $("#Yellow").removeClass("winner");
        $("#Green").removeClass("winner");
        $("#Red").removeClass("winner");
        $("#Blue").removeClass("winner");
        $("#Yellow").removeClass("loser");
        $("#Green").removeClass("loser");
        $("#Red").removeClass("loser");
        $("#Blue").removeClass("loser");
        Machine();
    } else {
        console.log("game is off")
    }

}

function Machine() {
    var Machine = setTimeout(function() {

        reset()
        random()

        simon()
            // count++;
        setTimeout(function() {
            reset()
        }, 500)
    }, 750)
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





function userPlay() {
    if (user[userCount] == game[counter] && game.length == user.length && game.length == 5) {
        {
            $("#Yellow").addClass("winner");
            $("#Green").addClass("winner");
            $("#Red").addClass("winner");
            $("#Blue").addClass("winner");
            console.log("game over ,you win!");

        }
    } else if (user[userCount] == game[counter] && game.length == user.length) {
        {
            user = [];
            userCount = 0;
            setTimeout(function() {
                counter++;
                reset();
                newRound();
            }, 500)
        }
    } else if (user[userCount] == game[counter]) {
        console.log("correct!")
        userCount++;
        setTimeout(reset(), 500);
    } else {

        setTimeout(function() {
            repeatColors()
        }, 750)

    }


}

function repeat() {
    if (game[n] == "Green") {
        n++
        green()
    } else if (game[n] == "Red") {
        n++
        red();
    } else if (game[n] == "Yellow") {
        n++;
        yellow();

    } else {
        n++;
        blue();
    }
}

function repeatColors() {
    function clear() {
        clearInterval(timeFunction);
    }
    let timeFunction = setInterval(
        function() {
            reset()
            if (n != game.length) {
                repeat()
            } else if (n == game.length) {
                user = [];
                userCount = 0;
                n = 0;
                clear();
            }
        }, 750)
}

function newRound() {
    function clear() {
        clearInterval(timeFunction);
    }
    let timeFunction = setInterval(
        function() {
            reset()
            if (n != game.length) {
                repeat();
            } else if (n == game.length) {
                user = [];
                userCount = 0;
                n = 0;
                clear();
                Machine();
            }
        }, 750)
}