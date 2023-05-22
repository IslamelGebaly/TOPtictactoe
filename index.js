const gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const chooseX = (x, y) =>{
        gameboard[x * 3 + y] = "X";
    }

    const chooseO = (x, y) => {
        gameboard[x * 3 + y] = "O";
    };

    const getCell = (x, y) => {
        return gameboard[x * 3 + y];
    };

    return {
        gameboard,
        getCell,
        chooseX,
        chooseO
    }
})();

const displayController = (() => {
    let cells;

    function init(){
        this.cells = document.querySelectorAll("#board td");
    }

    function updateDisplay(){
        for(var i = 0; i < this.cells.length; i++){
            this.cells[i].textContent = gameboard.getCell(Math.floor(i/3), i%3)
        }
    }

    return {
        initialize: function(){
            init();
        },
        update : function(){
            updateDisplay();
        }
    }
})();

displayController.initialize();
gameboard.chooseO(1,2);
gameboard.chooseX(2,2);
gameboard.chooseX(0,0);
displayController.update();