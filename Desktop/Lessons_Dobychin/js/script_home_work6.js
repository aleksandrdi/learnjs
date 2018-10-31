
let Factory = {
    name: "Наш завод",
    director: "Иванов Иван Иванович",
    yearOfBuilding: 1970,
    workshops:  [
        {
            name: "Цех плавильный",
            numberOfWorkers: 32
        },
        {
            name: "Цех формовочный",
            numbersOfWorkers: 32
        }
    ],
    workOrNot: true,
    "factory location": "Нижневартовск",
    power: 2000

};

//console.log(Factory.workshops);
console.log(Factory.workshops[0].numberOfWorkers);
console.log(Factory["factory location"]);
Factory.workOrNot =  false;
console.log(Factory.workOrNot);
delete Factory.director;
console.log(Factory.director);
if(Factory.director === undefind){
    console.log("Свойство отсутсвует");
} else {
    console.log("Свойство есть");
}