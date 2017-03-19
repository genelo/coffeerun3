(function(window) {
    'use strict'
    var App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }
    Truck.prototype.createOrder = function(order) {
        console.log('adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    };
    Truck.prototype.deliverOrder = function(customerId) {
        console.log('delivering order for ' + customerId);
        this.db.remove(customerId);
    };
    Truck.prototype.printOrders = function() {
        var customerIdArray = Object.keys(this.db.getAll());
        var temp = [];
        var count = 0;
        console.log('Truck #' + this.truckId + ' has pending orders:');

        customerIdArray.forEach(function(id) {
            temp[count++] = this.db.get(id);
            console.log(this.db.get(id));
        }.bind(this));
        return temp;
    };
    App.Truck = Truck;
    window.App = App;

})(window);
