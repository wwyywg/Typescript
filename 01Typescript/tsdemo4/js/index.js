"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person;
}());
var person = new Person('小黑');
console.log(person.getName());
person.setName('小白');
console.log(person.getName());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    return Web;
}(Person));
var web = new Web('小黑');
web.run();
