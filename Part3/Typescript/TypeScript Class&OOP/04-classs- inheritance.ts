class Animal {
  move() {
    console.log('Moving')
  }
}

class Dog extends Animal {
  name = 'Rottweiler'

  bark() {
    console.log('Wow Wow!')
  }
}

const d = new Dog()
d.move()
d.bark()
console.log(d.name)
