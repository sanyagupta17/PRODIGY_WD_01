const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const nav = document.querySelector('nav');

function setLinearGradientBackground() {
    nav.style.background = 'linear-gradient(to right, #2193b0 , #6dd5ed)';
}

function resetBackground() {
    nav.style.background = 'white';
}

window.addEventListener('scroll', () => {
    if(window.scrollY>100) {
        setLinearGradientBackground();
    }
    else {
        resetBackground();
    }
});

const imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('mouseover',()=>{
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = 'Hovered!';
    imageContainer.appendChild(tooltip);
});

imageContainer.addEventListener('mouseout',()=>{
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
});
