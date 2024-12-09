// Base class
class Animal {
  private __run__() {
    console.log('Animal 内部辅助函数')
  }

  // This method is protected
  protected move() {
    this.__run__()
    console.log('Moving')
  }

  // This method is public
  run() {
    this.__run__()
    this.move()
    console.log('Runing')
  }
}

const a = new Animal()
// a.

// Subclass
class Dog extends Animal {
  bark() {
    // this.
    console.log('Wow Wow!')
  }
}

const d = new Dog()
// d.
