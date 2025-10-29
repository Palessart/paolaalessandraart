setTimeout(function() {backgroundImage(); }, 9000); 

function backgroundImage(){
  const image = document.createElement('image');
  image.src = 'url("https://paolaalessandraart.click/design/images/background.png")';
  const bodyID = document.querySelector('bodyID'); 
  bodyID.style.setProperty('-backgroundURL', "url('https://paolaalessandraart.click/design/images/background.png')");
  fadeIn(image);
}

function fadeIn(image) {
    image.style.opacity = 0;
    var showingImage = function () {
        image.style.opacity = +image.style.opacity + 0.01; 
        if (+image.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    showingImage();
}
