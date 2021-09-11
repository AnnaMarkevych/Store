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
                price: '56.00',
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
                price: '48.60',
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
                price: '32.50',
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
        sale: true,
        subProducts: [
            {
                title: 'SweetsCaramel',
                url: 'sweets_caramel',
                sale: true,
                products: [
                    {
                        id: 11,
                        title: 'Caramel5',
                        url: 'caramel5',
                        price: '15.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua.',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 22,
                        title: 'Caramel6',
                        url: 'caramel6',
                        price: '15.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. ',
                        brand: 'Fit Product',
                        availability: false,
                        sale: '10%'
                    },
                    {
                        id: 22,
                        title: 'Caramel7',
                        url: 'caramel7',
                        price: '15.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. ',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 22,
                        title: 'Caramel8',
                        url: 'caramel8',
                        price: '15.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. ',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 22,
                        title: 'Caramel9',
                        url: 'caramel9',
                        price: '15.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. ',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 22,
                        title: 'Caramel10',
                        url: 'caramel10',
                        price: '15.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. ',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 22,
                        title: 'Caramel11',
                        url: 'caramel11',
                        price: '15.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. ',
                        brand: 'Fit Product',
                        availability: false,
                        sale: '10%'
                    },
                    {
                        id: 22,
                        title: 'Caramel12',
                        url: 'caramel12',
                        price: '15.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua. ',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },

                    ]
            },
            {
                title: 'Chokolate',
                url: 'sweets_chokolate',
                sale: true,
                products: [
                    {
                        id: 1211,
                        title: 'Dark',
                        url: 'chokolate1',
                        price: '328.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1222,
                        title: 'Milk',
                        url: 'chokolate2',
                        price: '320.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1233,
                        title: 'Mix',
                        url: 'chokolate4',
                        price: '350.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1244,
                        title: 'Dried fruits',
                        url: 'chokolate5',
                        price: '500.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1255,
                        title: 'White',
                        url: 'chokolate6',
                        price: '150.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1266,
                        title: 'Nuts',
                        url: 'chokolate7',
                        price: '250.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                ]
            },
            {
                title: 'ChokolateCandies',
                url: 'sweets_chokolate-candies',
                sale: true,
                products: [
                    {
                        id: 1311,
                        title: 'Candies1',
                        url: 'choko-candies1',
                        price: '100.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1322,
                        title: 'Candies2',
                        url: 'choko-candies2',
                        price: '100.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1333,
                        title: 'Candies3',
                        url: 'choko-candies3',
                        price: '100.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1344,
                        title: 'Candies4',
                        url: 'choko-candies4',
                        price: '100.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1355,
                        title: 'Candies5',
                        url: 'choko-candies5',
                        price: '100.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1366,
                        title: 'Candies6',
                        url: 'choko-candies6',
                        price: '100.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1377,
                        title: 'Candies7',
                        url: 'choko-candies7',
                        price: '100.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1388,
                        title: 'Candies8',
                        url: 'choko-candies8',
                        price: '100.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1399,
                        title: 'Candies9',
                        url: 'choko-candies9',
                        price: '100.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1310,
                        title: 'Candies10',
                        url: 'choko-candies10',
                        price: '100.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },

                ]
            },
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
                id: 88888888,
                title: 'Apple strudel',
                url: 'strudel',
                price: '100.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: false,
                sale: '10%'
            },
            {
                id: 99999999,
                title: 'Cookies',
                url: 'cookies',
                price: '26.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et dolore magna aliqua.',
                brand: 'Fit Product',
                availability: true,
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
        sale: true,
        subProducts: [
            {
                title: 'Cheeses',
                url: 'cheeses',
                sale: true,
                products: [
                    {
                        id: 1411,
                        title: 'Cheese1',
                        url: 'cheese1',
                        price: '290.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua.',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1422,
                        title: 'Cheese2',
                        url: 'cheese2',
                        price: '60.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua.',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1433,
                        title: 'Cheese3',
                        url: 'cheese3',
                        price: '290.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua.',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1444,
                        title: 'Mozzarella',
                        url: 'cheese4',
                        price: '200.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua.',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1455,
                        title: 'Brinza',
                        url: 'cheese5',
                        price: '250.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua.',
                        brand: 'Fit Product',
                        availability: false,
                        sale: '10%'
                    },
                    {
                        id: 1466,
                        title: 'Feta',
                        url: 'cheese6',
                        price: '300.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua.',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1477,
                        title: 'Parmesan',
                        url: 'cheese7',
                        price: '690.00',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                        'incididunt ut labore et dolore magna aliqua.',
                        brand: 'Fit Product',
                        availability: false,
                        sale: '10%'
                    },

                ]
            },
            {
                title: 'Eggs',
                url: 'eggs',
                sale: true,
                products: [
                    {
                        id: 1511,
                        title: 'Chicken eggs',
                        url: 'eggs1',
                        price: '29.00',
                        description: 'Chicken eggs, 6pcs',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1522,
                        title: 'Chicken eggs',
                        url: 'eggs2',
                        price: '2.00',
                        description: 'Chicken eggs, 1pc',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1533,
                        title: 'Chicken eggs',
                        url: 'eggs3',
                        price: '38.00',
                        description: 'Chicken eggs, 10pcs',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },
                    {
                        id: 1544,
                        title: 'Quail eggs',
                        url: 'eggs4',
                        price: '50.00',
                        description: 'Chicken eggs, 15pcs',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    },

                ]
            },
            {
                title: 'Milk',
                url: 'milk',
                sale: true,
                products: [
                    {
                        id: 1611,
                        title: '',
                        url: '',
                        price: '29.00',
                        description: '',
                        brand: 'Fit Product',
                        availability: true,
                        sale: '10%'
                    }

                ]
            }

        ]
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























