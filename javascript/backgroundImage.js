setTimeout(function() {bodyBackgroundDIV(); }, 2000); 

function bodyBackgroundDIV(){
  var bodyDiv = document.getElementById("bodyDIVContainer");
  fadeIn(bodyDiv);
}

function fadeIn(bodyDiv) {
    bodyDiv.style.opacity = 1;
    var showingImage = function () {
        bodyDiv.style.opacity = -bodyDiv.style.opacity - 0.01;
        if (-bodyDiv.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
            bodyDiv.style.opacity.background= none;
        }
    };
    showingImage();
}
