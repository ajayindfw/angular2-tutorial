var t: number = 1;

enum Color {Red, Green, Blue};

var color: Color =  Color.Blue;

var notSure: any = 4;
notSure = 4;
notSure = "Ajay";
notSure = false;
var TestVar: null = null;
console.log("hello world");
var str: String[] | string;
str = "Ajay";
str = ["Ajay", "Abhay"];

type MyNumber = number;
var x : MyNumber = 1;

var isValid: boolean = false;
if (isValid) {
    alert("isValud");
}

var obj: any = {a: 1, b: 2, c: 3};
for (var key in obj) {
    if (obj.hasOwnProperty(key))
        console.log("key: " + key + " value: " + obj[key]);
}

var numbers: number[] = [ 2, 3, 4, 5, 6];

for (var i: number = 0; i < numbers.length; i++) {
    console.log("i: " + i + " value: " + numbers[i]);
}

var greet = (name?: string): string => {
    if (name) {
        return "Hi: " + name;
    }
    else {
        return "Hi";
    }
};

console.log(greet("hello"));

class Character {
    fullname: string;
    constructor(firstName: string, lastName: string) {
        this.fullname = firstName + " " + lastName;
    }

    greet(name?: string) {
       if (name) {
            return "Hi! " + name + "! my name is " + this.fullname;
        }
        else {
            return "Hi! my name is " + this.fullname;
        }
    }
}

var c: Character = new Character("Ajay", "Gupta");
var msg = c.greet();
console.log("message: " + msg);
console.log("message 2 " + c.greet("Dr. Haley"));
