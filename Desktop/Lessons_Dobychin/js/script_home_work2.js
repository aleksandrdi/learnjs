// 1 задание, Почему код даёт именно такие результаты?
    var a = 1, b = 1, c, d;
    c = ++a; alert(c); // 2 Здесь сперва значение увеличивается на единицу, а потом присваивается
    d = b++; alert(d); // 1 сперва d присваивается значение b, а потом b увеличивается на единицу
    c = (2+ ++a); alert(c); // 5 сперва увеличивается a до 3, потом плюсуется двойка
    d = (2+ b++); alert(d); // 4 к b плюсуется двойка, а потом b увеличивается на 1
    alert(a); // 3 в коде было два инкремента a
    alert(b); // 3 в коде было два инкремента b

// 2 задание, Чему равен x в примере ниже?
    var a = 2;
    var x = 1 + (a *= 2); //5 так ка сперва выполняется присваивание с умножением
    alert(x);

// 3 задание, Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает по следующему принципу:* если a и b положительные, вывести их разность;
// * если а и b отрицательные, вывести их произведение;
// * если а и b разных знаков, вывести их сумму;
// ноль можно считать положительным числом.
    alert("3 задание");
    a = 10;
    b = -2;
     if(a >= 0 && b >= 0){
         alert(a - b);
     }
     else if(a < 0 && b < 0){
         alert(a * b);
     }
     else if(a < 0 && b >= 0) {
         alert(a + b);
     }
     else if(a >= 0 && b < 0) {
         alert(a + b);
     }


// 4 задание,  Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.
    alert("4 задание");
     a = 5;
    switch (a) {
        case 0:
            alert('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 1:
            alert('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 2:
            alert('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 3:
            alert('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 4:
            alert('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 5:
            alert('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 6:
            alert('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 7:
            alert('7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 8:
            alert('8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 9:
            alert('9, 10, 11, 12, 13, 14, 15');
            break;
        case 10:
            alert('10, 11, 12, 13, 14, 15');
            break;
        case 11:
            alert('11, 12, 13, 14, 15');
            break;
        case 12:
            alert('12, 13, 14, 15');
            break;
        case 13:
            alert('13, 14, 15');
            break;
        case 14:
            alert('14, 15');
            break;
        case 15:
            alert('15');
            break;
    }

// 5 задание, Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
    alert("5 задание");
    function summ(f, g) {
        return(f + g);
    }

    function subtract(f, g) {
        return(f - g);
    }

    function multiplication(f, g) {
     return(f * g);
    }

    function division(f, g) {
        return(f / g);
    }

// 6 задание,  Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation)
    alert("6 задание");

    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case 'summ':
                return (summ(arg1, arg2))
                break;
            case 'subtract':
                return (subtract(arg1, arg2))
                break;
            case 'multiplication':
                return (multiplication(arg1, arg2))
                break;
            case division:
                return (division(arg1, arg2))
                break;
        }
    }
    alert( mathOperation(10, 5, division) ); //2
    alert( mathOperation(10, 5, subtract) ); //50

// 7 задание сравнить null и 0
    alert("7 задание, null при сравнение с 0 оператором >= приводится к числу ");
    alert( null > 0 ); // false
    alert( null == 0 ); // false
    alert( null >= 0); // true

// 8 задание, возведение в степень
    alert("8 задание");
    function pow(x, n) {
        if (n != 1) {
            return x * pow(x, n - 1);
        }
        else {
        return x;
        }
    }

    alert( pow(2, 5) ); //32


