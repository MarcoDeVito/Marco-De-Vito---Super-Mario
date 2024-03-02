// I cicli
// ciclo for

/* for (let i = 0; i < 10; i++) {
    if (i % 2 === 0)
        console.log(i);

}

/*
 */

// console.log("pausa"); 

/* for (let i = 1; i < 101; i++) {
    console.log(i);
    
}

for (let i = 1; i < 101; i++) {
    
    if (i%3===0 && i%15!==0) {
        console.log("Fizz");
    }
    else if (i%5===0 && i%15!==0) {
        console.log("Buzz");
    }
    else if (i%15===0) {
        console.log("Fizzbuzz");
    }
    else{
        
        console.log(i);
    }
     

    
}
*/

// Voglio calcolare la somma di tutti i numeri da 1 a 100
/* let tot = 0;

for (let i = 1; i <= 100; i++) {

    tot = tot + i;

}

console.log(tot);

// while
let n = 0;
while (n < 3) {
    console.log(n);
    n++;
}
 */

/* let random = 3;
while (random != 1) {
    if (random % 2 === 0) {
        random = random / 2;
        console.log(random);
    }

    else {
        random = random * 3 + 1;
        console.log(random);
    }
}

 */


let startGame = prompt(`Sei pronto?🎮 \n (1) Inizia la partita \n (2) Esci dal gioco`);
let life = 3;

while (startGame != '1' && startGame != '2') {
    startGame = prompt(`Sei pronto? \n (1) Inizia la partita\n (2) Esci dal gioco`);
}

// preme 1
if (startGame == '1') {
    alert(`💖:${life}\n\nBuona partita `)
    let player;
    let icon;
    do {
        player = prompt('Scegli il tuo personaggio:\n(1) Mario🟥 \n(2) Luigi🟩 ');

    } while (player != '1' && player != '2')

    if (player === '1') {
        player = "Mario"
        icon="🟥";

    }
    if (player === '2') {
        player = "Luigi"
        icon="🟩";
    }
    let nEnemy=0;
    let enemy;
    let rand=Math.floor(Math.random()*(10)+1) 
    // alert(`nemici=${rand}`);



    for (let i = 0; i < rand && life > 0; i++) {
        enemy = prompt(`        ${icon}💖:${life}\nAttento c'è il ${i+1}° nemico! 🍄\nPremi: \n (1) Salta e corri \n (2) Salta sopra al nemico ed eliminalo`);
        
        switch (enemy) {
            case '1':
                alert(`        ${icon}💖:${life}\nc'è mancato poco! Sei riuscito a schivare il ${i + 1}° nemico`);
                nEnemy++;
                break;
            case '2':
                alert(`        ${icon}💖:${life}\nWOW! bravissimo ${player}!\nHai fatto fuori il ${i + 1}° nemico!\nContinua così`);
                nEnemy++;
                break;

            default:
                life--;
                alert(`        ${icon}💖:${life}\nPeccato sei stato troppo lento...ti ha fatto perdere una vita`)
                break;
        }
    }
    

    switch (life) {
        case 0:
            alert(`Mi spiace ${player}${icon}! 😭😭\n\n GAME OVER`);
            break;
        
        default:
            alert(`Complimenti ${player}${icon}! 🏆\nHai sconfitto ${nEnemy} nemici, ora puoi salvare la principessa 👑`);
            break;
    }
   
   
} else {
    alert(`Sei uscito dal gioco! Mi spiace che tu non voglia giocare oggi!`)
}



