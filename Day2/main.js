//Thực hành vs chuỗi
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';
function strToArray(str) {
    return str.split(', ');   
}
// Expected results
console.log(strToArray(coursesStr)) 
// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']

//ktra độ dài
function getContentLength(content) {
    return content.length;
}
// Mở tab Console để xem kết quả trực quan
console.log(getContentLength('JavaScript'));
console.log(getContentLength('Hello World'));

//chuyển chữ hoa
function getUpperCaseName(name){
    return name.toUpperCase();
}
// Expected results:
console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"

//kiểm tra kiểu number
function isNumber(value){
    return typeof value=='number';
}
// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // 

//kiểm tra kiểu number 2
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false
console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false

//
function joinWithCharacter(array, charactor) {
    return array.join(charactor)
}
// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];
var result = joinWithCharacter(cars, ' - ');
console.log(result); // Expected: "Honda - Mazda - Mercedes"

//
// Viết hàm tại đây
function getLastElement(array){
    return array[array.length-1];
}
// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);
console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']