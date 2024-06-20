const Algorithms = require('./algorithms');


function idIsExists(listOfIDs, id) {
    
    const sortedIDs = Algorithms.mergeSort(listOfIDs, 0, listOfIDs.length -1)
    return Algorithms.binarySearch(sortedIDs, id)
}

function parseAutherNameArgs(autherName) {
    return autherName.split("=")[1]
}

function parseBookNameArgs(bookName) {
    return bookName.split("=")[1]
}

module.exports = {
    idIsExists,
    parseAutherNameArgs,
    parseBookNameArgs

}