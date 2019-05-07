var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    return 23 + a;
  }
  return {
    publicTest: function(b) {
      return add(b);
    }
  }
})();

var UIController = (function() {

})();

var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(7);
  return {
    otherFunction: function() {
      console.log(z);
    }
  }

})(budgetController, UIController);