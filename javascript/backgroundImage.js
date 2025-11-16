setTimeout(function() {bodyBackgroundDIV(); }, 2000); 

function bodyBackgroundDIV(){
  var bodyDiv = document.getElementsByClassName("bodyDIVContainer");
  fadeIn(bodyDiv);
}

function fadeIn(bodyDiv) {
    bodyDiv[0].style.opacity = 1;
    var showingImage = function () {
        bodyDiv[0].style.opacity = bodyDiv[0].style.opacity - 0.01;
        if (bodyDiv[0].style.opacity == 0) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    showingImage();
}
