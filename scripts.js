var digital_clock = document.getElementById('digital_clock');



var time = getDigitalClock();
digital_clock.innerText = time;

setInterval( function() {
    time = getDigitalClock();
    digital_clock.innerText = time;
}, 1000 );

function getDigitalClock () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
}