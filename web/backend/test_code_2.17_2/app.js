const express = require("express");
const bodyParser = require("body-parser")

const index = require("./routes/index");
const app = express();

// bodypareser 기본설정
app.use(bodyParser.urlencoded({ extended: false }))
// 라우터를 연결
app.use("/routes/", index);

//////////////////
let fun1 = (req, res) => {
    console.log("배곱프다...")
}

app.get("/", (req, res, next) => {
    res.send("Hellow World!!")
    next()
})

app.use(fun1)

////
// 서버 켜야함.
app.listen(3000, () => {
    console.log("서버가 켜졌어요!");
});





// 모던 자바스크립트 deep dive
// 모던 javascript 토튜리얼