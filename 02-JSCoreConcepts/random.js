let arr = []

let randomizer = (min_value, max_value) => {
    return Math.floor(Math.random() * (max_value - min_value + 1) + min_value);
}

let fillArr = (arr) => {
    for(let i=0; i<10; i++){
        arr.push(randomizer(5, 20))
    }
}

let printArr = (arr) => {
    for (let element of arr){
        console.log(element)
    }
}

fillArr(arr);
printArr(arr);