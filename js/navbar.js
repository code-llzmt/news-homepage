
const iconMenu = document.querySelector('.icon-menu');
const navLinksWrapper = document.querySelector('.nav-links-wrapper');
const navLinks = document.querySelectorAll('.nav-links-wrapper > a');
const opacityBg = document.querySelector('.opacity-bg');

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('icon-menu-close');
    if(iconMenu.classList.contains('icon-menu-close')){
        navLinksWrapper.style.display = 'flex';
        opacityBg.style.display = 'block';
    }else{
        navLinksWrapper.style.display = 'none';
        opacityBg.style.display = 'none';
    }
    document.body.classList.toggle('stop-scrolling');
});

navLinks.forEach((navLink) => navLink.addEventListener('click', () => {
    if(window.innerWidth <= 730){
        iconMenu.classList.remove('icon-menu-close');
        navLinksWrapper.style.display = 'none';
        opacityBg.style.display = 'none';
        document.body.classList.remove('stop-scrolling');
    }
}));

