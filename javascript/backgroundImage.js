setTimeout(function() {backgroundImage(); }, 9000); 

function backgroundImage(){
  const img = document.createElement('img');
  img.src = 'url(../design/images/background.png)';
  var image = "url(../design/images/background.png)";
  fadeIn(img);
}

function fadeIn(image) {
    image.style.opacity = 0;
    var showingImage = function () {
        image.style.opacity = +image.style.opacity + 0.01;
        document.body.style.backgroundImage = image;
        if (+image.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    showingImage();
}
