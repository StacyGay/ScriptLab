var Services;
(function (Services) {
    var Greeter = (function () {
        function Greeter(person) {
            this.person = person;
        }
        Greeter.prototype.sayHello = function () {
            alert("Hello " + this.person.getFullName());
        };
        return Greeter;
    })();
    Services.Greeter = Greeter;
})(Services || (Services = {}));
var Models;
(function (Models) {
    var Person = (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person.prototype.getFullName = function () {
            return this.firstName + " " + this.lastName;
        };
        return Person;
    })();
    Models.Person = Person;
})(Models || (Models = {}));
var Services;
(function (Services) {
    var Saluter = (function () {
        function Saluter(person) {
            this.person = person;
        }
        Saluter.prototype.salute = function () {
            alert(this.person.getFullName() + " I salute you.");
        };
        return Saluter;
    })();
    Services.Saluter = Saluter;
})(Services || (Services = {}));
//# sourceMappingURL=Core.js.map
