let count = 0;
const bodyall = document.querySelector('#bodyall');

function addSteam() {
    const span_tag = document.createElement('span');
    span_tag.classList.add('steam_css');
    span_tag.style.left = `${Math.random() * (window.innerWidth - 1) + 1}px`;
    span_tag.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`;
    span_tag.style.animationDelay = `${Math.random() * (10 - 1) + 1}s`;
    span_tag.style.opacity = `${Math.random()}`;
    bodyall.append(span_tag);
    if (count < 100) {
        window.requestAnimationFrame(addSteam);
        count++;
    }
}

addSteam();
