///Code structure
/*
Add event handler
Get input values
Add the new tiem to our data structure
Add the new item to the UI
Calculate budget
Update the UI
*/


//Controller module
var budgetController = (function() {

  var x = 23;

  var add = function(a) {
    return x + a;
  }

  return {
    publicTest : function(b) {
      return add(b);
    }
  }

})();


//UI module
var uiController = (function() {

  //some code

})();



//Control handler module
var controller = (function(budgetCtrl, uiCtrl) {

  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic : function() {
      console.log(z);
    }
  }

})(budgetController,uiController);
