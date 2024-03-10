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
    ourGames.scrollIntoView();
    CKInfo.style.display = "flex";
    setTimeout(function() {
        CKInfo.style.opacity = "1";
        CKInfo.style.transform = "translateY(0%)";
  }, 1);
    fullNav.style.opacity = "0";
    fullNav.style.pointerEvents = "none";    
})
RPRT.addEventListener("click", () =>{
    ourGames.scrollIntoView();
    RPRTInfo.style.display = "flex";
    setTimeout(function() {
        RPRTInfo.style.opacity = "1";
        RPRTInfo.style.transform = "translateY(0%)";
  }, 1);
    fullNav.style.opacity = "0";
    fullNav.style.pointerEvents = "none";    
})
LAD.addEventListener("click", () =>{
    ourGames.scrollIntoView();
    LADInfo.style.display = "flex";
    setTimeout(function() {
        LADInfo.style.opacity = "1";
        LADInfo.style.transform = "translateY(0%)";
  }, 1);
    fullNav.style.opacity = "0";
    fullNav.style.pointerEvents = "none";    
});

[...closeBtn].forEach((element) => {
    element.addEventListener('click', (event) => {
    CKInfo.style.transform = "translateY(10%)";
    CKInfo.style.opacity = "0";
    setTimeout(function() {
        CKInfo.style.display = "none";
  }, 300);
    RPRTInfo.style.transform = "translateY(10%)";
    RPRTInfo.style.opacity = "0";
    setTimeout(function() {
        RPRTInfo.style.display = "none";
  }, 300);
      LADInfo.style.transform = "translateY(10%)";
      LADInfo.style.opacity = "0";
    setTimeout(function() {
        LADInfo.style.display = "none";
  }, 300);
      fullNav.style.opacity = "1";
      fullNav.style.pointerEvents = "auto";
    });
});
// if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
//     style.appendChild(document.createTextNode(cssRule));
//     document.head.appendChild(style);
// }