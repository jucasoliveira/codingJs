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
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function(totalIncome) {

    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }

  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  }

  var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;

  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function(cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };

  var data = {
     allItems : {
       exp:[],
       inc:[]
     },
     totals:{
       exp:0,
       inc:0
     },
     budget : 0,
     percentage : -1
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

    deleteItem : function(type, id) {
      var ids , index;

      ids = data.allItems[type].map(function(current) {
        return current.id;
      });
      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget : function () {
        //calculate total inc and exp
        calculateTotal('exp');
        calculateTotal('inc');

        //calculate budget : inc - exp
        data.budget = data.totals.inc - data.totals.exp;

        //Calculate percentage of inc expent
        if (data.totals.inc > 0 ) {
          data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        } else {
          data.percentage = -1;
        }
    },

    calculatePercentages : function () {

        data.allItems.exp.forEach(function(cur) {
            cur.calcPercentage(data.totals.inc);
        });
    },

    getPercentages : function () {
      var allPercentage = data.allItems.exp.map(function (cur) {
        return cur.getPercentage();
      });
      return allPercentage;
    },

    getBudget : function () {
       return{
         budget : data.budget,
         totalinc : data.totals.inc,
         totalexp : data.totals.exp,
         percentage : data.percentage
       };
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
    inputBtn : '.add__btn',
    incomeContainer : '.income__list',
    expensesContainer : '.expenses__list',
    budgetLabel : '.budget__value',
    incomeLabel : '.budget__income--value',
    expenseLabel : '.budget__expenses--value',
    percentageLabel : '.budget__expenses--percentage',
    container : '.container',
    expPercLabel : '.item__percentage',
    dateLabel : '.budget__title--month'
  }

  var formatnumber = function(num, type){
      var numSplit, sign, int, dec, type;

      num = Math.abs(num);
      num = num.toFixed(2);

      numSplit = num.split('.');

      int = numSplit[0];

      if (int.length > 3) {
        int = int.substr(0,int.length - 3) + ',' + int.substr(int.length -3 ,3);
      }

      dec = numSplit[1];

      return (type === 'exp' ? sign = '-' : "+") + ' ' + int + "." + dec;

  };
  var nodeListForEach = function (list,callback) {
      for (var i = 0; i < list.length; i++) {
        callback(list[i], i);
      }
  };

  return {
    getinput : function() {
      return {
         type : document.querySelector(DOMStrings.inputType).value, //incoming or expenses
         description : document.querySelector(DOMStrings.inputDescription).value,
         value : parseFloat(document.querySelector(DOMStrings.inputValue).value),
      }
    },

    addListItem: function(obj, type) {
      var html, newHTML, element;
      //create html placeholdes
      if (type === 'inc') {
        element = DOMStrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%">'+
                        '<div class="item__description">%description%</div>'+
                        '<div class="right clearfix">'+
                            '<div class="item__value">%value%</div>'+
                            '<div class="item__delete">'+
                                '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'

      } else {
        element = DOMStrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%">'+
                  '<div class="item__description">%description%</div>'+
                  '<div class="right clearfix">'+
                    '<div class="item__value">%value%</div>'+
                    '<div class="item__percentage">21%</div>'+
                    '<div class="item__delete">'+
                      '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'+
                    '</div>'+
                  '</div>'+
                '</div>'

      }
      //replace placeholder with data
      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description);
      newHTML = newHTML.replace('%value%', formatnumber(obj.value,type));

      //insert html into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend',newHTML);
    },

    deleteListItem: function (selectorID) {
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },

    clearFields : function() {
        var fields, fieldsArray;

        fields = document.querySelectorAll(DOMStrings.inputDescription + ", "+ DOMStrings.inputValue);

        fieldsArray = Array.prototype.slice.call(fields);
        fieldsArray.forEach(function(current, index, array){
          current.value = "";
        });
        fieldsArray[0].focus();
    },

    displayBudget : function (obj) {

      var type;

      obj.budget > 0 ? type = 'inc' : type = 'exp';

      document.querySelector(DOMStrings.budgetLabel).textContent = formatnumber(obj.budget,type);
      document.querySelector(DOMStrings.incomeLabel).textContent = formatnumber(obj.totalinc, 'inc');
      document.querySelector(DOMStrings.expenseLabel).textContent = formatnumber(obj.totalexp, 'exp');

      if (obj.percentage > 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + "%";

      }else {
        document.querySelector(DOMStrings.percentageLabel).textContent = '---';

      }
    },

    displayPercentages : function (percentages) {

      var fields = document.querySelectorAll(DOMStrings.expPercLabel);

      nodeListForEach(fields, function(current, index) {
        if (percentages[index] > 0 ) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }

      });

    },

    displayMonth : function () {
        var now, year , month, months;
        now = new Date();
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','Octuber', 'November', 'December'];
        month = now.getMonth();
        year = now.getFullYear();
        document.querySelector(DOMStrings.dateLabel).textContent = months[month] + " " + year;
    },

    changedType : function () {
      var fields = document.querySelectorAll(
        DOMStrings.inputType + ',' +
        DOMStrings.inputDescription + ',' +
        DOMStrings.inputValue
      );
      nodeListForEach(fields, function (cur) {
        cur.classList.toggle('red-focus');
      });

      document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
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
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', uiController.changedType);
  };

  var updateBudget = function() {
    //1. Calculate the budget
    budgetController.calculateBudget();
    //2. Return the budget
    var budget = budgetController.getBudget();
    //3. Display the budget on the UI
    uiController.displayBudget(budget);
  };

  var updatePercentage = function () {
    budgetController.calculatePercentages();

    var percentages = budgetController.getPercentages();

    uiController.displayPercentages(percentages);
  };

  var ctrlAddItem = function() {
     var input, newItem;
    // 1. Get the filled input data
     input = uiCtrl.getinput();
     if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
       // 2. Add the item to the budget Controller
        newItem = budgetController.addItem(input.type,input.description,input.value);

       // 3. Add the item to the UI
         uiController.addListItem(newItem, input.type);

       // 4. clear the fields
         uiController.clearFields();

       // 5. Calculate and Update the budget
         updateBudget();

        //6. calculate percentage
          updatePercentage();

     }

  };

  var ctrlDeleteItem = function (event) {
    var itemID, splitID,type,id;

    itemID = event.target.parentNode.parentNode.parentNode.id;

    if (itemID) {
        splitID = itemID.split('-');
        type = splitID[0];
        id = parseInt(splitID[1]);

        budgetController.deleteItem(type, id);

        uiController.deleteListItem(itemID);

        updateBudget();

        updatePercentage();

    }
  };

  return{
    init : function(){
      console.log('Application has started');
      uiController.displayMonth();
      setupEventListeners();
      uiController.displayBudget({
        budget : 0,
        totalinc : 0,
        totalexp : 0,
        percentage : -1
      });
    }
  }


})(budgetController,uiController);


controller.init();
