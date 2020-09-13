let order = []; //Ordens aleatorias do game
let clickedOrder = []; //Ordem dos cliques
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//Criando ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


//Acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

//Checa se os botoes clicados estão iguais a ordem gerada
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Funçao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//Função de retorno da cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }
    else if(color == 1){
        return red;
    }
    else if(color == 2){
        return yellow;
    }
    else if(color == 3)
    {
        return blue;
    }
}

//Proximo Nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//GameOver
let lose = () => {
    alert(`Você perdeu! Sua Pontuação: ${score}\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}


//Inicia o jogo
let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}


green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
