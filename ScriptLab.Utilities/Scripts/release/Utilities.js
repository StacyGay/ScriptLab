var Utilities;
(function (Utilities) {
    (function (Services) {
        var Shouter = (function () {
            function Shouter(person) {
                this.person = person;
            }
            Shouter.prototype.shout = function () {
                alert("HELLO " + this.person.getFullName().toUpperCase() + "!!!");
            };
            return Shouter;
        })();
        Services.Shouter = Shouter;
    })(Utilities.Services || (Utilities.Services = {}));
    var Services = Utilities.Services;
})(Utilities || (Utilities = {}));
//# sourceMappingURL=Utilities.js.map
