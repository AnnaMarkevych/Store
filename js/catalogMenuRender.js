class CatalogMenuRender {
    constructor(catalogMenu, rootElement) {
        this.catalogMenu = catalogMenu;
        this.rootElement = rootElement;
    }

    render() {
        this.catalogMenu.forEach((category)=>{
            let categoryMenu = document.createElement('div');
            categoryMenu.classList.add('category-menu');
            categoryMenu.setAttribute('id', category.title.toLowerCase());
            this.rootElement.appendChild(categoryMenu);
            // console.log(categoryMenu);

            let cardMainPhoto = document.createElement('img');
            cardMainPhoto.setAttribute('src', 'assets/images/categories/' + category.url + '.jpg');
            categoryMenu.appendChild(cardMainPhoto);

            let cardTitle = document.createElement('a');
            cardTitle.classList.add('card_title');
            cardTitle.innerText = category.title;
            categoryMenu.appendChild(cardTitle);

            if (category.sale === true){
                let ribbon = document.createElement('span');
                ribbon.classList.add('ribbon');
                categoryMenu.appendChild(ribbon);
                ribbon.innerText = 'SALE'
            }

        });
    }

}






