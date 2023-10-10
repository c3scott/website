let dragonHealth = 20
let userHealth = 10

document.getElementById("roll").onclick = function(){

let dragonRoll = Math.floor(Math.random()*6 + 1);
let userRoll = Math.floor(Math.random()*10 + 1);

console.log("Dragon rolled a: " + dragonRoll);
console.log("You rolled a: " + userRoll);

    if (dragonRoll < userRoll){
        dragonHealth = dragonHealth - 2;
        console.log("You hit the dragon!")
        console.log("Dragon's Health " + dragonHealth)
        console.log("Your health " + userHealth)
        document.getElementById("dragonHPDisplay").innerHTML = dragonHealth;
    }
    else if (dragonRoll == userRoll){
        console.log("The dragon dodged your attack!")
       
    }
    else{
        userHealth = userHealth - 2;
        console.log("The dragon scratchs you!")
        console.log("Dragon's Health " + dragonHealth)
        console.log("Your health " + userHealth)
        document.getElementById("userHPDisplay").innerHTML = userHealth;
    }

    if (dragonHealth < 12){
        document.getElementById("dragonHPDisplay")
        
    }

    let rollBut = document.getElementById("roll");


    if(dragonHealth <= 0 ){
        console.log("You win!")
       rollBut.remove();
     }else if (userHealth <= 0){
         console.log("You Died.")
         rollBut.remove();
     }else{

     }

        }

     
