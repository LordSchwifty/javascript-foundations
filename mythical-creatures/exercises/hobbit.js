class Hobbit {
    constructor(hobbit, age = 0, adult = false, old = false, hasRing = false) {
        this.name = hobbit.name
        this.age = age
        this.adult = adult
        this.old = old
        this.hasRing = hasRing
    }
    celebrateBirthday() {
        this.age ++
      if(this.age >= 101) {
        this.old = true
    } else if(this.age >= 33){
            this.adult = true
    }
}
    getRing() {
        if(this.name === 'Frodo') {
            this.hasRing = true
            return `Here is the ring!`
        } else {
            return `You can\'t have it!`
        }
    }
  
}
module.exports = Hobbit;