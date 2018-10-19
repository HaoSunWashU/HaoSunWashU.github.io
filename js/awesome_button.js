var docStyle = document.documentElement.style;
var mute_button = document.getElementById("mute_button");
var boundingClientRect = mute_button.getBoundingClientRect();

mute_button.onmousemove = function (e) {

    var x = e.clientX - boundingClientRect.left;
    var y = e.clientY - boundingClientRect.top;

    var xc = boundingClientRect.width / 2;
    var yc = boundingClientRect.height / 2;

    var dx = x - xc;
    var dy = y - yc;

    docStyle.setProperty('--rx', dy / -1 + 'deg');
    docStyle.setProperty('--ry', dx / 10 + 'deg');

};

mute_button.onmouseleave = function (e) {

    docStyle.setProperty('--ty', '0');
    docStyle.setProperty('--rx', '0');
    docStyle.setProperty('--ry', '0');

};

mute_button.onmousedown = function (e) {

    docStyle.setProperty('--tz', '-25px');

    var bgm = document.getElementById("BGM");
    bgm.muted = !bgm.muted;

    if(bgm.muted == true){
        mute_button.setAttribute("data-title", "UNMUTE");
    }else{
        mute_button.setAttribute("data-title", "MUTE");
    }
};

document.body.onmouseup = function (e) {

    docStyle.setProperty('--tz', '-12px');
};