// დავალება N1 //

let count = 0;

document.getElementById('increaseButton').addEventListener('click', function() {
    count++;
    this.textContent = count;
});

document.getElementById('deleteButton').addEventListener('click', function() {
    this.remove();
});

const buttons = document.querySelectorAll('.btn-delete');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.style.background = 'black';
        this.style.color = 'white';
    })
});

// დავალება N2 //

const numArr = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 44, 50, 55, 60];

const oddElements = numArr.filter(num => num % 2 !== 0);
console.log('Odd elements:', oddElements);

const evenElements = numArr.filter(num => num % 2 === 0);
console.log('Even elements:', evenElements);

const greaterThanTen = numArr.filter(num => num > 10);
console.log('Elements greater than 10:', greaterThanTen);

const lessThanFortyFour = numArr.filter(num => num < 44);
console.log('Elements less than 44:', lessThanFortyFour);

const divisibleByFive = numArr.filter(num => num % 5 === 0);
console.log('Elements divisible by 5:', divisibleByFive);


// დავალება N3 //

const numArr1 = [11, 92, 83, 114, 15];

console.log("Elements of numArr:", numArr);

numArr1.forEach(num => {
    console.log(`Number: ${num}`);
});

numArr1.forEach(num => {
    const button = document.createElement("button");
    button.textContent = `Show ${num}`;
    button.onclick = () => alert(`You clicked on ${num}`);
    document.body.appendChild(button);
});

console.log("Squares of elements in numArr:");
numArr1.forEach(num => {
    const square = num * num;
    console.log(square);
});

numArr1.forEach(num => {
    const h2 = document.createElement("h2");
    h2.textContent = `Number is - ${num}`;
    document.body.appendChild(h2);
});


// დავალება N4 //

const numArr3 = [111, 222, 333, 444, 5555];
const squares = numArr3.map(num => num * num);
console.log(squares); 

const doubled = numArr3.map(num => num * 2);
console.log(doubled);

const plusTen = numArr3.map(num => num + 10);
console.log(plusTen);