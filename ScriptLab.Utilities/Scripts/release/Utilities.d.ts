declare module Utilities.Services {
    class Shouter {
        public person: Models.Person;
        constructor(person: Models.Person);
        public shout(): void;
    }
}
