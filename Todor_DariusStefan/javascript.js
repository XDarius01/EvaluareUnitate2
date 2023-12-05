document.getElementById('sectiune6').addEventListener('dblclick', function() {
    
    var slideShowContainer = document.getElementById('slide-show-container');

    
    var images = slideShowContainer.getElementsByTagName('img');

    
    images[0].style.opacity = 1;
    for (var i = 1; i < images.length; i++) {
        images[i].style.opacity = 0;
    }

    
    var currentImage = 0;
    var interval = setInterval(function() {
        images[currentImage].style.opacity = 0;
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.opacity = 1;
    }, 3000);

    
    slideShowContainer.addEventListener('dblclick', function() {
        clearInterval(interval);
    });
});
