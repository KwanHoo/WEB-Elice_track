console.log(0 =="0"); //true
// String "0" -> Number 0
// 0 == 0
// true

console.log(0 == []); // true
//[].toString() -> ''  (빈배열)
// 0 == ''   (아무것도 없는 문자를 숫자로 바꾸면 0)
// 0 == 0
// true

console.log("o" == []) //false
// [].toString() -> ''
// '0' == ''   문자 비교
// false
console.log(array.toString()); // ''
// 어레이 에는 기본적으로 toString()적용
console.log(0 == [0]);
// [0].toString() ->'0'
// 0 =='0'
// 0 == 0
// true