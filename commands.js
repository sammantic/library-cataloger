const ShelfHandler = require('./shelf-handler');

function listBook(categoryName = null) {
    ShelfHandler.readAllShelfs(categoryName);

    return "All books";
}

function addBook(bookID, authorName, bookName, bookCategory) {
    ShelfHandler.addBookToShelf(bookID, authorName, bookName, bookCategory);

    return "Add a book";
}

function updateBook(bookID, newDetails) {
    console.log(`Book ID: ${bookID} Book name: ${newDetails.autherName} Book category: ${newDetails.bookName}`);
    ShelfHandler.updateBookShelf(bookID, newDetails)
}

function deleteBook(bookID, categoryName) {
    ShelfHandler.deleteBook(bookID, categoryName);
    return "delete a book";
}


module.exports = {
    listBook,
    addBook,
    updateBook,
    deleteBook
    
};