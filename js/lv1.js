let openedCards = [];
let count = 0;
render(16);

function render(levelCards){
    const width = Math.sqrt(levelCards);
    // if(width % 2 !== 0)
    //     return console.log('invalid size')
    openedCards = [];
    let cardType = [];
    for (let i = 0; i < levelCards / 2; i++){
        cardType.push(i + 1);
        cardType.push(i + 1);
    }

    cardType = shuffle(cardType);

    let cont = document.querySelector('#wrapper')
    cont.innerHTML = "";

    for (let i = 0; i < width; i++){
        let div = document.createElement('div');
        div.className = "box";
        cont.appendChild(div);
    }

    let rows = document.getElementsByClassName('box');
    for(let i = 0; i < rows.length; i++){
        for (let j = i * width; j < (i +1) * width; j++){
            var d = document.createElement('div');
            d.innerHTML = cardType[j];
            d.type = cardType[j];
            d.className = "memory";
            rows.item(i).appendChild(d);
        }
        let flipp = document.getElementById('memory')[i].addEventlistener('click', flipp);
    }
}

function shuffle(arr){
    let cards = arr.length;
    while(cards > 0){
        let ranCard = Math.floor(Math.random() * cards);
        cards--;
        let temp = arr[cards];
        arr[cards] = arr[ranCard];
        arr[ranCard] = temp;
    }
    return arr;
}

function flipp(){
    count++;
    if(count < 3){
        if(count == 2){

        }
        document.div.style.background = "red"
    }
}

