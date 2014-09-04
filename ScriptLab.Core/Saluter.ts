module Services {
    export class Saluter {
        person: Models.Person;
        constructor(person: Models.Person) {
            this.person = person;
        }

        salute(): void {
            alert(this.person.getFullName() + " I salute you.");
        }

        // tests
    }
} 