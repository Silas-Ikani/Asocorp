  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.asocorp-navbar__nav');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });