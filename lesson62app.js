/* var uiController = (function () {
  console.log("helloo");
})();

console.log("helloo");
*/

/* var uiController = (function () {
  var x = 12;
  console.log("helloo");
})();

console.log(x);
*/

/* var uiController = (function () {
  var x = 12;
  console.log("helloo");
})();

var financeController = (function () {
  var x = 7;
  console.log("helloo from finance module");
})();
*/

/* var uiController = (function () {
  var x = 12;
  y = 123;
  console.log("helloo");
})();

var financeController = (function () {
  var y = 7;
  console.log(x);
  console.log("helloo from finance module");
})();
*/

/* var uiController = (function () {
  var x = 12;
  y = 123;
  console.log("helloo");
})();

var financeController = (function () {
  x = 3;
  console.log("helloo from finance module");
})();
*/

/* var uiController = (function () {
    var x = 12;
    y = 123;
    console.log("helloo");
  })();
  
  var financeController = (function () {
    x = 3;
    console.log("helloo from finance module" + x);
  })();
*/

/* var uiController = (function () {
  var x = 12;
  y = 123;
  console.log("helloo");
})();

var financeController = (function () {
  window.x = 3;
  console.log("helloo from finance module" + x);
})();
*/

/* var uiController = (function () {
  var x = 12;
  window.y = 123;
  console.log("helloo");
})();

var financeController = (function () {
  var y = 3;
  x = 3;
  console.log("helloo from finance module" + x);
})();
*/

/* var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }
})();

var financeController = (function () {})();

var appController = (function (uiCtrl, fnCtrl) {
  uiController.add(50);
})(uiController, financeController);
*/

/* var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      console.log(" хүлээн авсан утга : " + a);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiCtrl, fnCtrl) {
  uiController.add(50);
})(uiController, financeController);
*/

/* var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }
  return {
    add: function () {
      console.log("hey");
    },
    publicAdd: function (a) {
      console.log(" хүлээн авсан утга : " + a);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiCtrl, fnCtrl) {
  uiController.add(50);
})(uiController, financeController);
*/

/* var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      console.log(" хүлээн авсан утга : " + a);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiCtrl, fnCtrl) {
  uiController.publicAdd(50);
})(uiController, financeController);
*/

/* var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      a = add(a);
      console.log("Боловсруулсан утга : " + a);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiCtrl, fnCtrl) {
  uiController.publicAdd(50);
})(uiController, financeController);
*/

/* var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      a = add(a);
      console.log("Боловсруулсан утга : " + a);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiCtrl, fnCtrl) {
  uiController.add(50);
})(uiController, financeController);
*/

/* var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      a = add(a);
      console.log("Боловсруулсан утга : " + a);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiCtrl, fnCtrl) {
  console.log(uiController.x);
})(uiController, financeController);
*/

/* var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      a = add(a);
      console.log("Боловсруулсан утга : " + a);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiCtrl, fnCtrl) {
  uiController.publicAdd(150);
})(uiController, financeController);
*/

var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      a = add(a);
      console.log("Боловсруулсан утга : " + a);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiCtrl, fnCtrl) {
  uiController.publicAdd(150);
})(uiController, financeController);

var hunController = (function () {
  // data encapsulation
  // private data
  var bodol = "javascript толгой эргүүлмээр юм...";
  function tsusGuih() {}
  // private function
  function huchilturugchiigAgaaraasSorjTusruuOruulah() {}
  return {
    yarih: function () {
      bodol = "javascript бол лаг";
      huchilturugchiigAgaaraasSorjTusruuOruulah();
      tsusGuih();
      console.log("hi");
    },
  };
})();

// hunController.yarih();
// hunController.tsusGuih();
hunController.huchilturugchiigAgaaraasSorjTusruuOruulah();
