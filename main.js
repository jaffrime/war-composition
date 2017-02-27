var compose = function (targetObj) {
  var err = 'Error: all arguments passed in to compose must be objects';

  if (typeof targetObj !== 'object') {
    throw err;
  } else {
    for (var i = 1; i < arguments.length; i += 1) {
      var arg = arguments[i];

      if (typeof arg === 'object') {
        for (var key in arg) {
          targetObj[key] = arg[key];
        }
      } else {
        throw err;
      }
    }

    return targetObj;
  }
};

// defining actions
var refueler = function (state) {
  return {
    refuel: function () {
      state.gas += 1;
    }
  };
}

var shooter = function () {
  return {
    shoot: function (obj) {
      obj.state.dead = true;
    }
  };
}

var saver = function () {
  return {
    save: function (obj) {
      obj.state.dead = false;
    }
  };
}

var flyer = function (state) {
  return {
    fly: function () {
      if (state.gas > 0) {
        state.position += 10;
        state.gas -= 1;
      }
    }
  };
}

var driver = function (state) {
  return {
    drive: function () {
      if (state.gas > 0) {
        state.position += 5;
        state.gas -= 1;
      }
    }
  };
}


var plane = function () {
  var state = {
    gas: 10,
    position: 0,
    dead: false
  };

  return compose({},
    state,
    refueler(state),
    flyer(state),
    shooter()
  )
}

var medicJeep = function () {
  var state = {
    gas: 5,
    position: 0,
    dead: false
  };

  return compose({},
    state,
    refueler(state),
    driver(state),
    saver()
  )
}

var attackJeep = function () {
  var state = {
    gas: 5,
    position: 0,
    dead: false
  };

  return compose({},
    state,
    refueler(state),
    driver(state),
    shooter()
  )
}

var turret = function () {
  var state = {
    dead: false
  }

  return compose({},
    state,
    shooter()
  )
}


// // creating instances
// var plane = Plane();
//
// var medicJeep = MedicJeep();
//
// var attackJeep = AttackJeep();
//
// var turret = Turret();
