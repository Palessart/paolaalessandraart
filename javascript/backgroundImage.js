setTimeout(function() {backgroundImage(); }, 9000); 

function backgroundImage(){
  const image = document.createElement('image');
  image.src = 'url(../design/images/background.png)';
  fadeIn(image);
}

function fadeIn(image) {
    let example = document.querySelector('#bodyID');
    const compStyles = window.getComputedStyle(example);
    let background1 = compStyles.backgroundImage;
    let example1 = document.body.style.backgroundImage;
    image.style.opacity = 0;
    let example2 = document.getElementsByTagName("body")[0];
    let exampleImage1 = example.style; 
    let exampleImage2 = example.style.backgroundImage; 
    var showingImage = function () {
        image.style.opacity = +image.style.opacity + 0.01;
        if (+image.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    
    showingImage();
}
