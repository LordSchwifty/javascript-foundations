class Hobbit {
    constructor(hobbit, age = 0, adult = false) {
        this.name = hobbit.name
        this.age = age
        this.adult = adult
    }
    celebrateBirthday() {
        this.age ++
    }
    timeTravel(num) {
        this.age += num
        if(this.age > 32) {
        this.adult = true
    } else if (this.age )
    }
}

module.exports = Hobbit;