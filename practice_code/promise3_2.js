//callback을 promise로 바꾸는 예제


// loginUser는 프로미스를 리턴 해줌
function loginUser(id, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userDB = [
                {
                    id: "ralo",
                    pw: '2400',
                },
                {
                    id: 'paka',
                    pw: '9999',
                },
                {
                    id: 'dopa',
                    pw: '7777',
                },
            ];
            for (let i = 0; i < userDB.length; i++) {
                if ((userDB[i].id === id) && (userDB[i].pw === password)) {
                    resolve(id);
                    return;
                }
                reject('아이디와 패스워드가 맞지아노!!');
            }

        }, 2000); //db에서 받아오는 시간이 2초가 걸린다고 가정
    })
}

function getRoles(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const roleDB = [
                { id: "paka", role: "top" },
                { id: "dopa", role: "mid" },
            ];

            for (let i = 0; i < roleDB.length; i++) {
                if (roleDB[i].id === id) {
                    resolve(roleDB[i]);
                    return;
                }
            }
            reject(`${id}의 role이 db에 존재하지 않습니다!`);
        }, 1000);
    })

}
let id = "paka"; //입력받을 id
let password = "9999"; //입력받을 pw

// async await가 promise의 syntatic sugar 이다
// await는 무조건 resolve 된 값만 받음
// reject가 되면 error로 넘어감
async function program() {
    try {
        let user = await loginUser(id, password); // await를 붙임으로 프로미스의 이행된 값을 바로 변수에 넣음
        let role = await getRoles(user); // id 파라미터로 이행된 값인 user를 넣어줌
        console.log(user);
        console.log(role);        
    } 
    catch(error) {
        console.log(error);
    }

}
program()

// << 이전 프로미스 코드 >>
// loginUser(id, password)
//     // .then((user) => getRoles(user))
//     // .then((role) => console.log(role));
//     .then(getRoles)
//     .then(console.log)
//     .catch(console.log)


// 사용자에게 입력받은 id,pw랑 db에 있는 id,pw를 비교해야됨