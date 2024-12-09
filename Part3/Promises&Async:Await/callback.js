function greet(callback){

    console.log("Hello")
    callback()
}

greet(() => console.log("Done"))