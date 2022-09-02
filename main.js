function setEventListeners() {
    const sizing = document.querySelector("#size-select");
    const clear = document.querySelector("#clear");
    const color = document.querySelector("#print-color");

    sizing.addEventListener("input", splitBoard);
    clear.addEventListener("change", changeColor);
    color.addEventListener("input", changeColor);
}

function splitBoard() {
    const sizing = document.querySelector("#size-select");
    const board = document.querySelector("#board");
    const size = +sizing.value;
    // limpiar tablero
    board.innerHTML = "";
    // crear nuevo
    for(let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < size; j++) {
            const celd = document.createElement("div");
            celd.classList.add("celd");
            row.appendChild(celd);
        }
        board.appendChild(row);
    }
}

function changeColor() {
    const board = document.querySelector("#board");
    const clear = document.querySelector("#clear");
    let color = document.querySelector("#print-color");
    color = (clear.checked) ? "#ffffff" : color.value;
    //Añado el evento al tablero para evitar añadirlo a cada div con la clase celd
    board.addEventListener("mouseover", function(e) {
        if(e.target.classList.contains("celd")) {
            const celd = e.target;
            celd.setAttribute("style", `background-color: ${color}`);
        }
    });
}

function configDrawing() {
    splitBoard();
    changeColor();
    setEventListeners();
}

configDrawing();
