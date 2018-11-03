$(document).ready(function() {
    $('.outer').click(power)
        //$('#start').click(StartGame)
});
let onoff = "off";

function power() {

    if (onoff == "off") {
        onoff = "on";
        $('.outer').removeClass('outer-inactive');
        $('.outer').addClass('outer-active');

    } else {
        //console.log("hi there");
        onoff = "off"
        $('.outer').removeClass('outer-active');

        $('.outer').addClass('outer-inactive');
    }
}