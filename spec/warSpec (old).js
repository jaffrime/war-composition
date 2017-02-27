describe('refueler', function () {
  it('should be defined', function () {
    expect(refueler).toBeDefined();
  });

  it('should be a function', function () {
    expect(typeof refueler).toEqual('function');
  });

  it('should return an object when invoked', function () {
    expect(typeof refueler()).toEqual('object');
  });

  it('should return an object with the property, "refuel"', function () {
    expect(refueler()).toHaveProperty('refuel');
  });
});

describe('refueler().refuel', function () {
  it('should be a function', function () {
    expect(typeof refueler().refuel).toEqual('function')
  });

  it('should increment the "gas" property of the given "state" object by 1', function () {

    var state = {
      gas: 0
    };

    var obj = compose(state, refueler(state));

    obj.refuel();

    expect(obj.gas).toEqual(1);
  });

});

describe('shooter', function () {
  it('should be defined', function () {
    expect(shooter).toBeDefined();
  });

  it('should be a function', function () {
    expect(typeof shooter).toEqual('function');
  });

  it('should return an object when invoked', function () {
    expect(typeof shooter()).toEqual('object');
  });

  it('should return an object with the property, "shoot"', function () {
    expect(shooter()).toHaveProperty('shoot');
  });
});

describe('shooter().shoot', function () {
  it('should be a function', function () {
    expect(typeof shooter().shoot).toEqual('function');
  });

  it('should set the "dead" property of a given object to "true"', function () {
    var obj1 = flyer({
      dead: false
    });

    var obj2 = shooter();
    obj2.shoot(obj1);

    expect(obj1.dead).toEqual(true);
  });
});

describe('saver', function () {
  it('should be defined', function () {
    expect(saver).toBeDefined();
  });

  it('should be a function', function () {
    expect(typeof saver).toEqual('function');
  });

  it('should return an object when invoked', function () {
    expect(typeof saver()).toEqual('object');
  });

  it('should return an object with the property, "save"', function () {
    expect(saver()).toHaveProperty('save');
  });
});

describe('saver().save', function () {
  it('should be a function', function () {
    expect(typeof saver().save).toEqual('function');
  });

  it('should set the "dead" property of a given object to "false"', function () {
    var obj1 = flyer({
      dead: true
    });

    var obj2 = saver();
    obj2.save(obj1);

    expect(obj1.dead).toEqual(false);
  });
});

describe('flyer', function () {
  it('should be defined', function () {
    expect(flyer).toBeDefined();
  });

  it('should be a function', function () {
    expect(typeof flyer).toEqual('function');
  });

  it('should return an object when invoked', function () {
    expect(typeof flyer()).toEqual('object');
  });

  it('should return an object with the property, "fly"', function () {
    expect(flyer()).toHaveProperty('fly');
  });
});

describe('flyer().fly', function () {
  it('should be a function', function () {
    expect(typeof flyer().fly).toEqual('function')
  });

  it('should increment the given "state" objects "position" by 10 if its "gas" property is greater than 0', function () {
    var state = {
      gas: 1,
      position: 0
    };

    var obj = compose(state, flyer(state));
    obj.fly();

    expect(obj.position).toEqual(10);
  });

  it('should NOT increment the given "state" objects "position" by if its "gas" property is less than 1', function () {
    var state = {
      gas: 0,
      position: 0
    };

    var obj = compose(state, flyer(state));
    obj.fly();

    expect(obj.position).toEqual(0);
  });

  it('should decrease the "gas" property on the given "state" object by 1 if its "gas" property is greater than 0', function () {
    var state = {
      gas: 1,
      position: 0
    };

    var obj = compose(state, flyer(state));
    obj.fly();

    expect(obj.gas).toEqual(0);
  });

  it('should NOT increase the "gas" property on the given "state" object if its "gas" property is less than 1', function () {
    var state = {
      gas: 0,
      position: 0
    };

    var obj = compose(state, flyer(state));
    obj.fly();

    expect(obj.gas).toEqual(0);
  });
});

describe('driver', function () {
  it('should be defined', function () {
    expect(driver).toBeDefined();
  });

  it('should be a function', function () {
    expect(typeof driver).toEqual('function');
  });

  it('should return an object when invoked', function () {
    expect(typeof driver()).toEqual('object');
  });

  it('should return an object with the property, "drive"', function () {
    expect(driver()).toHaveProperty('drive');
  });
});

describe('driver().drive', function () {
  it('should be a function', function () {
    expect(typeof driver().drive).toEqual('function')
  });

  it('should increment the given "state" objects "position" by 5 if its "gas" property is greater than 0', function () {
    var state = {
      gas: 1,
      position: 0
    };

    var obj = compose(state, driver(state));
    obj.drive();

    expect(obj.position).toEqual(5);
  });

  it('should NOT increment the given "state" objects "position" by if its "gas" property is less than 1', function () {
    var state = {
      gas: 0,
      position: 0
    };

    var obj = compose(state, driver(state));
    obj.drive();

    expect(obj.position).toEqual(0);
  });

  it('should decrease the "gas" property on the given "state" object by 1 if its "gas" property is greater than 0', function () {
    var state = {
      gas: 1,
      position: 0
    };

    var obj = compose(state, driver(state));
    obj.drive();

    expect(obj.gas).toEqual(0);
  });

  it('should NOT increase the "gas" property on the given "state" object if its "gas" property is less than 1', function () {
    var state = {
      gas: 0,
      position: 0
    };

    var obj = compose(state, driver(state));
    obj.drive();

    expect(obj.gas).toEqual(0);
  });
});

describe('plane', function () {
  it('should be a refueler, a flyer and a shooter', function () {
    var plane1 = plane();

    var props = [
      'refuel',
      'fly',
      'shoot'
    ];

    props.forEach(function(prop){
      expect(plane1).toHaveProperty('refuel');
      expect(plane1).toHaveProperty('fly');
      expect(plane1).toHaveProperty('shoot');
    });
  });
});

describe('medicJeep', function () {
  it('should be a refueler, a flyer and a saver', function () {
    var medicJeep1 = medicJeep();

    var props = [
      'refuel',
      'fly',
      'save'
    ];

    props.forEach(function(prop){
      expect(medicJeep1).toHaveProperty('refuel');
      expect(medicJeep1).toHaveProperty('fly');
      expect(medicJeep1).toHaveProperty('save');
    });
  });
});

describe('attackJeep', function () {
  it('should be a refueler, a flyer and a shooter', function () {
    var attackJeep1 = attackJeep();

    var props = [
      'refuel',
      'fly',
      'shoot'
    ];

    props.forEach(function(prop){
      expect(attackJeep1).toHaveProperty('refuel');
      expect(attackJeep1).toHaveProperty('fly');
      expect(attackJeep1).toHaveProperty('shoot');
    });
  });
});

describe('turret', function () {
  it('should be a shooter', function () {
    var turret1 = turret();

    var props = [
      'shoot'
    ];

    props.forEach(function(prop){
      expect(turret1).toHaveProperty('shoot');
    });
  });
});
