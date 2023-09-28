const hamburger = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector("nav");
const style = document.createElement('style');
const cssRule = ".outline{ -webkit-text-stroke: .05em white; }";
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

if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    style.appendChild(document.createTextNode(cssRule));
    document.head.appendChild(style);
}