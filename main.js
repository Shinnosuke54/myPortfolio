



// window.addEventListener("load", function(){
//     var loading = document.getElementsByClassName("loader");
// var loading_wrapper = document.getElementsByClassName("loader-wrap");
// loading.remove();
// loading-wrapper.remove();
// });

window.onload = function quitLoading() {
    // var loading = document.getElementsByClassName("loader");
    // var loading = document.querySelector(".loader");

    // loading-wrapper.remove();
const div = document.querySelector("div");
div.classList.remove("loader",'loader-wrap');
var loading = document.querySelector(".loader");

loading.style.animation = "none";
loading.style.margin = "0";
loading.style.opacity = "0";


// var loading_wrapper = document.getElementsByClassName("loader-wrap");
// loading_wrapper.style.height = "0";


};