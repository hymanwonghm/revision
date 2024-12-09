// Base class
class Animal {
  public move() {
    console.log('moving')
  }
}

const a = new Animal()
a.move()

// Subclass
class Dog extends Animal {
  bark() {
    console.log('Wow Wow!')
  }
}

const d = new Dog()
d.move()
