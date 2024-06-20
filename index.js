const Commands = require('./commands');
const Validator = require('./validator');
const Helper = require('./helper');

console.log("Welcome to Book Library CLI")

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Helper");
    process.exit(1);
}

switch(args[0]) {
    case 'list':
        console.log("List all books");
        if (args[1]) {
            Commands.listBook(args[1]);
        } else {
            Commands.listBook();
        }
        break;
    case 'add':
        console.log("Add a new book");

        if (args.length === 5) {
            
            args[1] = Number(args[1]) // Convert bookId to Number

            if (Validator.isNumber(args[1]) && 
                Validator.isString(args[2]) &&
                Validator.validateAutherName(args[2]) &&
                Validator.isString(args[3]) && 
                Validator.validateBookName(args[3]) &&
                Validator.isString(args[4])) {

                Commands.addBook(args[1], args[2], args[3], args[4])
            } else {
               
                console.log("values are not valid");
            }

        } else {
            console.log("add <bookID>  <author_name> <book_name> <category_name>");
        }
        
        break;
    case 'update':
        args[1] = Number(args[1])

        if (args.length === 4) {
            if (Validator.isNumber(args[1]) &&
            Validator.isString(args[2]) &&
            Validator.validateAutherNameArgs(args[2]) &&
            Validator.isString(args[3]) &&
            Validator.validateBookNameArgs(args[3])) {

                console.log('update a book');
                const newAutherName = Helper.parseAutherNameArgs(args[2]);
                const newBookName = Helper.parseBookNameArgs(args[3])
                Commands.updateBook(args[1], {autherName: newAutherName, bookName: newBookName});
            }
        
        } else {
            console.log("update <bookId> <auther_name> <book_name>")
        }
        
        break;
    case 'delete':
        console.log('delete a book');
        break;
    default:
        console.log('Helper')
}

