/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus){
    this.name = name,
    this.health = health,
    this.attackBonus = attackBonus
}

Pokemon.prototype.biteAttack = function(){
    return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function(){
    if (this.health > 0){
        return false;
    }
    return true;
}

// function simulateBattle(poke1, poke2, firstMove){
//     // currentAttacker = firstMove

//     let currentAttacker = firstMove === poke1.name ? poke1 : poke2,
//     opponent = currentAttacker === poke1 ? poke2 : poke1,
//     fight = true;
//     console.log('current Attacker is: ' ,currentAttacker);


//     // }

//     while (!currentAttacker.isDefeated() || !opponent.isDefeated()){
//         if(fight){
//             let totalValueOfAttack = currentAttacker.biteAttack(); 
//          opponent.health -= totalValueOfAttack;
//          fight = false;
//          console.log(`${opponent.name} is hit with ${totalValueOfAttack} damage, ${opponent.name} now has ${opponent.health} health`)
//         }
//     }
//     if (poke1.isDefeated() === true){
//         winner = poke2.name;  
//    } else if (poke2.isDefeated() === true) {
//        winner = poke1.name;
//    }
//     return `${winner} Wins!`
// }
// const krabby = new Pokemon('Krabby', 100, 50);
// const squirtle = new Pokemon('Squirtle', 50, 0);
