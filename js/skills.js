let numberHtml = document.querySelector('#percent__html');
let circleHtml = document.querySelector('#circle__html');
let progressingHtml = document.querySelector('#progressing__html');

let numberCss = document.querySelector('#percent__css');
let circleCss = document.querySelector('#circle__css');
let progressingCss = document.querySelector('#progressing__css');

let numberJs = document.querySelector('#percent__js');
let circleJs = document.querySelector('#circle__js');
let progressingJs = document.querySelector('#progressing__js');

let numberRj = document.querySelector('#percent__rj');
let circleRj = document.querySelector('#circle__rj');
let progressingRj = document.querySelector('#progressing__rj');

let counterHtml = 0;
let counterCss = 0;
let counterJs = 0;
let counterRj = 0;


function mostrarHTML() {
    setInterval(() => {
        if (counterHtml == 90) {
            clearInterval();
        } else {
            counterHtml += 1;
            numberHtml.innerHTML = counterHtml + "%";
            progressingHtml.style.width = counterHtml + '%';
            circleHtml.style.left = counterHtml + '%';
        }
    }, 30);
}

function mostrarCSS() {
    setInterval(() => {
        if (counterCss == 75) {
            clearInterval();
        } else {
            counterCss += 1;
            numberCss.innerHTML = counterCss + "%";
            progressingCss.style.width = counterCss + '%';
            circleCss.style.left = counterCss + '%';
        }
    }, 30);
}

function mostrarJS() {
    setInterval(() => {
        if (counterJs == 55) {
            clearInterval();
        } else {
            counterJs += 1;
            numberJs.innerHTML = counterJs + "%";
            progressingJs.style.width = counterJs + '%';
            circleJs.style.left = counterJs + '%';
        }
    }, 30);
}
function mostrarRJ() {
    setInterval(() => {
        if (counterRj == 30) {
            clearInterval();
        } else {
            counterRj += 1;
            numberRj.innerHTML = counterRj + "%";
            progressingRj.style.width = counterRj + '%';
            circleRj.style.left = counterRj + '%';
        }
    }, 30);
}

export { mostrarHTML, mostrarCSS, mostrarJS, mostrarRJ };