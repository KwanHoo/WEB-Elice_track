// 별도의 파일로 라우터 정의
// 메인페이지 서비스를 별도의 파일에 저장한 경우
// 보안적인 의미로 분리

const express = require('express')
const path = require('path')
const router = express.Router()


router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../index.html'))
    res.render('index') // pug
})


// 우리가 정의한 라우터 객체 내보내 주는 것
module.exports = router