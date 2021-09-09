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
                availability: true,
                sale: '10%'
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
                availability: false,
                sale: '10%'
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
                availability: true,
                sale: '15%'
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
                availability: false,
                sale: '15%'
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
                availability: true,
                sale: '10%'
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
                availability: true,
                sale: '20%'
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
                availability: true,
                sale: '5%'
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
                availability: true,
                sale: '5%'
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
                availability: true,
                sale: '8%'
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
                availability: true,
                sale: '10%'
            },
            {
                id: 2222,
                title: 'Carrot',
                url: 'carrot',
                price: '15.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Organic',
                availability: true,
                sale: '10%'
            },
            {
                id: 3333,
                title: 'Onion',
                url: 'onion',
                price: '12.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true,
                sale: '10%'
            },
            {
                id: 4444,
                title: 'Zucchini',
                url: 'zucchini',
                price: '18.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true,
                sale: '10%'
            },
            {
                id: 5555,
                title: 'Eggplant',
                url: 'eggplant',
                price: '28.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: false,
                sale: '10%'
            },
            {
                id: 6666,
                title: 'Cabbage',
                url: 'cabbage',
                price: '6.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Organic',
                availability: true,
                sale: '10%'
            },
            {
                id: 7777,
                title: 'Brokkoli',
                url: 'brokkoli',
                price: '18.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Organic',
                availability: true,
                sale: '10%'
            },
            {
                id: 8888,
                title: 'Mashrooms',
                url: 'mashrooms',
                price: '30.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'New Line',
                availability: true,
                sale: '10%'
            }

        ],
        sale: true
    },
    {
        title: 'MeatFish',
        url: 'meat&fish',
        products: [
            {
                id: 11111,
                title: 'Salmon',
                url: 'salmon',
                price: '350.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'New Line',
                availability: true,
                sale: '10%'
            },
            {
                id: 22222,
                title: 'Trout',
                url: 'trout',
                price: '250.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'New Line',
                availability: false,
                sale: '10%'
            },
            {
                id: 33333,
                title: 'Mackerel',
                url: 'mackerel',
                price: '90.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'New Line',
                availability: true,
                sale: '10%'
            },
            {
                id: 44444,
                title: 'Beef',
                url: 'beef',
                price: '199.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Organic',
                availability: true,
                sale: '10%'
            },
            {
                id: 55555,
                title: 'Chicken',
                url: 'chicken',
                price: '85.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Organic',
                availability: true,
                sale: '10%'
            },
            {
                id: 66666,
                title: 'Pork',
                url: 'pork',
                price: '170.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Organic',
                availability: true,
                sale: '10%'
            },
            {
                id: 77777,
                title: 'Rabbit',
                url: 'rabbit',
                price: '400.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: false,
                sale: '10%'
            },
            {
                id: 88888,
                title: 'Turkey',
                url: 'turkey',
                price: '200.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true,
                sale: '10%'
            },
        ],
        sale: false
    },
    {
        title: 'Sweets',
        url: 'sweets',
        sale: false,
        subProducts: [
            {
                title: 'Sweets1',
                url: 'bakery',
                sale: true,
                products: [
                    {
                        id: 11,
                        title: 'Oran',
                        url: 'card_1',
                        price: '86.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \' +\n' +
                        '        \'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \' +\n' +
                        '        \'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 22,
                        title: 'Ap',
                        url: 'card_2',
                        price: '65.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                        'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        brand: 'Fit Product',
                        availability: false,
                        sale: '10%'
                    },
                    ]
                },
            {
                title: 'Sweets2',
                url: 'bakery',
                sale: false,
                products: [
                    {
                        id: 121,
                        title: 'Oan',
                        url: 'card_1',
                        price: '86.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \' +\n' +
                        '        \'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \' +\n' +
                        '        \'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 212,
                        title: 'Ap6',
                        url: 'card_2',
                        price: '65.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                        'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        brand: 'Fit Product',
                        availability: false,
                        sale: '10%'
                    },
                ]
            }
        ]
    },
    {
        title: 'Bakery',
        url: 'bakery',
        sale: false,
        products: [
            {
                id: 11111111,
                title: 'Bread',
                url: 'bread',
                price: '20.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true,
                sale: '10%'
            },
            {
                id: 22222222,
                title: 'Baguette',
                url: 'baguette',
                price: '22.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true,
                sale: '10%'
            },
            {
                id: 33333333,
                title: 'Ciabatta',
                url: 'ciabatta',
                price: '25.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true,
                sale: '10%'
            },
            {
                id: 44444444,
                title: 'Croissant',
                url: 'croissant',
                price: '15.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true,
                sale: '10%'
            },
            {
                id: 555555555,
                title: 'Bun',
                url: 'buns',
                price: '8.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true,
                sale: '10%'
            },
            {
                id: 66666666,
                title: 'Puff',
                url: 'puff',
                price: '12.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: false,
                sale: '10%'
            },
            {
                id: 77777777,
                title: 'Donut',
                url: 'donuts',
                price: '10.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true,
                sale: '10%'
            },
            {
                id: 11111111,
                title: 'Apple strudel',
                url: 'strudel',
                price: '100.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: false,
                sale: '10%'
            }
        ]
    },
    {
        title: 'Grocery',
        url: 'grocery',
        sale: false
    },
    {
        title: 'Dairy',
        url: 'dairy',
        sale: false
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

        let productCard = store_category.querySelector('#card_' + productId);
        if (productCard !== null) {
            let buyButton = productCard.querySelector('.add-to-cart');
            buyButton.removeAttribute('disabled');
            buyButton.classList.remove('disabled');
        }

    }
});



cartRender.render();

let breadCrumbs = document.querySelector('.breadcrumbs');


let catalogMenuRender = new CatalogMenuRender(catalogMenu, store_catalog);
catalogMenuRender.render();





function createBreadCrumb(title) {
    let breadCrumbHome = document.querySelector('.breadcrumb-home');
    breadCrumbHome.classList.add('visible');
    breadCrumbHome.setAttribute('id', 'home');


    let breadCrumb = document.createElement('li');
    breadCrumb.innerText = title;
    breadCrumb.setAttribute('id', title);
    breadCrumbs.appendChild(breadCrumb);

    let breadCrumbBeforeLast = breadCrumbs.querySelector('li:nth-last-child(2)');
    console.log(breadCrumbBeforeLast);
    let breadCrumbLast = breadCrumbs.querySelector('li:nth-last-child(1)');

    breadCrumbBeforeLast.addEventListener('click', () => {
        store_catalog.classList.remove('hidden');
        store_category.classList.remove('visible');
        breadCrumbLast.remove();
    });

    breadCrumbHome.addEventListener('click', ()=> {
        breadCrumbHome.classList.remove('visible');
        store_catalog.classList.remove('hidden');
        store_category.classList.remove('visible');

        let catalogMenuRender3 = new CatalogMenuRender(catalogMenu, store_catalog);
        catalogMenuRender3.render();


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























