var greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');


var game = [];
var user = [];
var rand = "Green";
var count = 0;
var counter = 0;
var userCount = 0;
var n = 0;
var strict = false;
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
        red()
        user.push("Red")
        userPlay();
    })
    $("#strict").click(function() {
        strictmode();
    })
});

let colors = ["Green", "Red", "Yellow", "Blue"]

function power() {

    if ($('.outer').hasClass('outer-inactive')) {

        $('.outer').removeClass('outer-inactive');
        $('.outer').addClass('outer-active');
        $("#display").css("color", "red")

    } else {

        $("#display").css("color", "#430710")
        $("#display").text("--")

        $('.outer').removeClass('outer-active');
        $('#start').removeClass('game-active');
        $('.outer').addClass('outer-inactive');
        $("#count").text("count");
        $("#count").css("color", "black");
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

function strictmode() {
    strict = !strict;
}

function startGame() {
    n = 0;
    game = [];
    user = [];
    count = 0;
    counter = 0;
    userCount = 0;
    document.getElementById("display").innerHTML = counter + 1;

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
    game.push(rand);
    console.log(rand);
}
//add css(background-color)
function yellow() {
    reset()
    $("#Yellow").addClass("highlightYellow");
    yellowAudio.play()
}

function red() {
    reset()
    $("#Red").addClass("highlightRed");
    greenAudio.play()
}

function blue() {
    reset()
    $("#Blue").addClass("highlightBlue");
    blueAudio.play()
}

function green() {
    reset()
    $("#Green").addClass("highlightGreen");
    greenAudio.play();
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
    if (user[userCount] == game[userCount] && game.length == user.length && game.length == 5) {
        {
            $("#Yellow").addClass("winner");
            $("#Green").addClass("winner");
            $("#Red").addClass("winner");
            $("#Blue").addClass("winner");
            console.log("game over ,you win!");

        }
    } else if (user[userCount] == game[userCount] && game.length == user.length) {
        {
            user = [];
            userCount = 0;
            console.log("round completed");
            setTimeout(function() {
                counter++;
                document.getElementById("display").innerHTML = counter + 1;
                reset();
                newRound();
            }, 500)
        }
    } else if (user[userCount] == game[userCount]) {
        console.log("correct!")
        userCount++;
        setTimeout(reset(), 500);
    } else if (strict) {
        console.log("you lose!!")
        userCount = 0;
        user = [];
        game = [];
        counter = 0;
        document.getElementById("display").innerHTML = "!!!";


        $("#Green").addClass("loser");
        $("#Red").addClass("loser");
        $("#Yellow").addClass("loser");
        $("#Blue").addClass("loser");
        setTimeout(function() {
            reset();
            document.getElementById("display").innerHTML = counter + 1;
            $("#Green").removeClass("loser");
            $("#Red").removeClass("loser");
            $("#Yellow").removeClass("loser");
            $("#Blue").removeClass("loser");
            Machine();
        }, 1750);
    } else {
        n = 0;

        document.getElementById("display").innerHTML = "!!!";
        // document.getElementById("gameTitle").innerHTML = "Wrong!";

        $("#Green").addClass("loser");
        $("#Red").addClass("loser");
        $("#Yellow").addClass("loser");
        $("#Blue").addClass("loser");
        setTimeout(function() {
            document.getElementById("display").innerHTML = counter + 1;
            $("#Green").removeClass("loser");
            $("#Red").removeClass("loser");
            $("#Yellow").removeClass("loser");
            $("#Blue").removeClass("loser");
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