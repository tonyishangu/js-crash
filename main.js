// const names = "Tonnie";
// const age = 22;

//         // concanate

// console.log('my name is ' + names +  ' and i am ' + age);

//         // template string

// console.log(`my name is ${names} and i am ${age}`);

// const s = 'hello world';
// console.log(s.length);

//         // ARRAYS
//         // CONSTRUCTOR

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers)

// const fruits = ['apples', 'oranges', 'mangos'];
//     //add to the array
// fruits[3]='grapes';
//     // or
// fruits.push('pears')
//     // add to the start
// fruits.unshift('strawberries')
//     // removing the last one
// fruits.pop()
//     // check if something is in an array
// console.log(Array.isArray(fruits))
//     // check index
// console.log(fruits.indexOf('oranges'))
// console.log(fruits);

        // OBJECTS

// const person = {
//     firstName: 'Tonnie',
//     lastName: 'Ishangu',
//     age : 22,
//     hobbies: ['music', 'movies', 'sports'],
//     address:{
//         street: 'Springs road',
//         city: 'kikuyu',
//         state: 'kiambu'
//     }
// }
// console.log(person)


// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         isComplete: true
//     },
//     {
//         id: 1,
//         text: 'meeting',
//         isComplete: true
//     },
//     {
//         id: 2,
//         text: 'visit doc',
//         isComplete: false
//     },
// ];
    // converting to json
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

    // FOR LOOP
// for(let i = 0;i <= 10; i++ ){
//     console.log(i)
// }

    //  while LOOP
// let i=0
// while(i<=10){
//     console.log(i); i++;
// }

    // looping through an array

// for (let i = 0; i <todos.length; i++) {
//    console.log(todos[i].text)
// }
    // OR
// for(let todo of todos){
//     console.log(todo.text)
// }
    // OR HIGH ORDER ARRAY METHOD (ADVISED)---FOREACH, MAP, FILTER
    // FOREACH
// todos.forEach(function(todo){
//     console.log(todo.text)
// })

    // MAP
// const todoText = todos.map(function(todo){
//     return todo.text
// })
// console.log(todoText)

    // FILTER
// const todoCompleted= todos.filter(function (todo) {
//     return todo.isComplete === true
// })
// console.log(todoCompleted)
 
    // IF

// const x = 45;

// if (x === 10 ){
//     console.log('x is 10');
// } else if (x > 10 ){
//     console.log('x is greater than 10');
// } else {
//     console.log('x is smaller than 10')
// }

    // TERNARY OPERATOR || CONDITIONAL.
// const x = 11;

// const color = x > 10 ? 'red' : 'blue';
// console.log(color)

    // SWITCH

// const x = 10;

// const color = x > 10 ? 'red' : 'blue';
// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }



    // FUNCTIONS

// function addNum(num1, num2){
//     console.log(num1 + num2);
// }
// addNum(5,4)

    //      OBJECT ORIENTED PROGRAMMING.
    //  CONSTRUCTOR FUNCTION

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
//     // this.getBirthYear = function(){
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function(firstName, lastName){
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }

//     //  PROTOTYPES

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

    //  CLASS
// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

//     // INSTANTIATE OBJECT
// const person1 = new Person('tonnie', 'ishangu', '1-5-1998');

// console.log(person1.getBirthYear())
// console.log(person1.getFullName())


        // DOM

        // SELECTORS(SINGLE ELEMENY && MULTIPLE ELEMENT)

        // single elememt

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

//         // multiple selector
        
// console.log(document.querySelectorAll('.item'));

        // looping

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

    //REMOVING UL 

// const ul = document.querySelector('.items');
// // ul.remove();
// ul.lastElementChild.remove();  //removing the last element
// ul.firstElementChild.textContent = 'Hello'; // editing the text
// ul.children[1].innerText = 'Tonnie'; // editting also

//     // styling
// const btn = document.querySelector('.btn');
// btn.style.background = 'purple'

    // EVENTS

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark');
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if (nameInput.value=='' || emailInput.value==''){
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';

        setTimeout(()=> msg.remove(), 3000);    // removing the messagge
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} || ${emailInput.value}`
        ));   

        userList.appendChild(li);    // add to list

        // clear list

        nameInput.value = '';
        emailInput.value = '';
    }
}














































































