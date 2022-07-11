// Vamos a hacer un juego de piedra, papel y tijeras:



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


// Selecciona de manera aleatoria una de las tres opciones para la máquina
function computerPlay() {
    let option = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * option.length);
    const select = option[random] ;
    return select;
}

//computerPlay()


let w = 0;      //Inicializando el contador de victorias en cero
let l = 0;      //Inicializando el contador de derrotas en cero
// Corre el juego utilizando como entradas la elección del jugador y la elección aleatoria de la función computerPlay()
function rps(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        
        //Creando un nuevo elemento div dentro de body para mostrar el resultado
        const divResult = document.querySelector('.results');
        divResult.textContent = 'Has Ganado!!!!!';
        const a = 1;
        w = w + a;
        if (w === 5) {
            alert("Juego finiquitado, ganaste");
            alert("Atento, ya inicia un nuevo juego");
            w = 0;
            l = 0;
        }
        return w;
    }

    else if (playerSelection == computerSelection) {
        //Creando un nuevo elemento div dentro de body para mostrar el resultado
        const divResult = document.querySelector('.results');
        divResult.textContent = 'Empate, que locura!!!!!';      
        //const a = 0;
        //w = w + a;
        //return w;
    }

    else {
        //Creando un nuevo elemento div dentro de body para mostrar el resultado
        const divResult = document.querySelector('.results');
        divResult.textContent = 'Perdiste, que loca';       
        const a = -1;
        l = l + a;
        if (l === -5) {
            alert("Juego finiquitado, perdiste");
            alert("Atento, ya inicia un nuevo juego");
            w = 0;
            l = 0;
        }
        return w;
    }
}
