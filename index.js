const hamburger = document.querySelector(".hamburger-menu");
const fullNav = document.querySelector("header");
const mobileNav = document.querySelector("nav");
const style = document.createElement('style');
const cssRule = ".outline{ -webkit-text-stroke: .03em white; }";
const CK = document.querySelector("#ck-box");
const CKInfo = document.querySelector(".ck");
const RPRT = document.querySelector("#rprt-box");
const RPRTInfo = document.querySelector(".rprt");
const LAD = document.querySelector("#lad-box");
const LADInfo = document.querySelector(".lad");
const closeBtn = document.querySelectorAll(".x-button");
const ourGames = document.querySelector(".our-games");
const vid = document.querySelector("iframe");
const content = document.querySelectorAll('.hero, .about-us, .our-games-top');

let visible = false;
let media = window.matchMedia("(min-width: 900px)").matches;

window.onload = function() {
    const shadowRoot = document.querySelector('spline-viewer').shadowRoot;
    shadowRoot.querySelector('#logo').remove();
}
window.addEventListener('resize', () =>{
    if(window.innerWidth > 900){
        mobileNav.style.transform = "translateX(0%)";
        visible = false;
    } else if (window.innerWidth <= 900){
        mobileNav.style.transform = "translateX(110%)";
        visible = false;
    }
});

hamburger.addEventListener("click", () =>{
    if(visible === true){
        mobileNav.style.transform = "translateX(110%)";
        visible = false;
    } else{
        mobileNav.style.transform = "translateX(0%)";
        visible = true;
    }
})

CK.addEventListener("click", () =>{
    CKInfo.style.pointerEvents = "auto";
    CKInfo.style.display = "flex";
    CKInfo.scrollIntoView();
    setTimeout(function() {
        CKInfo.style.opacity = "1";
        CKInfo.style.transform = "translateY(0%)";
  }, 1);
    fullNav.style.opacity = "0";
    fullNav.style.pointerEvents = "none";
})
RPRT.addEventListener("click", () =>{
    RPRTInfo.style.pointerEvents = "auto";
    RPRTInfo.style.display = "flex";
    RPRTInfo.scrollIntoView();
    setTimeout(function() {
        RPRTInfo.style.opacity = "1";
        RPRTInfo.style.transform = "translateY(0%)";
  }, 1);
    fullNav.style.opacity = "0";
    fullNav.style.pointerEvents = "none";
})
LAD.addEventListener("click", () =>{
    LADInfo.style.pointerEvents = "auto";
    LADInfo.style.display = "flex";
    LADInfo.scrollIntoView();
    setTimeout(function() {
        LADInfo.style.opacity = "1";
        LADInfo.style.transform = "translateY(0%)";
  }, 1);
    fullNav.style.opacity = "0";
    fullNav.style.pointerEvents = "none";
});

[...closeBtn].forEach((element) => {
    element.addEventListener('click', (event) => {
    LADVid.stopVideo();
    RPRTVid.stopVideo();
    CKVid.stopVideo();
    CKInfo.style.transform = "translateY(10%)";
    CKInfo.style.opacity = "0";
    CKInfo.style.pointerEvents = "none";
    setTimeout(function() {
        CKInfo.style.display = "none";
  }, 500);
    RPRTInfo.style.transform = "translateY(10%)";
    RPRTInfo.style.opacity = "0";
    RPRTInfo.style.pointerEvents = "none";
    setTimeout(function() {
        RPRTInfo.style.display = "none";
  }, 500);
    LADInfo.style.transform = "translateY(10%)";
    LADInfo.style.opacity = "0";
    LADInfo.style.pointerEvents = "none";
    setTimeout(function() {
        LADInfo.style.display = "none";
  }, 500);
      fullNav.style.opacity = "1";
      fullNav.style.pointerEvents = "auto";
    });
});




// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    LADVid = new YT.Player('lad-vid');
    RPRTVid = new YT.Player('rprt-vid');
    CKVid = new YT.Player('ck-vid');
}
function onPlayerReady() {
}
// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
//     style.appendChild(document.createTextNode(cssRule));
//     document.head.appendChild(style);
// }