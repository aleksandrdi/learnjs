// 1 задание, С помощью цикла while вывести все простые числа в промежутке от 0 до 100

    let i = 8;

    console.log(1);
    console.log(2);
    console.log(3);
    console.log(5);
    console.log(7);
    // не знаю как первые простые числа запихнуть в  while.

    while(i <= 100){
        if (i % 2 != 0) {
            if (i % 3 != 0) {
                if (i % 5 != 0) {
                    if (i % 7 != 0) {
                        console.log(i);
                    }
                }
            }
        }
    i++;
    }


// 2 задание,  С помощью цикла do…while написать функцию для вывода чисел от 0 до 10 (подсмотрел в инете)
    let a = -1;
    do {
        a++;
        if (a === 0){
            console.log(a, "- это ноль");
         } else if (a % 2 ===0){
            console.log(a, "- это четное число");
         } else {
            console.log(a, "- это нечетное число");
         }
    } while (a < 10);


// 3 задание, Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.

    let k;
        for ( k = 0; k <= 9; console.log(k++)){
    }

// 4 задание, Нарисовать пирамиду с помощью console.log
    let arr = [];
    let size = 0;
    while (size < 20){
        size++;
        arr.push('x');
        console.log(arr);
    }


// 5 задание, Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
//5.1 Организуйте такой массив для хранения товаров в корзине

    function Create2DArray(rows) {
          let store = [];
             for (let i = 0; i < rows; i++) {
                 store[i] = [];
    }
    return store;
    }

    let store = Create2DArray(3);
    store[0][0] = 35;
    store[0][1] = "Хлеб";
    store[1][0] = 130;
    store[1][1] = "Масло";
    store[2][0] = 350;
    store[2][1] = "Икра";


// 5.2 Организуйте функцию countBasketPrice (или иное название), которая будет считать стоимость корзины.
    let summa = 0;

    function countBasketPrice(){
        for (let i = 0; i < store.length; i++) {
            summa =  summa + store[i][0];
        }
        return summa;
    }

    console.log(countBasketPrice()); //515




































