  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.asocorp-navbar__nav');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });





// const circularProgress = document.querySelector('.circular-progress');
// const percentageText = document.querySelector('.percentage');

// let progress = 0;
// const targetProgress = 75;

// const updateProgress = () => {
// if (progress <= targetProgress) {
//     circularProgress.style.setProperty('--progress', `${progress}%`);
//     percentageText.textContent = `${progress}%`;
//     progress++;
//     requestAnimationFrame(updateProgress);
// }
// };

// updateProgress();