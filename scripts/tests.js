QUnit.test("Instantiate datastore",function(assert){
  var ds = new App.DataStore();
  assert.equal(true,ds!== undefined,"should not be null");
});
QUnit.test("add order", function(assert){
  var ds = new App.DataStore();
  ds.add('james@bond.com','eshpressho');
  ds.add('m@bond.com','tea');
  assert.equal(true, ds.data['james@bond.com']==='eshpressho' && ds.data['m@bond.com']==='tea',"should be eshpressho and tea");
});

QUnit.test("remove",function(assert){
  var ds = new App.DataStore();
  ds.add('james@bond.com','eshpressho');
  ds.remove('james@bond.com');
  assert.equal(true,ds.data['james@bond.com']===undefined,"should be undefined");
});
QUnit.test("get all", function(assert){
  var ds = new App.DataStore();
  ds.add('james@bond.com','eshpressho');
  ds.add('m@bond.com','tea');
  var orders = Object.keys(ds.getAll());
  assert.equal(true, orders[0] === "james@bond.com" && orders[1]=== "m@bond.com",'should have 2 orders');
});
QUnit.test("createOrder", function(assert){
  var myTruck = new App.Truck('007',new App.DataStore());
  myTruck.createOrder({emailAddress:'james@bond.com',coffee:'eshpressho'});
  assert.equal(true,myTruck.db.data['james@bond.com'].coffee==='eshpressho');
});
QUnit.test('deliver order',function(assert){
  var myTruck = new App.Truck('007',new App.DataStore());
  myTruck.createOrder({emailAddress:'james@bond.com',coffee:'eshpressho'});
  myTruck.deliverOrder('james@bond.com');
  assert.equal(true,myTruck.db.data['james@bond.com']===undefined,'should have empty list');
});
QUnit.test("print orders",function(assert){
  var myTruck = new App.Truck('007',new App.DataStore());
  myTruck.createOrder({emailAddress:'james@bond.com',coffee:'eshpressho'});
  myTruck.createOrder({emailAddress:'m@bond.com',coffee:'tea'});
assert.equal(true,myTruck.printOrders()[1].coffee === 'tea','should output tea');
})
//console.log does not return any values and only outputs strings to the screen
//cannot verify a console.log
