//* 자바스크립트 문법 복습

var fruit = "mango";
console.log(fruit);

// JS 데이터 타입 
// String, Number, Function, Array, Object, Boolen, undefined, null

//* string
const str1 = "Hi! I\'m fine thank you.";
console.log(str1);

//* function
//1) 변수 형태로 선언
var func1 = function () {
    console.log('함수1');
}//함수 생성
func1() //함수 호출

//2) 함수 자체에 이름을 붙여줌
function func2() {
    console.log("함수2");
}// 생성
func2() // 호출

////////////////////////////////
var area = function (width, height) {
    return width * height;
}
var result = area(30, 15);
console.log(result);
console.log(area(14, 14));

//* array 배열
var shoes = ['나이스', '아디도스', '눕밸런스'];
console.log(shoes);
console.log(shoes.length);
console.log(shoes[1]);
shoes[2] = '뉴블랜서';
console.log(shoes);

//* Object
var developer = {
    name: 'mori',
    age: '19',
    skills: ['python', 'javascript', 'HTML', 'CSS'],
    sum: function (num1, num2) { return num1 + num2; }
}
console.log(developer.name);    // 객체명.프로퍼티명
console.log(developer['name']); //객체명["프로퍼티명"]

developer.name = "hwan";
console.log(developer['name']);

//* undefined, null
// undefined: 변수 안에 데이터를 입력하지 않은 상태 ( 데이터가 없는 것 , 정의된적이 없는것)
// null : 개발자가 임의로 변수 안에 빈 데이터를 삽입한 상태 ( 빈 데이터를 지정한 것)
var unde;
var empty = null;

//* Boolean
var t = true;
var f = false;


////////////////////////////////
//* 문자열 프로퍼티와 메서드
var str2 = "봄 여름 가을 겨울"
console.log(str2.length);
console.log(str2.charAt(3));
console.log(str2.split(" "));

//* 배열 프로퍼티와 메서드
var job = ["의사", "판사", "교사"];
console.log(job);

console.log(job.length);

job.push("목사");       // 배열 뒤에 데이터 삽입
console.log(job);

job.unshift("검사")     // 배열 앞에 데이터 삽입
console.log(job);

job.pop();              // 배열 뒤의 데이터 제거
console.log(job);

job.shift();            // 배열 앞의 데이터 제거
console.log(job);


//* Math의 수학 연산 메서드
console.log(Math.abs(-33));
console.log(Math.ceil(33.3));   // 올림
console.log(Math.floor(99.99)); // 내림
console.log(Math.random());     // 0 ~ 1사이

//* 문자를 숫자로 변환하는 메서드
console.log(parseInt("24.44"));
console.log(parseFloat("25.55"));


//* 주사위 게임
var dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//* 소수 출력하기
function isPrime(n) {
    var divisor = 2;
    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        } else {
            divisor++;
        }
    } return true;
}
console.log(isPrime(6));
console.log(isPrime(13));

//* 문자열 거꾸로 출력하기
function reverse(str) {
    var reverStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reverStr += str.charAt(i);
    }
    return reverStr;
}
console.log(reverse('PinpineApple~'));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    // 한 줄씩 입력받은 후 실행할 코드
    // 입력된 값은 line에 저장된다.
    rl.close(); // close가 없으면 입력을 무한히 받는다.
});
rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
})