const FIELD_SIZE_X = 22;
const FIELD_SIZE_Y = 17;

let snake = [];
let snakeSpeed = 500;
let snakeDirection = "y+"; //текущие направление движения змейки
let snakeTimer; //таймер змейки
let foodTimer; //таймер еды
let score = 0; //очки
//инициализация игрового пространства
function init() {
    prepareGameFeild();
    //обработчики на кнопки
    document.getElementById("snake_start").addEventListener("click", startGame);
    document.getElementById("snake_renew").addEventListener("click", renewGame);


}
//подготовка игрового поля

function prepareGameFeild() {
    let gameTable = document.createElement("table");
    gameTable.setAttribute("class", "game-table");
    //цикл, генерирующий ячеки игрового поля
    for(let y = 0; y< FIELD_SIZE_Y; y++){
        let row = document.createElement("tr");
        row.setAttribute("class", "game-table-row row-" + y);
        for(let x = 0; x < FIELD_SIZE_X; x++){
            let cell = document.createElement("td");
            cell.setAttribute("class", "game-table-cell cell-" + x + "-" + y);

            row.appendChild(cell);
        }

        gameTable.appendChild(row);

    }
    document.getElementById("snake_field").appendChild(gameTable);
}



/**генерация змейки
 * змейка будет по центру
 * */
function respawn() {
    let startCoordX = Math.floor(FIELD_SIZE_X / 2);
    let startCoordY = Math.floor(FIELD_SIZE_Y / 2);

    let snakeHead = document.getElementsByClassName("cell-" + startCoordX + "-" + startCoordY)[0];
    let prevSnakeHeadAttr = snakeHead.getAttribute("class");
    snakeHead.setAttribute("class", prevSnakeHeadAttr + " snake-unit");

    let snakeTail = document.getElementsByClassName("cell-" + startCoordX + "-" + (startCoordY-1))[0];
    let prevsnakeTailAttr = snakeHead.getAttribute("class");
    snakeTail.setAttribute("class", prevsnakeTailAttr + " snake-unit");

    snake.push(snakeTail);
    snake.push(snakeHead);

}

function moveSnake() {
    let snakeHeadClasses = snake[snake.length - 1].getAttribute("class").split(" ");
    let newUnit; //передвигаем голову на единицу
    let snakeCoords = snakeHeadClasses[1].split("-");
    let coordX = parseInt(snakeCoords[1]);
    let coordY = parseInt(snakeCoords[2]);

    if(snakeDirection == "y+") {
        newUnit = document.getElementsByClassName("cell-" + coordX + "-" + (coordY + 1))[0];
    }
    //добавляем новую часть змейки
        newUnit.setAttribute("class", newUnit.getAttribute("class") + " snake-unit");
        snake.push(newUnit);


}

function startGame(){
    respawn();
    snakeTimer = setInterval(moveSnake, snakeSpeed);

}

function renewGame(){
    location.reload();
}
window.onload = init;