setTimeout(function() {bodyBackgroundDIV(); }, 2000); 

function bodyBackgroundDIV(){
  var bodyDiv = document.getElementById("bodyDIVContainer");
  fadeIn(bodyDiv);
}

function fadeIn(bodyDiv) {
    bodyDiv.style.background.opacity = 1;
    var showingImage = function () {
        bodyDiv.style.background.opacity = -bodyDiv.style.background.opacity - 0.01;
        if (-bodyDiv.style.background.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    showingImage();
}
