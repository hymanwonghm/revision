// database
let products = [
    {id: 1, uname: "Bonaqua", price: 10}
]

const getProductsController = (req, res) => {
    res.json(products)
}

const createProductController = (req, res) => {
    // Part 1
    let newProduct = req.body

    // Part 2
    products.push(newProduct)

    // Part 3
    res.json(newProduct)
}

const getProductController = (req, res) => {
    // Part 1:
    let userInput = Number(req.params.id)

    // Part 2:
    let result = products.find((element) => element.id === userInput)

    // Part 3:
    res.json(result)
}

const updateProductController = (req, res) => {
    // Part 1:
    let updateProductId = Number(req.params.id)
    let updatedProduct = req.body

    // Part 2:
    // Find
    const matchedElement = (element) => element.id === updateProductId;
    let start = products.findIndex(matchedElement);

    // replace
    products.splice(start, 1, updatedProduct)

    // Part 3:
    res.json(updatedProduct)
}

const deleteProductController = (req, res) => {
    // Part 1:
    let deleteProductId = Number(req.params.id)

    // Part 2:
    // Find
    const matchedElement = (element) => element.id === deleteProductId;
    let start = products.findIndex(matchedElement);

    // replace
    products.splice(start, 1)

    // Part 3:
    res.send("Deleted")
}

module.exports = { getProductsController, createProductController, getProductController, updateProductController, deleteProductController }