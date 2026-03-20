//in số bất kì từ min-max, có độ dài mảng = length
function getRandNumbers (min,max,length){
    let result =[];
    for(let i=0;i<length;i++){
        result.push(Math.random()*(max-min)+min);
    }
    return result;
}
console.log(getRandNumbers(1,6,3))
//tổng các số trong mảng
function getTotal(arr) {
    let result=0;
    for(let i=0;i<arr.length;i++){
        result=result+arr[i];
    }
    return result;    
}
//tổng tiền
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(arr){
    let result = 0;
    for(let i=0;i<arr.length;i++){
        result += arr[i].price;
    }
    return result;
}
// Expected results:
getTotal(orders) // Output: 8700000
//for-in
function run(object) {
    let result =[];
    for(var key in object){
        result.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return result;
}
// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
//duyệt có like>5
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport (arr){
    return arr.filter(function(sport){
     return sport.like>5;
});
};
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]






