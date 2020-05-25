// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

// Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

// Програттын холбогч контроллер
var appController = (function (uiController, financeController) {})(
  uiController,
  financeController
);
