module Services {
    export class Greeter {
        person: Models.Person;
        constructor(person: Models.Person) {
            this.person = person;
        }

        sayHello(): void {
            alert("Hello " + this.person.getFullName());
        }
    }
} 