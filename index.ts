let userName: string = "Dmytro";
let age: number = 19;
let bool: boolean = true;
let arr: number[] = [1,2,3]; 
let obj: {name: string; age: number} = {name:"John", age: 30};

function formatPerson(person: {name: string; age: number}): string{
    return `Name: ${person.name}, Age: ${person.age}` 
}

console.log(formatPerson(obj));

interface Person{
    name: string;
    age: number;
    address?: string;
}

function printPerson(person: Person): void{
    console.log(`Name: ${person.name}, Age: ${person.age}`)
    if(person.address){
        console.log(`Address ${person.address}`);
    }
}
const person1: Person ={ name: "Alice", age: 25, address: "Main Str"};
const person2: Person ={ name: "Alice", age: 25};
printPerson(person1);
printPerson(person2);

type Status = 'success' | 'error' | 'loading';

function printStatus(status: Status): void{
    if(status === 'success'){
        console.log("Operation was successful")
    }
    else if(status === 'error'){
        console.log("An error occurred")
    }
    else if(status === 'loading'){
        console.log("Loading...")
    }
    else{
        console.log("Incorrect value")
    }
}

printStatus('success');
printStatus('error');
printStatus('loading');


function identity<T>(value: T): T{
    return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello world"));
console.log(identity<boolean>(true));

class Car{
    model: string; 
    year: number;
   constructor(model: string, year: number){
    this.model = model;
    this.year = year;
   };
   getCarInfo(): string{
    return `Model: ${this.model}, Year: ${this.year}`;
   }
}
const myCar  = new Car("Toyota", 2020);
console.log(myCar.getCarInfo());
