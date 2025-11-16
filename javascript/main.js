setTimeout(function() {mainDivWrapper(); }, 5000); 

function mainDivWrapper(){
  var mainDiv = document.getElementsByClassName("wrapper");
  fadeIn(mainDiv);
}

function fadeIn(mainDiv) {
    mainDiv[0].style.opacity = 0;
    var showingImage = function () {
        mainDiv[0].style.opacity = +mainDiv[0].style.opacity + 0.01;
        if (+mainDiv[0].style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    showingImage();
}




























