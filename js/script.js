// import 'productRender.js';

let catalogMenu = [
    {
        title: 'Fruits',
        url: 'fruits',
        products: [
            {
                id: 11111111,
                title: 'Oranges',
                url: 'card_1',
                price: '26.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \' +\n' +
                '        \'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \' +\n' +
                '        \'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'BRAND',
                availability: true
            },
        ]
    },
    {
        title: 'Vegetables',
        url: 'vegetables',
        products: [
            {
                id: 111,
                title: 'Oranges11',
                url: 'card_1',
                price: '26.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \' +\n' +
                '        \'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \' +\n' +
                '        \'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'BRAND',
                availability: true
            },
            {
                id: 222,
                title: 'Apples222',
                url: 'card_2',
                price: '35.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'BRAND',
                availability: false
            }
        ]
    },
    {
        title: 'MeatFish',
        url: 'meat&fish'
    },
    {
        title: 'Sweets',
        url: 'sweets'
    },
    {
        title: 'Bakery',
        url: 'bakery'
    },
    {
        title: 'Grocery',
        url: 'grocery'
    },
    {
        title: 'Dairy',
        url: 'dairy'
    },
    {
        title: 'Drinks',
        url: 'drinks'
    }
];


let cart = new Cart();
let script = document.querySelector('#store');
let store_catalog = document.querySelector('#store_catalog');

let cartHtml = document.querySelector('#cart');
let cartRender = new CartRender(cart,cartHtml);
let breadcrumbs = document.querySelector('.breadcrumbs');


let catalogMenuRender = new CatalogMenuRender(catalogMenu, store_catalog);
catalogMenuRender.render();


catalogMenu.forEach((category) => {

    let productController = new ProductController(category.products, cart);

    let buyButtonClickCallback = (product) => {
        productController.buy(product.id);
        cartRender.render();
    };

    let categoryHtml = document.querySelector('#' + category.title.toLowerCase());

    categoryHtml.addEventListener('click', ()=>{
        store_catalog.classList.add('hidden');
        script.classList.add('visible');
        let productsRender = new ProductsRender(category.products, script, buyButtonClickCallback);
        productsRender.render();
        cartRender.render();
        let breadcrumb = document.createElement('li');
        breadcrumb.innerText = category.title;
        breadcrumbs.appendChild(breadcrumb);
    });
});


let overlay  = document.querySelector('.overlay');
let btnCart = document.querySelector('#btn_cart');
let catalog = document.querySelector('.catalog-menu');
let btnCatalog = document.querySelector('#btn_catalog');


btnCart.addEventListener('click', ()=>{
    cartHtml.classList.add('active');
    overlay.classList.add('active');
});

btnCatalog.addEventListener('click', () => {
    catalog.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', ()=>{
    cartHtml.classList.remove('active');
    overlay.classList.remove('active');
    catalog.classList.remove('active');
});

//
// let catalogRender = new  CatalogRender(catalog, products, catalog);
// catalogRender.render();























