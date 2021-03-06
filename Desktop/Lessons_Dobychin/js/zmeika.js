    const FIELD_SIZE_X = 22;
    const FIELD_SIZE_Y = 17;
    let gameIsRunning = false;
    let snake = [];
    let block = [];
    let snakeSpeed = 1500;
    let snakeDirection = "y+"; //текущие направление движения змейки
    let snakeTimer; //таймер змейки
    let foodTimer; //таймер еды
    let blockTimer;
    let blockClear;
    let clearSpeed = 5000;
    let score = 0; //очки
    let foodCreationSpeed = 2000;
    let blockSpeed = 3000;
    let blockX;
    let blockY;
//инициализация игрового пространства
    function init() {
          prepareGameFeild();
    //обработчики на кнопки
          document.getElementById("snake_start").addEventListener("click", startGame);
          document.getElementById("snake_renew").addEventListener("click", renewGame);

    addEventListener("keydown", changeSnakeDirection);
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
        if(gameIsRunning == true) {
            let snakeHeadClasses = snake[snake.length - 1].getAttribute("class").split(" ");
            let newUnit; //передвигаем голову на единицу
            let snakeCoords = snakeHeadClasses[1].split("-");
            let coordX = parseInt(snakeCoords[1]);
            let coordY = parseInt(snakeCoords[2]);

            if (snakeDirection == "y+") {
                newUnit = document.getElementsByClassName("cell-" + coordX + "-" + (coordY + 1))[0];
            }
            else if (snakeDirection == "y-") {
                newUnit = document.getElementsByClassName("cell-" + coordX + "-" + (coordY - 1))[0];
            }
            else if (snakeDirection == "x-") {
                newUnit = document.getElementsByClassName("cell-" + (coordX - 1) + "-" + coordY)[0];
            }
            else if (snakeDirection == "x+") {
                newUnit = document.getElementsByClassName("cell-" + (coordX + 1) + "-" + coordY)[0];
            }
           // let foodcell = getAttribute("class").split(" ")[1];
            if (newUnit != undefined  ) {

                //добавляем новую часть змейки
                newUnit.setAttribute("class", newUnit.getAttribute("class") + " snake-unit");
                snake.push(newUnit);

                let checkcell =  newUnit.getAttribute("class").split(" ")[2];

                //очищаем хвост только если не натыкаемся на еду
                switch(checkcell) {
                    case "food-unit":
                        score++;
                        break;
                    case  "snake-unit":
                        let removeSnake = snake.splice(0, 1)[0];
                        let classes = removeSnake.getAttribute("class").split(" ");
                        removeSnake.setAttribute("class", classes[0] + " " + classes[1]);
                        break;
                    case "block-unit":
                        gameIsRunning = false;
                        alert("Вы врезались в препятствие!");
                        break;

                }


            } else {
                finishTheGame();
            }

            //проставляем счёт
            addScore();

        }
    }

    function  addScore(){

        let elem = document.getElementById("score");

        document.createElement("p");
        elem.innerText = "Счёт " + score;
    }


    function createFood() {
        let foodCreated = false;
        while (!foodCreated) {
            let foodX = Math.floor(Math.random() * (FIELD_SIZE_X));
            let foodY = Math.floor(Math.random() * (FIELD_SIZE_Y));

            let foodCell = document.getElementsByClassName("cell-" + foodX + "-" + foodY)[0];

            let foodCellClasses = foodCell.getAttribute("class").split(" ");

            if (!foodCellClasses.includes("snake-unit") || !foodCellClasses.includes("block-unit")) {
                //ставим еду
                foodCell.setAttribute("class", foodCellClasses.join(" ") + " food-unit");
                foodCreated = true;
            }
        }
    }

    function createBlock(){

        let blockCreated= false;
        while(!blockCreated){
            blockX = Math.floor(Math.random() * (FIELD_SIZE_X));
            blockY = Math.floor(Math.random() * (FIELD_SIZE_Y));

            let blockCell = document.getElementsByClassName("cell-" + blockX + "-" + blockY)[0];
            let blockCellClasses =  blockCell.getAttribute("class").split(" ");

            if(!blockCellClasses.includes("block-unit") || !blockCellClasses.includes("snake-unit")) {
                //ставим блок
                blockCell.setAttribute("class", blockCellClasses.join(" ") + " block-unit");
                blockCreated = true;
            }

            block.add(blockCell);
        }

    }

    function deleteBlock(){
        let delRandom = Math.floor(Math.random() * block.length);

        let delBlock = document.getElementsByClassName("cell-" + blockX + "-" + blockY)[delRandom];
        let delCellClasses = delBlock.getAttribute("class").split(" ");

        let removeBlock = delCellClasses.splice(0, 1)[0];

            //стираем блок
            delBlock.setAttribute("class", removeBlock[0] + " " + removeBlock[1]);

    }

    function changeSnakeDirection(e){
        console.log(e.keyCode);
        switch(e.keyCode){
            case 38:
                 if(snakeDirection != "y+") {
                    snakeDirection = "y-";
                 }
            break;
            case  39:
                 if(snakeDirection != "x-") {
                    snakeDirection = "x+";
                 }
            break;
             case  40:
                if(snakeDirection != "y-") {
                    snakeDirection = "y+";
            }
            break;
            case  37:
                if(snakeDirection != "x+") {
                    snakeDirection = "x-";
            }
            break;
        }
    }

    function finishTheGame(){
        gameIsRunning = false;
        alert("Игра окончена!");
    }
    function startGame(){
         gameIsRunning = true;
         console.log(snake);
         respawn();
         snakeTimer = setInterval(moveSnake, snakeSpeed);
         foodTimer = setInterval(createFood, foodCreationSpeed);
         blockTimer = setInterval(createBlock, blockSpeed);
         blockClear = setInterval(deleteBlock, clearSpeed); //удалём через некоторое время

    }

    function renewGame(){
         location.reload();
    }

    window.onload = init;
