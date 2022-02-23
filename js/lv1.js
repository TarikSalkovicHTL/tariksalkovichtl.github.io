let count = 0;
let flipped = []
let cardpairs = 0
let timeinterval;
let timer = 0;
let moves = 0;
let startgame = true;
let endgame = false;
let pictures = ["../img/asian-blackbear.png", "../img/blackbear.png", "../img/brownbear.png", "../img/panda.png", "../img/polar-bear.png", "../img/sloth-bear.png", "../img/spectacled-bear.png", "../img/red-panda.png"]

render(16);

function render(levelCards){
    const width = Math.sqrt(levelCards);
    let cardType = [];
    for (let i = 0; i < levelCards / 2; i++){
        cardType.push(i);
        cardType.push(i);
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
            let d = document.createElement('div');
            let img = document.createElement('img');
            // d.innerHTML = cardType[j] + 1;
            d.type = cardType[j];
            d.className = "memory";
            img.className = "image";
            img.src = pictures[cardType[j]]
            img.style.visibility = 'hidden'
            d.appendChild(img)
            rows.item(i).appendChild(d);
        }
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

document.querySelectorAll('.memory').forEach(div => {
    div.addEventListener('click', () => {
        if(startgame == true && endgame == false){
            timeinterval = setInterval(function() {
                timer++;
                console.log(timer)
                document.querySelector("#time").innerHTML = 'Time: ' + timer
            }, 1000)
        }
        moves++
        document.querySelector("#moves").innerHTML = 'Moves: ' + Math.floor(moves / 2)
        count++;
        if (count < 3){
        div.classList.toggle('flip')
        div.querySelector('.image').style.visibility = 'visible'
        if (count == 1){
            flipped.push(div)
        }
        else if (count == 2){
            flipped.push(div)
            compare(flipped)
            flipped = []
            count = 0
        }
        endgame = true;
    }
    if(cardpairs == 8){
        clearInterval(timeinterval)
        alert("Congratulations! You won my memory game!")
    }
    })
})

function compare(list){
    if(list[0].type == list[1].type){
        cardpairs++
        handler;
    }
    else{
        setTimeout(() => {
            list[0].classList.toggle('flip')
            list[1].classList.toggle('flip')
            list[0].querySelector('.image').style.visibility = 'hidden'
            list[1].querySelector('.image').style.visibility = 'hidden'
        }, 500)
        
    }
}

function handler(e){
    e.stopPropagation();
    e.preventDefault();
}

