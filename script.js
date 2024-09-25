function scrollGallery(direction) {
    const gallery = document.getElementById('gallery-scroll');
    const scrollAmount = 300; // Adjust this value to control scroll speed
    gallery.scrollBy({ 
        left: scrollAmount * direction, 
        behavior: 'smooth' 
    });
}
