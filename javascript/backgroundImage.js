setTimeout(function() {backgroundImage(); }, 9000); 

function backgroundImage(){
  var image = "../design/images/background.png";
  fadeIn(image);
}

function fadeIn(image) {
    image.style.opacity = 0;
    var showingImage = function () {
        image.style.opacity = +mainDiv.style.opacity + 0.01;
        document.body.style.backgroundImage = image;
        if (+image.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    showingImage();
}
