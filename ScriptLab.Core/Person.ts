﻿module Models {
    export class Person {
        firstName: string;
        lastName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getFullName(): string {
            return this.firstName + " " + this.lastName;
        }
    }
} 