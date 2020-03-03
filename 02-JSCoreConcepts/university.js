names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter){
        return this.names.filter(x => x.startsWith(letter))          // names (array) which starts with the letter
    }

    sort() {
        return this.names.sort()             // names (array) in alphabetical order 
    }

    get() {
        return this.names             // names (array) in natural order
    }

    getFirst(n) {
        return this.names.slice(0,n)// get first 'n' names (array) 
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.getFirst(4).sort()); // To naprawione
// console.log(students.startWith('M').sort().getFirst(2)); // To nie
console.log(students.get());


