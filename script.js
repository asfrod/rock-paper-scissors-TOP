// Vamos a hacer un juego de piedra, papel y tijeras:


// Selecciona de manera aleatoria una de las tres opciones para la máquina
function computerPlay() {
    let option = ["rock", "paper", "scissors"];
    
    const random = Math.floor(Math.random() * option.length);
    const select = option[random] ;
    return select;
}

//computerPlay()


// Corre el juego utilizando como entradas la elección del jugador y la elección aleatoria de la anterior función
function rps(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        

        //Creando un nuevo elemento div dentro de body para mostrar el resultado
        const divResult = document.querySelector('.results');
        divResult.textContent = 'Has Ganado!!!!!';

        return a = 1;;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        //Creando un nuevo elemento div dentro de body para mostrar el resultado
        const divResult = document.querySelector('.results');
        divResult.textContent = 'Has Ganado!!!!!';
        return a = 1;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        //Creando un nuevo elemento div dentro de body para mostrar el resultado
        const divResult = document.querySelector('.results');
        divResult.textContent = 'Has Ganado!!!!!';       
        return a = 1;
    }

    else if (playerSelection == computerSelection) {
        //Creando un nuevo elemento div dentro de body para mostrar el resultado
        const divResult = document.querySelector('.results');
        divResult.textContent = 'Empate, que locura!!!!!';      
        return a = 0;
    }

    else {
        //Creando un nuevo elemento div dentro de body para mostrar el resultado
        const divResult = document.querySelector('.results');
        divResult.textContent = 'Perdiste, que loca';       
        return a = -1;
    }
}


function game() {
    let b = 0;      //inicializo la variable b para almacenar la suma de los resultados de cada juego
    //alert("Recuerda abrir la consola")
    for (let i = 0; i<5; i++) {
        const computer = computerPlay();    //cada vez que inicia un ciclo se genera una elección aleatoria para la máquina
        const ply = prompt("¿Cúal es tu elección?: rock, paper, scissors").toLocaleLowerCase()
        
        const a = rps(ply, computer);
        b = b + a;
    }

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




//Se llama cada botón y se le asigna el argumento a ingresar en la función
//para jugar


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