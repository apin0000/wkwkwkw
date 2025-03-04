document.addEventListener("DOMContentLoaded", function () {
  let startBtn = document.getElementById("startBtn");
  let startScreen = document.getElementById("start-screen");
  let gallery = document.querySelector(".gallery");
  let video = document.getElementById("jumpscare-video");

  startBtn.addEventListener("click", function () {
    startScreen.style.display = "none";
    gallery.style.display = "flex";

    video.muted = true;

    gallery.querySelector("img").style.opacity = "1";
    gallery.querySelector("img").style.transform = "scale(0.5)";

    video.muted = false;
    video.volume = 1.0;
    video.play().catch(error => {
      console.log("Autoplay diblokir, menunggu interaksi pengguna.");
    });
  });
});