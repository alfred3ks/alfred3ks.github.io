let numberHtml = document.getElementById('percent-html');
let circleHtml = document.getElementById('circle-html');
let progressingHtml= document.getElementById('progressing-html');

let numberCss = document.getElementById('percent-css');
let circleCss = document.getElementById('circle-css');
let progressingCss= document.getElementById('progressing-css');

let numberJs = document.getElementById('percent-js');
let circleJs = document.getElementById('circle-js');
let progressingJs= document.getElementById('progressing-js');

let numberRj = document.getElementById('percent-rj');
let circleRj = document.getElementById('circle-rj');
let progressingRj= document.getElementById('progressing-rj');

let counterHtml = 0;
let counterCss = 0;
let counterJs = 0;
let counterRj = 0;


function mostrarHTML(){
    setInterval(()=>{
    if(counterHtml == 90){
        clearInterval();
    } else {
        counterHtml  += 1;
        numberHtml.innerHTML = counterHtml + "%";
        progressingHtml.style.width = counterHtml + '%';
        circleHtml.style.left = counterHtml + '%';
    }
} ,30);
}

function mostrarCSS(){
    setInterval(()=>{
        if(counterCss == 75){
            clearInterval();
        } else {
            counterCss  += 1;
            numberCss.innerHTML = counterCss  + "%";
            progressingCss.style.width = counterCss + '%';
            circleCss.style.left = counterCss  + '%';
        }
    } ,30);
}

function mostrarJS(){
    setInterval(()=>{
        if(counterJs == 55){
            clearInterval();
        } else {
            counterJs  += 1;
            numberJs.innerHTML = counterJs  + "%";
            progressingJs.style.width = counterJs + '%';
            circleJs.style.left = counterJs  + '%';
        }
    } ,30);
}
function mostrarRJ(){
    setInterval(()=>{
        if(counterRj == 30){
            clearInterval();
        } else {
            counterRj  += 1;
            numberRj.innerHTML = counterRj  + "%";
            progressingRj.style.width = counterRj + '%';
            circleRj.style.left = counterRj  + '%';
        }
    } ,30);
}

// mostrarHTML();
// mostrarCSS();
// mostrarJS();
// mostrarRJ();

export { mostrarHTML, mostrarCSS, mostrarJS, mostrarRJ};