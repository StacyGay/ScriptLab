window.onload = function () {
    var person = new Models.Person("Stacy", "Gay");
    var greeter = new Services.Greeter(person);
    var saluter = new Services.Saluter(person);
    var shouter = new Utilities.Services.Shouter(person);

    greeter.sayHello();
    saluter.salute();
    shouter.shout();
    // test
};
//# sourceMappingURL=main.js.map
