let numberHtml = document.querySelector('#percent-html');
let circleHtml = document.querySelector('#circle-html');
let progressingHtml= document.querySelector('#progressing-html');

let numberCss = document.querySelector('#percent-css');
let circleCss = document.querySelector('#circle-css');
let progressingCss= document.querySelector('#progressing-css');

let numberJs = document.querySelector('#percent-js');
let circleJs = document.querySelector('#circle-js');
let progressingJs= document.querySelector('#progressing-js');

let numberRj = document.querySelector('#percent-rj');
let circleRj = document.querySelector('#circle-rj');
let progressingRj= document.querySelector('#progressing-rj');

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

export { mostrarHTML, mostrarCSS, mostrarJS, mostrarRJ};