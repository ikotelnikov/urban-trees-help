  function toggleAddCare() {
    const body = document.body;
    const isChecked = document.getElementById('addCareToggle').checked;
    if (isChecked) {
      body.style.backgroundImage = "url('images/city-street-with-trees.jpg')";
    } else {
      body.style.backgroundImage = "url('images/city-street.jpg')";
    }
  }

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const parallaxSpeed = 0.7; // 1/8 of the scrolling speed
    document.body.style.backgroundPositionY = (scrollPosition * parallaxSpeed) + 'px';
  });