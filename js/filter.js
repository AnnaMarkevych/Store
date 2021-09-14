let productFilter = {
    brand: ['FIT PRODUCT1', 'ORGANIC1', 'NEW LINE'],
    isAllowed: function(card) {
        return this.brand.indexOf(card.brand.toUpperCase()) >= 0;
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