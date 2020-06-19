var buttonHide = document.getElementById('button-hide');
/*var aboutCloseButton1 = document.getElementById('about-close-button1')*/
var title = document.getElementById('title');

/*aboutCloseButton1.onclick = function(){
    title.classList.remove("open")
}*/
buttonHide.onclick = function(){
    title.classList.add("hide");
};