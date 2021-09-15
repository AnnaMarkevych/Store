let productFilter = {
    brand: ['FIT PRODUCT', 'ORGANIC', 'NEW LINE'],
    isAllowed: function(card) {
        return this.brand.includes(card.brand.toUpperCase());

    },
    filter: function (products) {
        let result = [];
        products.forEach((product) =>{
            if (this.isAllowed(product)){
               result.push(product);
            }
        });
        return result;
    }
};

createFilter('#filter');

function createFilter(rootElement) {

}