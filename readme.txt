Принципи при създаване на web приложения:

1. Responsive design - дизайн, който изглежда добре на различни устройтва/размери екрани.

2. Maintainable and scalable code (css architecture) - изчистен и лесен за разбиране код, 
   преизползваем, с възможност за разширение. Начин на организация на файловете, имената на класовете,
   HTML структурата.

3. Web performance - бърз и с малък размер (по-малко HTTP заявки - като включим възможно най-малко файлове
   в нашия HTML документ), компресираме кода и използваме препроцесори (SASS), използваме компресирани изображения
   и възможно най-малко изображения.

 Генериране на Bootstrap 4  - startup workflow

1.) 1.1. в папката, в която ще ни се съдържа проекта трябва да създадем package.json 
   предназначението на този файл е да съдържа всички dependencies.
   -> npm init (за създаване на package.json) и попълваме име, версия, описание
   
   1.2. npm install boostrap font-awesome jquery popper.js --save (за да запише всичко в package.json)
   по този начин ще се изтеглят и добавят в package.json всички библиотеки и зависимости, от които
   се нуждаем

   1.3. в dependencies секцията на package.json трябва да махнем ^пред версията - така ще се подсигурим,
   че винаги ще се инсталира точно избраната версия.

   1.4 инсталираме devDependencies, зависимости, от които се нуждаем само в development (--save-dev)
   gulp, gulp-sass, browser-sync с командата:
   npm install gulp gulp-sass browser-sync --save-dev

   1.4 инсталираме си gulp CLI (gulp-cli) глобално (-g), за да може да го достъпим от всякъде

2.) в нашия проект си създаваме src папка - там ще се намира нашият код: html, css, js, scss

3.) създаваме си gulpfile.js файл, който ще включва всички tasks, като компилиране на scss в css,
 преместване на компилирания css в src (където ще се намира нашият код: html, css, js, scss),
 преместване на jquery, font-awesome, popper.js в src.

 4.) за да стартираме gulp tasks, които сме си описали в gulpfile.js в конзолата пишем командата "gulp",
 която ще изпълни нашият gulpfile.js и всички таскове, които сме създали






   BOOTSTRAP 4
   ВЪПРОСИ:
1.Класовете за дисплейни (много големи) заглавия: 
2.Клас за основен текст:
3.Клас за bold текст:
4.Клас за нормален текст:
5.Клас за italic текст:
6.Клас за lowecase текст:
7.Клас за uppercase текст
8.Клас за camelcase текст
9.Списък
10.inline списък
11.Позициониране в ляво float left
12.Позициониране в дясно float right
13. clear float and left
14. Клас за фиксиране на елемент горе или долу
15. Клас за показване на блоков елемент като inline/block/inline-block
16. Клас за ляво/дясно/централно подравняване
17. Клас за ляво/дясно/централно подравняване за sm/md/lg/xl
18. Клас за бял текст
19. Клас за margin left/right
20. Класс за margin top/bottom
21. Клас за margin за всички страни
22. Клас за padding left/right
23. клас за padding top/bottom
24. клас за padding за всички страни
[25.] клас за центриране: margin: 0 auto;
[26.] клас за ширина 25%,50%,75%,100%
[27.] клас за височина 25%, 50%, 75%, 100%
[28.] клас за рамка, синя рамка 

29. вертикално центриране на колоните в началото на реда
30. вертикално централно на колоните в средата на реда
31. вертикално центриране на колоните в края на реда
32. хоризонтално центриране на колоните в началото на реда
33. хоризонтално центриране на колоните в центъра на реда
34. хоризонтално центриране на колоните в края на реда
35. вертикално центриране на индивидуална колона в началото на реда
36. вертикално центриране на индивидуална колона в средата на реда
37. вертикално центриране на индивидуална колона в края на реда
38. хоризонтално центриране на колоните с разстояние преди всяка колона
39. хоризонтално центриране на колоните с разстояние в сретата между колоните, а всяка в левия и десния край на реда
[40.] премахване на margin-left / margin-right 
41. margin-left-auto/margin-right-auto за избрана колона в ред
41. margin-top-auto/margin-bottom-auto за избрана колона в ред
42. преминаване на нов ред на колоните, ако не се побират в реда
43. задаване на ред на колоните

   ОТГОВОРИ:  
1.Класовете за дисплейни заглавия: display-1/2/3/4
2.lead
3.font-weight-bold
4.font-weight-normal
5.font-italic
6.text-lowercase
7.text-uppercase
8.text-capitalize
9.list-unstyled
10.<ul class="list-inline"></ul> <li class="list-inline-item"></li>
11.float-left
12.float-right
13.clearfix
14.fixed-top / fixed-bottom
15. d-inline / d-block / d-inline-block
16. text-left, text-right, text-center
17. text-sm-left/text-md-right/text-lg-center
18. text-white
19. mx-1/2/3/4/5
20. my-1/2/3/4/5
21. m-1/2/3/5
22. px-2
23. py-3
24. p-2
[25.] mx-auto / [m-auto + col-md-6 за центриране на елемент]
[26.] w-25, w-50, w-75, w-100
[27.] h-25 (+ d-inline-block), h-50, h-75, h-100
[28.] border border-primary
29. align-items-top
30. align-items-center
31. align-items-end
32. justify-content-start
33. justify-content-center
34. justify-content-end
35. align-self-top
36. align-self-center
37. align-self-end
38. justify-content-around
39. justify-content-between
40. no-gutters
41.* margin-right-auto -> mr-auto [flex item-1]_____[flex item-2][flex item-3]
    <div class="d-flex">
        <div class="mr-auto">flex item-1</div>
        <div>flex item-2</div>
        <div>flex item-3</div>
     </div>

    * margin-left-auto -> ml-auto  [flex item-1][flex item-2]_____[flex item-3]
    <div class="d-flex">
        <div>flex item-1</div>
        <div>flex item-2</div>
        <div class="ml-auto">flex item-3</div>
     </div>

    * margin-bottom-auto ->  mb-auto 
    <div class="d-flex flex-column">
        <div class="mb-auto">flex item-1</div>
        <div>flex item-2</div>
        <div>flex item-3</div>
     </div>

    [flex item-1]
    _____________
    [flex item-2]
    [flex item-3]

    * margin-top-auto ->  mt-auto 
    <div class="d-flex flex-column">
        <div>flex item-1</div>
        <div>flex item-2</div>
        <div class="mt-auto">flex item-3</div>
     </div>

    [flex item-1]
    [flex item-2]
     _____________
    [flex item-3]

42. <div class="d-flex flex-wrap">
        <div>flex item-1</div>
        <div>flex item-2</div>
        <div>flex item-3</div>
     </div>

43. <div class="d-flex flex-wrap">
        <div class="order-3">flex item-1</div>
        <div class="order-2">flex item-2</div>
        <div class="order-1">flex item-3</div>
     </div>     