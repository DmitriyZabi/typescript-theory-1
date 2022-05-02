var isFetching = true;
var isLoading = false;
var int = 32;
var float = 32.2;
var num = 3e10;
var message = 'Hello';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'TS'];
// Tuple
var contact = ['Dima', 1234567];
// Any
var variable = 42;
// ..
variable = 'New string';
variable = [];
// ====
function sayMyName(name) {
    console.log(name);
}
sayMyName('Dima');
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
var login = 'admin';
var id1 = 1;
var id2 = '1';
