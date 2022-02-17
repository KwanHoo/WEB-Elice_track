const express = require("express");
const path = require("path");
const router = express.Router();

const test = (req, res) => {
    console.log("배곱프다...")
}

router.get("/", (req, res) => {
    res.send("안녕!!")
})

// 주소뒤에 숫자 추가( 홀짝)
// Q. 어떤 수를 받아서 우리가 이 수가 짝수인지, 홀수인지
// 알고 싶다.

// params : 주소에 추가적으로 들어오는 매개변수

router.get("/is_odd/:id", (req, res) => {
    console.log(req.params.id);
    res.send(req.params.id);
});

router.get("/count-form", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/get.html"))
})

router.get("/count", (req, res) => {
    const number = parseInt(req.query.number)
    if (number % 2 === 0) {
        res.send("짝수입니다.")
    } else {
        res.send("홀수입니다.")
    }
    
})

// post
router.get("/post-form", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/post.html"))
})
router.post("/count", (req, res) => {
    const number = req.body.number
})

module.exports = router;