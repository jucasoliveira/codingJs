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

  var DOMStrings = {
    inputType : '.add__type',
    inputDescription : '.add__description',
    inputValue : '.add__value',
    inputBtn : '.add__btn'
  }

  return {
    getinput : function() {
      return {
         type : document.querySelector(DOMStrings.inputType).value, //incoming or expenses
         description : document.querySelector(DOMStrings.inputDescription).value,
         value : document.querySelector(DOMStrings.inputValue).value,
      }
    },
    getDOMstrings : function() {
      return DOMStrings;
    }
  };

})();



//Control handler module
var controller = (function(budgetCtrl, uiCtrl) {

  var setupEventListeners = function() {

    var DOM = uiCtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keycode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

  };



  var ctrlAddItem = function() {
    // 1. Get the filled input data
    var input = uiCtrl.getinput();
    console.log(input);
    // 2. Add the item to the budget Controller

    // 3. Add the item to the UI

    //4 . Calculate the budget

    //5. Display the budget on the UI
  };

  return{
    init : function(){
      console.log('Application has started');
      setupEventListeners();
    }
  }


})(budgetController,uiController);


controller.init();
