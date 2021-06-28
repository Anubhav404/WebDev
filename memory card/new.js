const cards = document.querySelectorAll(".memory-card");

let hasFlipCard = false;
let firstCard, secondCard;
let lockCards = false;


function flipCard() {
    if (lockCards) return;
    // console.log(this); //Here this is refering to the cards means it have the class of memory-card 
    // this.classList.toggle("flip");//so on clicking on the card flip class will be added and on again clicking on it the flip class will be removed this is the use of toggle 
    this.classList.add('flip');


    // aap click kroge toh hasflip card false h toh if me ghusega or hasflipcard true ho jayga or this ko firstCard se replace krdega or usme flip nam ki class add ho jygi or second click par fir else me ayga  or this secondCard se replace ho jayga or second Card me flip class add ho jygi or age click krne par yeh hota rahega;

    if (!hasFlipCard) {
        hasFlipCard = true;
        firstCard = this;
        // console.log(this);
    }
    else {
        hasFlipCard = false;
        secondCard = this;
        // console.log(firstCard.dataset.framework);
        // console.log(secondCard.dataset.framework);
        checkForMatch();
    }

    // We can also use terneray operator instead of if else statement
    // let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    // isMatch ? removeEvent() : unflipCards() ;
    function checkForMatch() {
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            removeEvent();
        }
        else {
            unflipCards();
        }

    }

    function removeEvent() {
        firstCard.removeEventListener('click', flipCard); //agar event listener hi hum remove lkr denge to voh click krne pr fir se rotate hi nhi karega or vaha ka vaha stop ho jyga agar first and second card dono equal h to 
        secondCard.removeEventListener('click', flipCard);
    }

    function unflipCards() {

        lockCards = true;
        setTimeout(() => {
            firstCard.classList.remove("flip");//agar first and second card equal nahi h toh flip class remove krdo jisse voh apni positon pr aajynge 
            secondCard.classList.remove("flip");

            lockCards = false;
        }, 1500);
    }

}

(function shufflingCards() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 12);
        card.style.order = random;
    })
})(); // now this function is an expression I don't know what it means i m goin to search it and whever i see this code in future it will remind me to watch it again and will remind me how stupid i am and i don't know anything about javascript;

cards.forEach(card => card.addEventListener('click', flipCard));