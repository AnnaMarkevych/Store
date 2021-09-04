// import 'productRender.js';
let products = [
    {
        id: 11111111,
        title: 'Oranges',
        url: 'card_1',
        price: '26.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        brand: 'BRAND',
        availability: true
    },
    {
        id: 22222222,
        title: 'Apples',
        url: 'card_2',
        price: '35.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        brand: 'BRAND',
        availability: false
    },
    {
        id: 3333333333,
        title: 'Bananas',
        url: 'card_3',
        price: '19.50',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        brand: 'BRAND',
        availability: true
    },
    {
        id: 44444444444,
        title: 'Green Grape',
        url: 'card_4',
        price: '25.50',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        brand: 'BRAND',
        availability: false
    },
    {
        id: 55555555555,
        title: 'Red Grape',
        url: 'card_5',
        price: '29.50',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        brand: 'BRAND',
        availability: true
    },
    {
        id: 6666,
        title: 'Kivi',
        url: 'card_6',
        price: '20.50',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        brand: 'BRAND',
        availability: true
    },
];

let cart = new Cart();
let productController = new ProductController(products, cart);
let store = document.querySelector('#store');

let cartHtml = document.querySelector('#cart');
let cartRender = new CartRender(cart,cartHtml);

let buyButtonClickCallback = (product) => {
    productController.buy(product.id);
    cartRender.render();
};
let productsRender = new ProductsRender(products, store, buyButtonClickCallback );

productsRender.render();
cartRender.render();
// productController.like();
let overlay  =document.querySelector('.overlay');
overlay.addEventListener('click', ()=>{
    cartHtml.classList.remove('active');
    overlay.classList.remove('active');
});

let btnCart = document.querySelector('#btn_cart');
btnCart.addEventListener('click', ()=>{
    cartHtml.classList.add('active');
    overlay.classList.add('active');
});






















