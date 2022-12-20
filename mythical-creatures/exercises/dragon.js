class Dragon {
 constructor(dragonName, dragonRider, isHungry = true) {
    this.name = dragonName,
    this.rider = dragonRider,
    this.hungry = isHungry,
    this.full = 0
    
 }
 greet() {
    return `Hi, ${this.rider}!`
 }
 eat() {
    this.full ++
    if(this.full === 3) {
        this.hungry = false
   }
}
}
module.exports = Dragon;