module Utilities.Services {
    export class Shouter {
        person: Models.Person;
        constructor(person: Models.Person) {
            this.person = person;
        }

        shout(): void {
            alert("HELLO "+this.person.getFullName().toUpperCase()+"!!!");
        }
    }
} 