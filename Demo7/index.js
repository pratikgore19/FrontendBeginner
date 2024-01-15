let hamburgerBtn = document.getElementById('hamburger');
let sliderBar = document.getElementById('slide-bar');

function showSlideBar() {
    if (sliderBar.classList.contains('show')) {
        sliderBar.classList.remove('show');
    }
    else {
        sliderBar.classList.add('show');
    }
}

hamburgerBtn.addEventListener('click', showSlideBar);