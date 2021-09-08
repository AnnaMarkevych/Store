// import 'productRender.js';

let catalogMenu = [
    {
        title: 'Fruits',
        url: 'fruits',
        products: [
            {
                id: 111,
                title: 'Oranges',
                url: 'card_1',
                price: '26.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \' +\n' +
                '        \'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \' +\n' +
                '        \'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'Fit Product',
                availability: true
            },
            {
                id: 222,
                title: 'Apples',
                url: 'card_2',
                price: '35.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'Fit Product',
                availability: false
            },
            {
                id: 333,
                title: 'Bananas',
                url: 'card_3',
                price: '19.50',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'Organic',
                availability: true
            },
            {
                id: 444,
                title: 'Green Grape',
                url: 'card_4',
                price: '25.50',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'Organic',
                availability: false
            },
            {
                id: 555,
                title: 'Red Grape',
                url: 'card_5',
                price: '29.50',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'New Line',
                availability: true
            },
            {
                id: 666,
                title: 'Kivi',
                url: 'card_6',
                price: '20.50',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'Fit Product',
                availability: true
            },
            {
                id: 777,
                title: 'Cherry',
                url: 'cherry',
                price: '56',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'Organic',
                availability: true
            },
            {
                id: 888,
                title: 'Lime',
                url: 'lime',
                price: '48',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'Organic',
                availability: true
            },
            {
                id: 999,
                title: 'Lemon',
                url: 'lemon',
                price: '32.5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'New Line',
                availability: true
            },

        ],
        sale: true
    },
    {
        title: 'Vegetables',
        url: 'vegetables',
        products: [
            {
                id: 1111,
                title: 'Potatoes',
                url: 'potatoes',
                price: '11.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                brand: 'Organic',
                availability: true
            },
            {
                id: 2222,
                title: 'Carrot',
                url: 'carrot',
                price: '15.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Organic',
                availability: true
            },
            {
                id: 3333,
                title: 'Onion',
                url: 'onion',
                price: '12.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true
            },
            {
                id: 4444,
                title: 'Zucchini',
                url: 'zucchini',
                price: '18.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true
            },
            {
                id: 5555,
                title: 'Eggplant',
                url: 'eggplant',
                price: '28.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: false
            },
            {
                id: 6666,
                title: 'Cabbage',
                url: 'cabbage',
                price: '6.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Organic',
                availability: true
            },
            {
                id: 7777,
                title: 'Brokkoli',
                url: 'brokkoli',
                price: '18.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Organic',
                availability: true
            },
            {
                id: 8888,
                title: 'Mashrooms',
                url: 'mashrooms',
                price: '30.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'New Line',
                availability: true
            }

        ],
        sale: true
    },
    {
        title: 'MeatFish',
        url: 'meat&fish',
        sale: false
    },
    {
        title: 'Sweets',
        url: 'sweets',
        sale: false
    },
    {
        title: 'Bakery',
        url: 'bakery',
        sale: false
    },
    {
        title: 'Grocery',
        url: 'grocery',
        sale: false
    },
    {
        title: 'Dairy',
        url: 'dairy',
        sale: true
    },
    {
        title: 'Drinks',
        url: 'drinks',
        sale: false
    }
];


let cart = new Cart();
let store_category = document.querySelector('#store');
let store_catalog = document.querySelector('#store_catalog');

let cartHtml = document.querySelector('#cart');
let cartRender = new CartRender(cart, cartHtml, {
    onDeleteProduct: (productId) => {
        console.log("DELETE PRODUCT ID " + productId);

        let buyButton = store_category.querySelector('#card_'+ productId)
            .querySelector('.add-to-cart');
        buyButton.removeAttribute('disabled');
        buyButton.classList.remove('disabled');
    }
});
cartRender.render();

let breadCrumbs = document.querySelector('.breadcrumbs');


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
        store_category.classList.add('visible');
        store_category.innerHTML = '';
        let productsRender = new ProductsRender(category.products, store_category, buyButtonClickCallback);
        productsRender.render();
        cartRender.render();

        createBreadCrumb(category.title);

    });
});


function createBreadCrumb(title) {
    let breadCrumbHome = document.querySelector('.breadcrumb-home');
    breadCrumbHome.classList.add('visible');

    let breadCrumb = document.createElement('li');
    breadCrumb.innerText = title;
    breadCrumbs.appendChild(breadCrumb);

    breadCrumbHome.addEventListener('click', ()=> {
        breadCrumbHome.classList.remove('visible');
        store_catalog.classList.remove('hidden');
        store_category.classList.remove('visible');

        breadCrumb.remove();
    })
}

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























