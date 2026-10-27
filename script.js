const toggle = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".menu-overlay");
const navLinks = document.querySelectorAll(".nav a");
function toggleMenu() {
    toggle.classList.toggle("active");
    menuBtn.classList.toggle("active");
     overlay.classList.toggle("active");
}
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        toggle.classList.remove("active");
        menuBtn.classList.remove("active");
        overlay.classList.remove("active");
    });
});
const video = document.getElementById('mainVideo');
  const playBtn = document.getElementById('playBtn');
  const thumbs = document.querySelectorAll('.thumb');

  // Toggle play / pause
  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  // Click on the big play button
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent bubbling
    togglePlay();
  });

  // Click anywhere on the video to play/pause
  video.addEventListener('click', () => {
    togglePlay();
  });

  // Show / hide play button based on video state
  video.addEventListener('play', () => {
    playBtn.style.opacity = '0';
    playBtn.style.pointerEvents = 'none';
  });

  video.addEventListener('pause', () => {
    playBtn.style.opacity = '1';
    playBtn.style.pointerEvents = 'auto';
  });

  video.addEventListener('ended', () => {
    playBtn.style.opacity = '1';
    playBtn.style.pointerEvents = 'auto';
  });

  // Thumbnail switching
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // Update active state
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      // Load new video
      const newVideoSrc = thumb.dataset.video;
      const newPoster = thumb.dataset.poster;

      video.pause();
      video.poster = newPoster;
      video.src = newVideoSrc;
      video.load();

      // Make sure play button is visible again
      playBtn.style.opacity = '1';
      playBtn.style.pointerEvents = 'auto';
    });
  });
    // ========== PRELOADER LOGIC ==========
    const preloader = document.getElementById("preloader");

    // Hide preloader after page loads
    window.addEventListener("load", function () {
      setTimeout(function () {
        preloader.classList.add("hide");
      }, 3000);
    });