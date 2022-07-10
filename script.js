// Vamos a hacer un juego de piedra, papel y tijeras:


// Selecciona de manera aleatoria una de las tres opciones para la máquina
function computerPlay() {
    let option = ["rock", "paper", "scissors"];
    
    const random = Math.floor(Math.random() * option.length);
    const select = option[random] ;
    //console.log(select)
    return select;
}

//computerPlay()


// Corre el juego utilizando como entradas la elección del jugador y la elección aleatoria de la anterior función
function rps(playerSelection, computerSelection) {

    //console.log(playerSelection);
    //console.log(computerSelection);

    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Ganaste");
        const resultado = 1;
        return resultado;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Ganaste");
        const resultado = 1;
        return resultado;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Ganaste");
        const resultado = 1;
        return resultado;
    }

    else if (playerSelection == computerSelection) {
        console.log("Empate, sigue jugando");
        const resultado = 0;
        return resultado;
    }

    else {
        console.log("Perdiste hasta los calzoncillos")
        const resultado = -1;
        return resultado;
    }
}

//rps("paper", computerPlay())

//const computer = computerPlay();
//const ply = prompt("¿Cúal es tu elección?: rock, paper, scissors").toLocaleLowerCase()
//const player = "rocK";
//const ply = player.toLocaleLowerCase();

//rps(ply, computer)
//console.log(rps(ply, computer))


function game() {
    let b = 0;      //inicializo la variable b para almacenar la suma de los resultados de cada juego
    alert("Recuerda abrir la consola")
    for (let i = 0; i<5; i++) {
        const computer = computerPlay();    //cada vez que inicia un ciclo se genera una elección aleatoria para la máquina
        const ply = prompt("¿Cúal es tu elección?: rock, paper, scissors").toLocaleLowerCase()
        //const player = "rocK";
        //const ply = player.toLocaleLowerCase();
    
        const a = rps(ply, computer);
        //console.log(a);
        b = b + a;
    }
    //console.log(b)

    console.log("------------------------------");    

    if (b>0) {
        console.log("Ganaste el juego");
    }
    else if (b<0) {
        console.log("Perdiste el juego");
    }
    else {
        console.log("Que buen empate");
    }
}

//Se llama la función para iniciar el juego.
//game()





const rck = document.querySelector("#roca");
rck.addEventListener('click', () => {
    rps("rock", computerPlay());
});

const pper = document.querySelector("#papel");
pper.addEventListener('click', () => {
    rps("paper", computerPlay());
});

const sciss = document.querySelector("#tijera");
sciss.addEventListener('click', () => {
    rps("scissors", computerPlay());
});
