const fs = require('fs');
const Helper = require('./helper');

libraryPath = './courses.json';

/**
 * Reads all shelves from the library file.
 *
 * This function logs a message to the console indicating that it is reading all
 * shelves and then checks if the library file exists. If the file does not exist,
 * the function exits the process with a status code of 1.
 *
 * @return {undefined} This function does not return a value.
 */
function readAllShelfs(categoryName) {
    // Log a message to the console indicating that we are reading all shelves
    console.log("Read all shelfs");

    // Check if the library file exists
    if (!fs.existsSync(libraryPath)) {
        // If the file does not exist, exit the process with a status code of 1
        console.log("Library file does not exist");
        process.exit(1);
    }

    // Read the contents of the library file
    const fileContent = fs.readFile(libraryPath, 'utf8', (err, fileContent) => {

        if (err) {
            console.log("Error reading library file", err);
            process.exit(0);
        }

        const contentJson = JSON.parse(fileContent);

        if (categoryName === null) {
            
            for (const category in contentJson.Categories) {
                console.log("Category name: ", category);
                console.table(contentJson['Categories'][category])
            }
            

        } else {

            console.table(contentJson['Categories'][categoryName] ?? "Category not found");
        }
        

    });
}



/**
 * Adds a new book to a shelf in the library file.
 *
 * @param {number} newBookId - The ID of the new book.
 * @param {string} newCategoryName - The name of the shelf to add the book to.
 * @param {string} newBookName - The name of the new book.
 */
function addBookToShelf(newBookId, newAuthorName , newBookName, newCategoryName) {

    // Check if the library file exists
    if (!fs.existsSync(libraryPath)) {
        console.log("Library file does not exist");
        process.exit(1);
    }

    // Read the contents of the library file
    fs.readFile(libraryPath, 'utf8', (err, fileContent) => {
        
        if (err) {
            console.log("Error reading library file", err);
            process.exit(0);
        }

        // Parse the contents of the file as JSON
        const contentJson = JSON.parse(fileContent);

        // Get list of ID inside a category
        const categoriesNames = Object.keys(contentJson.Categories);
        

        
        // Add a new book to the shelf

        // Check if the category name is exist
        if (categoriesNames.includes(newCategoryName)) {
            // Check if book ID is exist
            if (newBookId in contentJson.Categories[newCategoryName]) {
                console.log("Error BookId is already exists");
                process.exit(0);
            } else {
                contentJson.Categories[newCategoryName][newBookId]  = {'authorName': newAuthorName, 'bookName': newBookName}
                console.log(contentJson.Categories[newCategoryName]);
            }
            
        } else {
            console.log("Category not found ", newCategoryName);
        }

        // Save changes to the library file
        fs.writeFile(libraryPath, JSON.stringify(contentJson), 'utf8', (err) => {
            if (err) {
                console.log("Error writing to library file", err)
                process.exit(1);
            }

            console.log("Librarys saved.");
        });

    });

}

function updateBookShelf(bookId, newDetails) {
    
    fs.readFile(libraryPath, 'utf8', (err, contentFile) => {

        if (err) {
            console.log("Error reading the library file", err);
        }

        const contentJson = JSON.parse(contentFile);

        for ( key in contentJson['Categories']) {
            if ( bookId in contentJson['Categories'][key]) {
                console.log("The book found in category", key);
                if (newDetails.autherName) {
                    contentJson['Categories'][key][bookId]['autherName'] = newDetails.autherName;
                }
               
                if (newDetails.bookName) {
                    contentJson['Categories'][key][bookId]['bookName'] = newDetails.bookName;
                }
                
                break;
            }
        }

        // Save Json to the library file

        fs.writeFile(libraryPath, JSON.stringify(contentJson), 'utf8', (err) => {
            if (err) {
                console.log("Error writing to library file", err);
                process.exit(1);
            }

            console.log("The book updated");
        });

    });
}

module.exports = {
    readAllShelfs,
    addBookToShelf,
    updateBookShelf,
}