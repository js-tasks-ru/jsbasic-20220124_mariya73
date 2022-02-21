import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    console.log(this.slides)
    this.elem = this.createSlider(slides);
  }

  createSlider(slides) {
    const slider = createElement(`
    <!--Корневой элемент карусели-->
    <div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">
      </div>
    </div>
`);

    let carouselInner = slider.querySelector('.carousel__inner');
    for (const slide of this.slides) {
      carouselInner.insertAdjacentHTML('beforeEnd', `<div class="carousel__slide" data-id="penang-shrimp">
      <img src="../../assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
              <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
    </div>`);

      let button = carouselInner.querySelectorAll('button');
      button.forEach(item => {
        item.addEventListener('click', () => {
          console.log(slide.id);

          const addProduct = new CustomEvent("product-add", {
            detail: slide.id,
            bubbles: true
          });
          item.dispatchEvent(addProduct);
        });
      });
    }

    let widthSlide = 0;
    let buttonLeft = slider.querySelector('.carousel__arrow_left');
    let buttonRight = slider.querySelector('.carousel__arrow_right');
    buttonLeft.style.display = 'none';

    const arrLength = this.slides.length - 1;

    buttonLeft.addEventListener('click', () => {
      widthSlide--;
      carouselInner.style.transform = "translateX(-" + carouselInner.offsetWidth * widthSlide + "px)";
      widthSlide == 0 ? buttonLeft.style.display = 'none': buttonRight.style.display = '';
    });

    buttonRight.addEventListener('click', function() {
      widthSlide++;
      carouselInner.style.transform = "translateX(-" + carouselInner.offsetWidth * widthSlide + "px)";
      widthSlide == arrLength ? buttonRight.style.display = 'none' :  buttonLeft.style.display = '';
    });

    return slider;
  }
}