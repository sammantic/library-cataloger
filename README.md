# library-cataloger
Library cataloger is a command line tool that helps library administration manage the index of books.

**current feature:**
- there are three pre-defined categories (Programming, Comics, Cooking).
- List all books in all categories or books in a specific category.
- Add a new book.
- Update a specific book.

## Usage
- List all books
```sh
$ node index.js list
```
- List all books in a specific category
```sh
$ node index.js list Programming
```
- Add a new book
```sh
$ node index.js add 11 John Android-C++ Programming
```
- Update a specific book
```sh
$ node index.js update 11 autherName=Nancy BookName=Android-C++-2ed
```

- Update a specific book
```sh
$ node index.js delete 11 Programming
```
