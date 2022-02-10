async function f() {
    let promise =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("완료");
        }, 3000);
    })
    let result = await promise;
    console.log(result);
}

f();

function test() {
    return new Promise((resolve, reject) => {
        resolve(3);
    });
}

console.log(test);

// async 는 promise를 리턴함
async function test2() {
    return 3;  // = resolve(3)
}
console.log(test2());
