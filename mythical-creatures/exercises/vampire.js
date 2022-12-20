class Vampire {
    constructor(name, pet = "bat", thirsty = true) {
     this.name = name
     this.pet = pet
     this.thirsty = thirsty
     this.ouncesDrank = 0
    }
drink() {
    this.ouncesDrank += 10
    if(this.ouncesDrank >= 10) {
      this.thirsty = false
    } else if (this.ouncesDrank > 50)
      return `I\'m too full to drink anymore!`

}
}

module.exports = Vampire;