setTimeout(function() {backgroundImage(); }, 9000); 

function backgroundImage(){
  const image = document.createElement('image');
  image.src = 'url(../design/images/background.png)';
  fadeIn(image);
}

function fadeIn(image) {
    image.style.opacity = 0;
    var showingImage = function () {
        image.style.opacity = +image.style.opacity + 0.01;
        document.body.style.backgroundImage = image;
        var seeImage = image;
        let body = document.querySelector('#bodyID');
        const bodyStyle = window.getComputedStyle(body);
        let currentBackground = bodyStyle.backgroundImage; 
        if (+image.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    showingImage();
}
