// let catalogMenu = [ products, 'Category2', 'Category3', 'Category4', 'Category5']

class CatalogRender {
    constructor(catalog, products, rootElement) {
        // this.catalogMenu = catalogMenu;
        this.products = products;
        this.rootElement = rootElement;
    }

    render(){
             let catalogItems = document.createElement('ul');
             catalogItems.classList.add('catalog-items');
             this.rootElement.appendChild(catalogItems);

        this.products.forEach((card)=>{
            let catalogItem = document.createElement('li');
            catalogItem.classList.add('catalog-item');
            catalogItem.innerText = card.title;
            catalogItems.appendChild(catalogItem);
        })
    }
}