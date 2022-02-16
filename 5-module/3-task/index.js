function initCarousel() {
  let widthSlide = 0;
  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
  const carouselSlider = document.querySelector('.carousel__inner');
  leftButton.style.display = 'none';

  leftButton.addEventListener('click', function() {
    widthSlide--;
    carouselSlider.style.transform = "translateX(-" + carouselSlider.offsetWidth * widthSlide + "px)";
    widthSlide == 0 ? this.style.display = 'none': rightButton.style.display = '';
  });

  rightButton.addEventListener('click', function() {
    widthSlide++;
    carouselSlider.style.transform = "translateX(-" + carouselSlider.offsetWidth * widthSlide + "px)";
    widthSlide == 3 ? (this.style.display = 'none') : (leftButton.style.display = '');
  });
}