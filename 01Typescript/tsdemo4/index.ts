//1、ts中类的定义
/* es5中类的定义:
function Person(name) {
    this.name = name;

    this.run = function() {
        console.log(this.name);
    }
}

var person = new Person('小黑');
person.run();
*/
/*
//ts中类的定义
class Person {
    name:string;

    constructor(name:string) {
        this.name = name;
    }

    run():void {
        console.log(this.name);
    }
}
var person = new Person('小黑');
person.run();
*/
class Person {
    name:string;

    constructor(name:string) {
        this.name = name;
    }

    getName():string {
        return this.name;
    }

    setName(name:string):void {
        this.name = name;
    }

    run():string {
        return `${this.name}在运动`
    }
}
var person = new Person('小黑');
console.log(person.getName());
person.setName('小白');
console.log(person.getName());

class Web extends Person {

    constructor(name:string){
        super(name);
    }
}
var web = new Web('小黑');
web.run();