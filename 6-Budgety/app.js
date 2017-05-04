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
  var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;

  };

  var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;

  };

  var data = {
     allItems : {
       exp:[],
       inc:[]
     },
     totals:{
       exp:0,
       inc:0
     }
  };

  return{
    addItem: function(type, des,val) {
        var newItem, ID;

        //new ID based on the last id.
        if(data.allItems[type].length > 0){
          ID = data.allItems[type][data.allItems[type].length-1].id + 1;
        } else {
          ID = 0;
        }


        if(type === 'exp'){
          newItem = new Expense(ID, des, val);
        } else if (type === 'inc') {
          newItem = new Income(ID, des, val);
        }

        data.allItems[type].push(newItem);

        return newItem;
    },

    testing : function(){
      console.log(data);
    }
  };


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
    var input, newItem;
    // 1. Get the filled input data
     input = uiCtrl.getinput();

    // 2. Add the item to the budget Controller
     newItem = budgetController.addItem(input.type,input.description,input.value);

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
