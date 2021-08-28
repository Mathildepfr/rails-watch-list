const initNavbarScroll = () => {
  document.addEventListener('scroll', function (e) {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY >= 440) {
        navbar.classList.add('navbar-lewagon-white')
      } else {
        navbar.classList.remove('navbar-lewagon-white')
      }
    }
  });
}

export { initNavbarScroll }
