let accordion = (function (element) {
    let _getItem = function (elements, className) { // функция для получения элемента с указанным классом
        let element = undefined;
        elements.forEach(function (item) {
            if (item.classList.contains(className)) {
                element = item;
            }
        });
        return element;
    };
    return function () {
        let _mainElement = {}, // .accordion
            _items = {}, // .accordion-item
            _contents = {}; // .accordion-item-content
        let _actionClick = function (e) {
                if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
                    return;
                }
                e.preventDefault(); // отменям стандартное действие
                // получаем необходимые данные
                let header = e.target,
                    item = header.parentElement,
                    itemActive = _getItem(_items, 'show');
                // console.log(item);
            let arrow = header.querySelector('.arrow');

                if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
                    item.classList.add('show');
                    arrow.classList.add('rotate');
                } else {
                    // удаляем класс show у ткущего элемента
                    // item.classList.remove('show');
                    // если следующая вкладка не равна активной
                    // itemActive.addEventListener('click', () =>{
                    if (itemActive !== item) {
                        // добавляем класс show к элементу (в зависимости от выбранного заголовка)
                        item.classList.add('show');
                        arrow.classList.add('rotate');
                    }
                    else {
                        itemActive.classList.remove('show');
                        arrow.classList.remove('rotate');
                    }
                    // })

                }
            },
            _setupListeners = function () {
                // добавим к элементу аккордиона обработчик события click
                _mainElement.addEventListener('click', _actionClick);
            };

        return {
            init: function (element) {
                _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
                _items = _mainElement.querySelectorAll('.accordion-item');
                _setupListeners();
            }
        }
    }
})();
let accordion1 = accordion();
accordion1.init('#accordion');