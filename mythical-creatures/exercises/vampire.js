class Vampire {
    constructor(name, pet = "bat", thirsty = true) {
     this.name = name
     this.pet = pet
     this.thirsty = thirsty
     this.ouncesDrank = 0
    }
drink() {
    this.thirsty = false
    if (this.ouncesDrank === 50) {
        return `I\'m too full to drink anymore!`
    } else if (this.ouncesDrank < 50) {
        this.ouncesDrank += 10
    //   this.ouncesDrank -= 10
    }
    }
}


module.exports = Vampire;