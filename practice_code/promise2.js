//promise

// promise는 3가지 상태가 있음
// 1) pending  : 준비상태
// 2) fulfilled : 이행상태, 잘 실행이 되었다
// 3) rejected : 거부 상태


const myPromise = new Promise((resolve, reject) => {
    // resolve('프로미스가 이행됨'); // full filled
    // reject('프로미스가 거부됨');
});

// 프로미스가 이행이 되어야 then으로 들어옴
// 프로미스가 거부되면 catch로 감
myPromise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});


//처리하는쪽
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        const DB = [1, 2, 3, 4, 5];
        if (DB.length != 0) {
            resolve(DB); //then의 db로 감
        } else {
            reject('db가 존재하지 않음');
        }
    }, 2000);

});

//요청하는쪽
myPromise2
    .then((db) => {
        console.log(db);
})
    .catch((errorMsg) => {
        console.log(errorMsg);
})

// promise는 처리하는쪽과 요청하는쪽이 나눠져 있음

