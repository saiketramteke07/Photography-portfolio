function scrollGallery(direction) {
    const gallery = document.getElementById('gallery-scroll');
    const scrollAmount = 300;
    gallery.scrollBy({ 
        left: scrollAmount * direction, 
        behavior: 'smooth' 
    });
}
