// BUDGET CONTROLLER
var budgetController = (function() {
 
})();

// UI CONTROLLER
var UIController = (function() {

})();

// GLOBALL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function(){
    // 1. Get the fildd input data;
    // 2. Add the item to the budget controller;
    // 3. Add the item to the UI;
    // 4. Calculate the budget;
    // 5. Display the budget on the UI;
    console.log('It works!');
  }
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    // event.which is used on older browsers, as they dont heve the .keyCode property
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);