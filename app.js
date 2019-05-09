// BUDGET CONTROLLER
var budgetController = (function() {
 
})();

// UI CONTROLLER
var UIController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }
  return {
    getinput: function() {
     return {
       type: document.querySelector(DOMstrings.inputType).value, //The value will be inc or exp
       description: document.querySelector(DOMstrings.inputDescription).value,
       value: document.querySelector(DOMstrings.inputValue).value
     }
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  }
})();

// GLOBALL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var DOM = UIController.getDOMstrings();
    
  var ctrlAddItem = function(){
    // 1. Get the field input data;
    var input = UIController.getinput();
    console.log(input);
    // 2. Add the item to the budget controller;
    // 3. Add the item to the UI;
    // 4. Calculate the budget;
    // 5. Display the budget on the UI;
    console.log('It works!');
  }
  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    // event.which is used on older browsers, as they dont heve the .keyCode property
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);