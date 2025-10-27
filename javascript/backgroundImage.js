setTimeout(function() {backgroundImage(); }, 9000); 

function backgroundImage(){
  const image = document.createElement('image');
  image.src = 'url(../design/images/background.png)';
  fadeIn(image);
}

function fadeIn(image) {
    const example = document.getElementById('bodyID').style.backgroundImage;
    image.style.opacity = 0;
    document.getElementById('bodyID').style.backgroundImage = image;
    const example2 = document.getElementById('bodyID').style.backgroundImage;
    var showingImage = function () {
        image.style.opacity = +image.style.opacity + 0.01;
        if (+image.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    
    showingImage();
}
