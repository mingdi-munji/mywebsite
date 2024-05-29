document.addEventListener('DOMContentLoaded', function() {
    const images = ['cat.jpg', 'chick.jpg', 'sweet.webp','doll.jpg','knitting.jpg']; 
    const texts = ['고양이', '병아리', '간식','인형','뜨개질'];
    let currentIndex = 0;
    
    function changeImageAndText() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageElement = document.getElementById('image');
        const textElement = document.getElementById('text');
        
        imageElement.classList.add('fade-out');
        textElement.classList.add('fade-out');
        
        setTimeout(() => {
            imageElement.src = images[currentIndex];
            textElement.textContent = texts[currentIndex];
            imageElement.classList.remove('fade-out');
            textElement.classList.remove('fade-out');
        }, 1000);
    }
    
    setInterval(changeImageAndText, 4000);
});
