class Person {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printFullName () {
        console.log(`${this.firstName} ${this.lastName.toUpperCase()}`)
    }

    printFirstLetters () {
        console.log(`${this.firstName[0].toUpperCase()}.${this.lastName[0].toUpperCase()}.`)
    }
}

p1 = new Person("Jan", "Nowak");
p2 = new Person("Kamil", "Czerwinski")

p1.printFullName()
p1.printFirstLetters()
p2.printFullName()
p2.printFirstLetters()
