let count = 0;
let flipped = []
let pictures = ["../img/asian-blackbear.png", "../img/blackbear.png", "../img/brownbear.png", "../img/panda.png", "../img/polar-bear.png", "../img/sloth-bear.png", "../img/spectacled-bear.png", "../img/sun-bear.png"]

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
            d.innerHTML = cardType[j] + 1;
            d.type = cardType[j];
            d.className = "memory";
            img.className = "image";
            img.src = pictures[cardType[j]]
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

const divs = document.querySelectorAll('.memory')
divs.forEach(div => {
    div.addEventListener('click', () => {
        count++;
        if (count < 3){
        div.classList.toggle('flip')
        if (count == 1){
            flipped.push(div)
        }
        else if (count == 2){
            flipped.push(div)
            compare(flipped)
            flipped = []
            count = 0
        }
    }
    })
})

function compare(list){
    if(list[0].type == list[1].type){
        alert("Bärtastisch!")
    }
    else{
        setTimeout(() => {
            list[0].classList.toggle('flip')
            list[1].classList.toggle('flip')
        }, 500)
        
    }
}

