const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return src.lamp.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!lampBroken ()) {
    lamp.src = './img/lâmpada ligada.jpg';
    }
}

function lampOff () {
    if (!lampBroken ()) {
    lamp.src = './img/lâmpada desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/lâmpada quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);