function changeOpacity(element, opacityValue) {
    element.style.opacity = opacityValue;}

    
    document.addEventListener('DOMContentLoaded', function() {
        var ii1 = document.getElementById('ii1');
        var ii2 = document.getElementById('ii2');
        var ii3 = document.getElementById('ii3');
        var ii4 = document.getElementById('ii4');
        var ii5 = document.getElementById('ii5');
        var ii6 = document.getElementById('ii6');
    
        var d1 = document.getElementById('d1');
        var d2 = document.getElementById('d2');
        var d3 = document.getElementById('d3');
        var d4 = document.getElementById('d4');
        var d5 = document.getElementById('d5');
        var d6 = document.getElementById('d6');
        
        ii1.addEventListener('mouseover', function() { 
            d1.classList.add('visibleb');
            d2.classList.remove('visiblea');
            d3.classList.remove('visiblea');
            d4.classList.remove('visiblea');
            d5.classList.remove('visiblea');
            d6.classList.remove('visiblea');
        });
        ii1.addEventListener('mouseout', function() {
            d1.classList.remove('visibleb');
        });
    
        ii2.addEventListener('mouseover', function() {
            d2.classList.add('visiblea');
            d1.classList.remove('visiblea');
            d3.classList.remove('visiblea');
            d4.classList.remove('visiblea');
            d5.classList.remove('visiblea');
            d6.classList.remove('visiblea');
        });
        ii2.addEventListener('mouseout', function() {
            d2.classList.remove('visiblea');
        });
    
        ii3.addEventListener('mouseover', function() {
            d3.classList.add('visiblea');
            d1.classList.remove('visiblea');
            d2.classList.remove('visiblea');
            d4.classList.remove('visiblea');
            d5.classList.remove('visiblea');
            d6.classList.remove('visiblea');
        });
        ii3.addEventListener('mouseout', function() {
            d3.classList.remove('visiblea');
        });
    
        ii4.addEventListener('mouseover', function() {
            d4.classList.add('visiblea');
            d1.classList.remove('visiblea');
            d2.classList.remove('visiblea');
            d3.classList.remove('visiblea');
            d5.classList.remove('visiblea');
            d6.classList.remove('visiblea');

        });
        ii4.addEventListener('mouseout', function() {
            d4.classList.remove('visiblea');
        });
    
        ii5.addEventListener('mouseover', function() {
            d5.classList.add('visiblea');
            d1.classList.remove('visiblea');
            d2.classList.remove('visiblea');
            d3.classList.remove('visiblea');
            d4.classList.remove('visiblea');
            d6.classList.remove('visiblea');
        });
        ii5.addEventListener('mouseout', function() {
            d5.classList.remove('visiblea');
        });
    
        ii6.addEventListener('mouseover', function() {
            d6.classList.add('visiblea');
            d1.classList.remove('visiblea');
            d2.classList.remove('visiblea');
            d3.classList.remove('visiblea');
            d4.classList.remove('visiblea');
            d5.classList.remove('visiblea');
        });
        ii6.addEventListener('mouseout', function() {
            d6.classList.remove('visiblea');
        });
    });
    