setTimeout(function() {mainDivWrapper(); }, 5000); 

function mainDivWrapper(){
  let mainDiv = document.getElementById(wrapper);
  fadeIn(mainDiv);
}

function fadeIn(mainDiv) {
    mainDiv.style.opacity = 0;
    var showingImage = function () {
        mainDiv.style.opacity = +mainDiv.style.opacity + 0.01;
        if (+mainDiv.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    showingImage();
}

























