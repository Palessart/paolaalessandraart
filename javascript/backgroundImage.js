setTimeout(function() {bodyBackgroundDIV(); }, 2000); 

function bodyBackgroundDIV(){
  var bodyDiv = document.getElementById("bodyDIVContainer");
  fadeIn(bodyDiv);
}

function fadeIn(bodyDiv) {
    bodyDiv.style.opacity = 0;
    var showingImage = function () {
        bodyDiv.style.opacity = +bodyDiv.style.opacity + 0.01;
        if (+bodyDiv.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    showingImage();
}
