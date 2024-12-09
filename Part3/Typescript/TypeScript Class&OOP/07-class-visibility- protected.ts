// Base class
class Animal {
  // This method is protected
  protected move() {
    console.log('Moving')
  }

  run() {
    this.move()
    console.log('Runing')
  }
}

const a = new Animal()
// a.move()

// Subclass
class Dog extends Animal {
  bark() {
    this.move()
    console.log('Wow Wow!')
  }
}

const d = new Dog()
// d
