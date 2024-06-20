function isNumber(value) {
    return !isNaN(value) && typeof value === "number";
}

function isString(value) {
    return !(value === null) && typeof value === "string";
}


function validateAutherName (autherName) {
    const reg = RegExp('^[a-zA-Z.*');
    return reg.test(autherName);
}

function validateBookName(bookName) {
    const reg = RegExp('^[a-zA-Z');
    return reg.test(bookName);
}


function validateAutherNameArgs(autherName) {
    const reg = new RegExp('autherName=[a-zA-Z].*');
    return reg.test(autherName);

}

function validateBookNameArgs(bookName) {
    const reg = RegExp('bookName=[a-zA-Z].*');
    return reg.test(bookName);
}

module.exports = {
    isNumber,
    isString,
    validateAutherName,
    validateBookName,
    validateAutherNameArgs,
    validateBookNameArgs
}