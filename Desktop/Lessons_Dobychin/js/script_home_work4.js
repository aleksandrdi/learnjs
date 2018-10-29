// 1 задание, Написать функции, преобразующию число в объект

    let number = parseInt(prompt('Введите число от 0 до 999:', ''));

    while(isNaN(number) || number <= 0 || number > 999){
        alert("Вы ввели некоректные данные");
        number = parseInt(prompt('Введите число от 0 до 999:', ''));
    }

    function getObjectFromNumber(number){
        let object = {};

            object["единицв"] = number % 10;
            object["десятки"] = Math.floor(number / 10) % 10;
            object["сотни"] = Math.floor(number / 100) % 10;

            return object;
        }

        console.log(getObjectFromNumber(number));











