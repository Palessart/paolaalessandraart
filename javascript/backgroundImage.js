setTimeout(function() {backgroundImage(); }, 9000); 

function backgroundImage(){
  var bodyID = document.getElementById("bodyID"); 
  fadeIn(bodyID);
}

function fadeIn(bodyID) {
    bodyID.style.opacity = 0;
    bodyID.style.setProperty('--backgroundURL', "url('https://paolaalessandraart.click/design/images/background.png')");
    bodyID.style.opacity = 0;
    var showingImage = function () {
        bodyID.style.opacity = +bodyID.style.opacity + 0.01; 
        if (+bodyID.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(showingImage)) || setTimeout(showingImage, 16)
        }
    };
    showingImage();
}
