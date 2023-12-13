


class RedCard {
    constructor() {
        this.jugador1 = "Naruto Kun"
        this.cost = 3
        this.power = 3
        this.resilience = 4
    }
    sayRedCard() {
        console.log(this.jugador1, this.cost, this.power, this.resilience)
    }
    sayHardAlgorithm() {
        this.cost -= 2
        this.resilience += 3
    }
    sayRejection() {
        this.resilience -= 2
    }
    sayCoupleProgramming(){
        console.log("¡¡¡you don't have enough points for this move!!!")
    }


}
let jugador1 = new RedCard()
jugador1.sayRedCard()
jugador1.sayHardAlgorithm()
jugador1.sayRedCard()
jugador1.sayRejection()
jugador1.sayRedCard()
jugador1.sayCoupleProgramming()

class BlackCard {
    constructor() {
        this.jugador2 = "Sasuke Kun"
        this.cost = 4
        this.power = 5
        this.resilience = 4
    }
    sayBlackCard() {
        console.log(this.jugador2, this.cost, this.power, this.resilience)
    }
    sayRejection() {
        this.cost -= 1
    }


}
let jugador2 = new BlackCard()
jugador2.sayBlackCard()
jugador2.sayRejection()
jugador2.sayBlackCard()



