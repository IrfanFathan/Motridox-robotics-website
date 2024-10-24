// JavaScript to toggle the mobile menu
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    
    // Toggle between hidden and block (show or hide the menu)
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('block');
    }
});


// Email validation
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  }

  document.querySelectorAll('.video-container').forEach(container => {
    const videos = [
        'Motridox-robotics-website\asstes\video\hero.mp4', 
        'path/to/project1-video2.mp4', 
        'path/to/project1-video3.mp4'
    ]; // Define the array of videos

    let currentVideoIndex = 0;
    const videoElement = container.querySelector('video');

    // Autoplay video on hover
    container.addEventListener('mouseenter', () => {
        videoElement.play();
    });

    // Pause video when mouse leaves the video container
    container.addEventListener('mouseleave', () => {
        videoElement.pause();
    });

    // Loop through the videos
    videoElement.addEventListener('ended', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Loop to the next video
        videoElement.src = videos[currentVideoIndex]; // Change the video source
        videoElement.play(); // Start playing the new video
    });
});


// carsoul
