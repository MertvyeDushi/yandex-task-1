# Yandex Task 1

## Project setup
```
npm i
```

### Compiles and hot-reloads for development
```
npm run serve


Для верстки используется шаблонизатор Pug:
классы через точку по БЭМ (насколько я знаю БЭМ), классы в скобках - утилитарные классы.

Для Vote шаблона дизайн задан таким образом, что невозможно изменить положение элементов,
изменив всего лишь несколько свойств в стилях, поэтому в некоторых местах используется
класс horizontal для скрытия некоторых элементов со страницы при альбомной ориентации и
класс vertical - при портретной.

В шаблоне Activity высота и ширина ячеек адаптивны.

Diagram template: закругления на углах можно задать Кубическими кривыми Безье, но в данном
случае для упрощения диаграмма построена с помощью элиптических кривых.
