class ProductsRender {
    constructor(products, rootElement, buyButtonClickCallback) {
        this.products = products;
        this.rootElement = rootElement;
        this.buyButtonClickCallback = buyButtonClickCallback;
    }

    render() {
        this.products.forEach((card)=>{
            let cardWrap = document.createElement('div');
            cardWrap.classList.add('card_wrap');
            this.rootElement.appendChild(cardWrap);
            cardWrap.setAttribute('id', 'card_' + card.id);

            let cardTitle = document.createElement('div');
            cardTitle.classList.add('card_title');
            cardTitle.innerText = card.title;
            cardWrap.appendChild(cardTitle);

            let cardMainPhoto = document.createElement('img');
            cardMainPhoto.setAttribute('src', 'assets/images/' + card.url + '.jpg');
            cardWrap.appendChild(cardMainPhoto);

            let cardDescription = document.createElement('div');
            cardDescription.classList.add('card_description');
            cardDescription.innerText = card.description;
            cardWrap.appendChild(cardDescription);

            let cardBrand = document.createElement('div');
            cardBrand.classList.add('card_brand');
            cardBrand.innerText = card.brand;
            cardWrap.appendChild(cardBrand);

            let cardAvailability = document.createElement('div');
            cardAvailability.classList.add('card_availability');
            // if (card.availability === true){
            //     cardAvailability.innerText = 'Available';
            //     cardAvailability.classList.add('available');
            // } else {
            //     cardAvailability.innerText = 'Not available';
            //     cardAvailability.classList.add('notAvailable');
            // }
            // cardAvailability.innerText = card.description;
            cardWrap.appendChild(cardAvailability);

            let cardPrice = document.createElement('div');
            cardPrice.classList.add('card_price');

            let cardPriceValue = document.createElement('span');
            cardPriceValue.classList.add('card_price__value');
            cardPriceValue.innerText = card.price;
            cardWrap.appendChild(cardPrice);
            cardPrice.appendChild(cardPriceValue);

            let cardUserPanel = document.createElement('div');
            cardUserPanel.classList.add('card_price__control-panel');
            cardPrice.appendChild(cardUserPanel);

            let cardBuy = document.createElement('button');
            // let cardBuyIcon = document.createElement('img');
            // cardBuyIcon.setAttribute('src', 'assets/images/icon_cart.png');
            // cardBuyIcon.classList.add('icon_add-to-cart');
            cardBuy.classList.add('add-to-cart');
            cardUserPanel.appendChild(cardBuy);
            // cardBuy.appendChild(cardBuyIcon);
            cardBuy.setAttribute('value', 'Add to Cart');
            cardBuy.setAttribute('data-value', card.price);
            cardBuy.setAttribute('data-name', card.title);
            cardBuy.setAttribute('data-url', 'assets/images/' + card.url + '.jpg');

            if (card.availability === true){
                cardAvailability.innerText = 'Available';
                cardAvailability.classList.add('available');
            } else {
                cardAvailability.innerText = 'Not available';
                cardAvailability.classList.add('notAvailable');
                cardBuy.setAttribute('disabled', 'disabled');
                cardBuy.classList.add('not-available');
            }

            cardBuy.addEventListener('click', () => {
                this.buyButtonClickCallback(card);
                cardBuy.setAttribute('disabled', 'disabled');
                // cardBuy.setAttribute('value', 'Added to Cart');
                cardBuy.classList.add('disabled');
            });

            cardDescription.addEventListener('mouseover', () => {
                cardDescription.classList.add('full');
                // cardWrap.classList.add('open');
            });
            cardDescription.addEventListener('mouseout', () => {
                cardDescription.classList.remove('full');
            });

        });
    }

}
