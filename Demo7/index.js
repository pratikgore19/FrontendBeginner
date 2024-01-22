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

function playAudio(event) {
    let audio = new Audio(`/Demo7/Asset/${event.key.toUpperCase()}.wav`);
    audio.play();
}

document.body.addEventListener("keydown", function(e) {
    playAudio(e);
    document.getElementById("key").innerHTML = e.key.toUpperCase();

    document.getElementById("key").style.backgroundColor = "#00dfc4";
    document.getElementById("key").style.color = "#223243";
    document.getElementById("key").style.boxShadow = "8px 8px 8px black";
})

document.body.addEventListener("keyup", function(e) {
    document.getElementById("key").innerHTML = "";
    document.getElementById("key").style.backgroundColor = "#e9edf3"
    document.getElementById("key").style.color = "#00dfc4";
    document.getElementById("key").style.boxShadow = "none";
})