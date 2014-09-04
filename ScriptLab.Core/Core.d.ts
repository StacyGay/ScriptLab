declare module Services {
    class Greeter {
        public person: Models.Person;
        constructor(person: Models.Person);
        public sayHello(): void;
    }
}
declare module Models {
    class Person {
        public firstName: string;
        public lastName: string;
        constructor(firstName: string, lastName: string);
        public getFullName(): string;
    }
}
declare module Services {
    class Saluter {
        public person: Models.Person;
        constructor(person: Models.Person);
        public salute(): void;
    }
}
