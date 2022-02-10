// 비동기 예시 => 출력 1,2,4,3
console.log("1");
console.log("2");
setTimeout(function () {
    console.log("3");
}, 3000);
// ms 단위로 작동, 1000ms = 1sec
console.log("4");



//콜백함수를 이용해서 동기적으로 코딩가능

function test() {
    setTimeout(function () {
        console.log("5");
    }, 3000);
}

function print6() {
    console.log("6");
}

// 6 5   : 아직 여전함
test();
print6();

function test(callback) {
    setTimeout(function () {
        console.log("7");
        callback();
    }, 3000);
}

function print8() {
    console.log("8");
}

// 콜백을 통해서 동기 : 7 8
test(print8);