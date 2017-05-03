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


})();


//UI module
var uiController = (function() {

  return {
    getinput : function() {
      return {
         type : document.querySelector('.add__type').value, //incoming or expenses
         description : document.querySelector('.add__description').value,
         value : document.querySelector('.add__value').value,
      }

    }
  };

})();



//Control handler module
var controller = (function(budgetCtrl, uiCtrl) {

  var ctrlAddItem = function() {
    // 1. Get the filled input data
    var input = uiCtrl.getinput();
    // 2. Add the item to the budget Controller

    // 3. Add the item to the UI

    //4 . Calculate the budget

    //5. Display the budget on the UI
  };

  document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keycode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController,uiController);
