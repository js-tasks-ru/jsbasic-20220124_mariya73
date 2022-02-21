export default class ProductCard {
  constructor(product) {
    this.data = product;
    this.elem = this.createCard(product);
  }

  createCard(product) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('container_half');

    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const divCardTop = document.createElement('div');
    divCardTop.classList.add('card__top');

    const divCardPrice = document.createElement('span');
    divCardPrice.classList.add('card__price');
    divCardPrice.innerHTML = '€' + this.data.price.toFixed(2);

    const divCardImg = document.createElement('img');
    divCardImg.classList.add('card__image');
    divCardImg.src = '../../assets/images/products/' + this.data.image;

    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card__body');

    const divCardTitle = document.createElement('div');
    divCardTitle.classList.add('card__title');
    divCardTitle.innerHTML = this.data.name;

    const divCardButton = document.createElement('button');
    divCardButton.classList.add('card__button');
    const divCardButtonImg = document.createElement('img');
    divCardButtonImg.src = '../../assets/images/icons/plus-icon.svg';
    divCardButton.append(divCardButtonImg);

    divCardButton.addEventListener('click', () => {
      console.log(this.data.id);

      const addProduct = new CustomEvent("product-add", {
        detail: this.data.id,
        bubbles: true
      });

      divCardButton.dispatchEvent(addProduct);
    });

    divContainer.append(divCard);
    divCard.append(divCardTop);
    divCardTop.append(divCardPrice);
    divCardTop.append(divCardImg);
    divCard.append(divCardBody);
    divCardBody.append(divCardTitle);
    divCardBody.append(divCardButton);
    return divCard;
  }
}