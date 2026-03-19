
// thêm full name
function Student(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
Student.prototype.getFullName = function(){
    return (`${this.firstName} ${this.lastName}`)
}
// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'
//trả năm kế tiếp
function getNextYear(){
var date = new Date();
return getNextYear = date.getFullYear() + 1;
}
console.log(getNextYear)
//trả về phần tử ngẫu nhiên 
function getRandomItem(arr) {
    var random = Math.floor(Math.random()*arr.length);
    return arr[random];
}
console.log(getRandomItem([5,6,7]))
// if
function run(a) {
    if (a % 15 === 0) {
        return 3;
    }
    if (a % 5 === 0) {
        return 2;
    }
    if (a % 3 === 0) {
        return 1;
    }
}
// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3
//switch-case
function run(fruits) {
    var result;
  switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
         case "Apple":
            result = "This is an Apple";
            break;
    }
    return result;
}
// toán tử 3 ngôi
// Làm bài
function getCanVoteMessage(age){
    return age>17 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu'
}
// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'