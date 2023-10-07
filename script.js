class Warrior {
    constructor(life, power){

    this.life = life
    this.power = power
}

attack() {
    console.log(`Golpe de ${this.power}`)
}

defend () {
    console.log(`Te quedas con ${this.life - this.power} puntos de vida`)
}
}


class Maya extends Warrior{
   /*
    constructor(life, power){
    this.life = life
    this.power = power
    }
    */

    drinkColaCao(){
        console.log(`Suma ${this.power + 10} puntos de poder`)
       }
}

class Aztec extends Warrior{
    /*
    constructor(life, power){
     this.life = life
     this.power = power
    }
    */
    drinkNesquik(){
        console.log(`Suma ${this.life + 10} puntos de vida`)
    }
 }

const azteca = new Aztec(100, 50)
const maya = new Maya(100, 50)


azteca.drinkNesquik()
maya.drinkColaCao()
maya.attack()
azteca.defend()
azteca.attack()
maya.defend()
