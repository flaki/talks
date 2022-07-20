********************************************************


# JavaScript's Prototypes


---
## JavaScript's Prototypes
- What is the `prototype` in JavaScript
- Prototypal inheritance & the prototype chain
- Constructor functions & creating prototypes
- Object composition
- ES6 `class` syntax

> This part doesn't go to the speaker notes but at least it shows up nicely in the rendered markdown. Or does it really?


---
## The Prototype

```javascript
let anObject = { foo: "bar" };
console.log( Object.getPrototypeOf(anObject) );
// same as
console.log( anObject.__proto__ )
```

Prototypes are JavaScript objects that provide a "blueprint" with methods and properties/values for a group of JavaScript objects (other instances) sharing the same prototype object.

---
###  Missing prototype

- All objects in JavaScript receive a prototype.
- ...unless we explicitly specified otherwise.
- `Object.prototype` is an object that has no prototype.
- But _what is_ `Object.prototype`?

```javascript
console.log( typeof Object.prototype ); // == object

console.log( Object.getPrototypeOf( Object.prototype ) );
// == undefined
```

---
### Constructor functions

- Are just JavaScript functions
- ...but with an extra `prototype` property.
- We use `new` and a constructor function to create new object instances

```javascript
let f = function() {};
f.prototype = { createdBy: 'My constructor!' }

// The constructor function & new together wires up an object's runtime prototype
let obj = new f();
console.log( Object.getPrototypeOf( obj ) )
console.log( obj.createdBy )
```

---
### The runtime prototype
- The `<obj>.__proto__` pseudo-property is the same as the result of `Object.getPrototypeOf(<obj>)`
- This is called the _runtime prototype_
- It's used in _resolving property names_ and makes the object's _prototype chain_
- The `new` call sets the newly created object's runtime prototype so that it points to the object in the constructor's `prototype` property.

---
### The prototype chain

Objects are only allowed to have one prototype, but that prototype can have its own prototype, thus forming a _chain of prototypes_ - the **prototype chain**.

---
### Property resolution

This is also called **walking the prototype chain**.

---
### Why prototypes and not just inheritance

Prototypes (while they _can be used_ to recreate classical inheritance) are much more powerful than it may seem first. Prototypes enable _Object Composition_, a way to express complex taxonomies of objects using multiple simpler abstractions.

---

### "Ask not who I am, but what can I do!" — Object Composition

---
### Without object composition

```javascript
function Bus() {}
Bus.prototype = {
  reroute: function() {}
  refillGasoline: function() {}
}

function Tram() {}
Tram.prototype = {
  powerlineWattage: function() {}
  trackObstructions: function() {}
}

// let trolleyBus = new ...?
```

Which of these taxonomies does a [Trolleybus](https://en.wikipedia.org/wiki/Trolleybus) belong to?

> A Trolley bus is neither a Bus, nor a Tram. It's pretty much both, but not exactly either. It doesn't rhttps://notes.skylark.ee/#missing_documents.mdun on a track like a tram but draws power from an overhead wire. It, thus, doesn't require gasoline like a bus, but it can be rerouted as it has a battery reserve. We would need a completely new taxonomy for it, but then it would be problematic to distribute these properties in a way that minimizes repetition/copying, but doesn't give nonsensical properties to either of these object classes. Here's where Object Composition comes handy.

---
### With object composition

```javascript
function TrackboundVehicle() {}
TrackboundVehicle.prototype = {
    trackObstructions: function() {}
};

function RoadboundVehicle() {}
RoadboundVehicle.prototype = {
    reroute: function() {}
};

function GasolinePoweredVehicle() {}
GasolinePoweredVehicle.prototype = {
    refillGasoline: function() {}
};

function ElectricVehicle() {}
ElectricVehicle.prototype = {
    powerlineWattage: function() {}
};
```

> Object composition lets us achieve a kind of multiple-inheritance by mixing & matching object **capabilities** instead of being bound by classes of object with pre-set properties and capabilities. A very  detailed explanation to Object composition and its advantages can be found [here](https://medium.com/code-monkey/object-composition-in-javascript-2f9b9077b5e6).

---
### Using `Object.assign()`

```javascript
function ComposedBus() {}
ComposedBus.prototype = Object.assign(
    {},
    RoadboundVehicle.prototype,
    GasolinePoweredVehicle.prototypeComposedBus
);

console.log(ComposedBus.Prototype)
```

`Object.assign()` lets us copy over properties of objects to a target object.

> Essentially we "compose" our prototype, our Bus Archetype from various _capabilities_, like it being bound to travel on roads and using gasoline to power it. We have made composable objects and avoided having to copy these functionalities over from other classes, or having to resort to contrived and/or unintuitive taxonomies and inheritance chains.

---
### More composition examples

```javascript
function ComposedTram() {}
ComposedTram.prototype = Object.assign(
    {},
    TrackboundVehicle.prototype,
    ElectricVehicle.prototype
);

function ComposedTrolley() {}
ComposedBus.prototype = Object.assign(
    {},
    RoadboundVehicle.prototype,
    ElectricVehicle.prototype
);
```

---
## Deep composition with `Object.create`

```javascript
function ElectricRoadVehicle() {}
ElectricRoadVehicle.prototype = Object.assign(
    {}, RoadboundVehicle.prototype, ElectricVehicle.prototype
);

function ComposedNewTrolley() {}
ComposedNewTrolley.prototype = Object.assign(
    Object.create( ElectricRoadVehicle ),
    PowerlineVehicle.prototype
);
```

Creating an electric road vehicle prototype & using `Object.create()` to link it to our Trolley's prototype chain.

> In this day & age it's not uncommon to have Hybrid & Electric buses in some cities. We will collect the properties of road vehicles and electric vehicles into a common prototype, `ElectricRoadVehicle`. Now we can create objects that just extend this common archetype with specific properties, like what `PowerlineVehicle` might have (e.g. connected? battery operation? battery charge etc...)

---
## On `Object.create()`

```javascript
let myProto = { useful: "prototype" }

// Using new and constructor functions
function ConstructorFunction() {}
ConstructorFunction.prototype = myProto;
let myObject = new ConstructorFunction();

// Using Object.create()
let myObjectCreate = Object.create(myProto);

// The result is the same
console.log( Object.getPrototypeOf(myObject) );
console.log( Object.getPrototypeOf(myObjectCreate) );
```

`Object.create` lets us create new objects with _specific_ runtime prototypes.

> In essence object.create is a shorter, more flexible way to create objects than using `new`. That said, `new` does a whole lot more (including executing a constructor function), so if that is needed it might still be useful to use `new` together with constructor functions in specific cases.


-------------
## ES6 Classes

---
### Classic syntax

```javascript
var Proto = Object.create(null);

Proto.sayHi = function() {
  console.log("Hello" + (this.name ? " my name is"+this.name : "") + "!");
};

var anonymous = Object.create(Proto);
anonymous.sayHi();

var xy = Object.create(Proto);
xy.name = "X. Y.";
xy.sayHi();
```

---
### Classy new syntax

```javascript
class ClassicProto {
  sayHi() {
    console.log("Hello" + (this.name ? " my name is"+this.name : "") + "!");
    // notice this method body is exactly the same as for the above
  }
};
https://notes.skylark.ee/#missing_documents.md
var classyAnonymous = new ClassicProto();
var classyXY = new ClassicProto();

classyXY.name = "Classy X. Y.";

classyAnonymous.sayHi();
classyXY.sayHi();
```

---
### Constructor function vs class constructor
```javascript
// Pre-ES6 syntax
function ConstructorFn(name) {
  this.name = name;
}
ConstructorFn.prototype = { sayHi: function() { console.log("Hello, "+this.name); } }

// ES6+ syntax
class ClassWithConstructor {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hello, "+this.name);
  }
}
```

---
### Classes are a _"syntax sugar"_
```javascript
// They look & behave the same
let bob = new ConstructorFn("Bob");
bob.sayHi();

let alice = new ClassWithConstructor("Alice");
alice.sayHi();
```

Syntax (or syntactic) sugar means "not adding new fundamental syntax or functionality, but exposing existing functionality in a different, more ergonomic manner".

---
### ES6 classes in older browsers
- Older browsers don't understand the new syntax
- Transpilers like Babel can translate the new syntax to the old
- [Try it online at Babel.io](http://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYGwhgzhAEDC5QOoEsAuALWB7AdhVATgK7CpYHQDeAUNNMLvsaeQBQ5gC2ApgJRW060DMggA6Dj2gBeaJO4BuQQF9qgiGACeACWSt-NIfUZYQ3MSCwBzVgCJt3EJYA00WwGoR4-byV1VqmpAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015-loose&prettier=true&targets=&version=6.26.0&envVersion=)

---
### Output generated by Babel:

![](https://flaki.github.io/talks/dpc/img/babel-es6classes.png)

---
### Advantages of class syntax

* Interoperable (across objects, authors, libraries)
* Standardizes shape of objects/interfaces
* Easier to understand for OO developers
