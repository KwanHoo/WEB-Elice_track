// 웹서버 만들기
const express = require('express') 
const path = require('path') //  웹의 경로 해결해주는 모듈
const app = express()

const indexRoute = require('./routes/index.js')

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1.:27017/nodejs", {
    useNewUrlParser : true
}).then(() => {
    console.log('connect to MongoDB...')
}).catch(() => {
    console.log(err.message)
})  // 몽구스 결과값으로 프로미스 나옴
// 스키마 : 데이터의 형식을 지정해주는거
// 데이터 베이스 사용준비
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    saveDate: {
        type: Date,
        default: Date.now,
    },
})
// User 라는 객체 생성
// 데이터베이스 연결
const User = mongoose.model("User", UserSchema)
const me = new User({
    name: "mo ri",
    age: "28"
})
me.save()
    .then(() => {
    console.log(me)
    }).catch((err) => {
    console.log("Error, ", err)
})


const pickMyFood = () => {
    food = ['돈까스', '탕수육', '햄버거', '초밥', '티라미슈', '우동', '녹두빈대떡', '피자', '치킨', '리조또', '짬뽕', '짜장면', '돼지국밥', '소국밥']
    let ind = Math.floor(Math.random() * food.length)
    return food[ind]
}

const mbti = [
    'INTJ - 용의주도한 전략가(Architect)',
    'INTP - 논리적인 사색가(Logician)',
    'ENTJ - 대담한 통솔자(Commander)',
    'ENTP - 뜨거운 논쟁을 즐기는 변론가(Debater)',
    'INFJ - 선의의 옹호자(Advocate)',
    'INFP - 열정적인 중재자(Mediator)',
    'ENFJ - 정의로운 사회운동가(Protagonist)',
    'ENFP - 재기발랄한 활동가(Campaigner)',
    'ISTJ - 청렴결백한 논리주의자(Logistician)',
    'ISFJ - 용감한 수호자(Defender)',
    'ESTJ - 엄격한 관리자(Executive)',
    'ESFJ - 사교적인 외교관(Consul)',
    'ISTP - 만능 재주꾼(Virtuoso)',
    'ISFP - 호기심 많은 예술가(Adventurer)',
    'ESTP - 모험을 즐기는 사업가(Entrepreneur)',
    'ESFP - 자유로운 영혼의 연예인(Entertainer)',
]

const direction = ['동', '서', '남', '북']
const reward = ['우정', '의리', '사랑', '재물', '행운', '지혜', '즐거움']

const renInd = function (arr) {
    return Math.floor(Math.random() * arr.length)
}


// 어디에 저장할거냐 : views에 관습적으로 저장
app.set('views', path.join(__dirname, 'views'))
// pug templet 세팅
app.set('view engine', 'pug')

app.use('/', indexRoute)

app.get('/food', (req, res) => {
    text = pickMyFood()
    res.send(`오늘 당신에게 추천드리는 메뉴는 바로 <b>${text}</b> 입니다.`)
})

app.get('/lucky', (req, res) => {
    res.send(`<p></p>오늘 당신이 <b><font color = 'violet'> ${direction[renInd(direction)]}쪽</font></b>으로 가신다면, <p></p>
      오늘 만날 행운인은 바로<font color = 'red'><b>${mbti[renInd(mbti)]}</b></font> 입니다.<p></p>
      그는 당신에게 <b><font color = 'blue'>${reward[renInd(reward)]}</font><b>의 천사일 것입니다. <p></p>
      <u><font color = 'skyblue'>그는 당신에게 소중한 인연입니다.</font></u>`)
})



// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'))
// })
app.get('/webtoon', (req, res) => {
    res.send("<h1>공사중!! 현재 중비중입니다. under construction..</h1>")
})

app.get('/profile', (req, res) => {
    res.send("<h2> 닉네임 : Moriah, 취미 : 음악감상</h2>")
})


app.use((arr, req, res, next) => {
    console.log(err)
    res.status(500).send(err.message)
})

app.listen(3000, () => {
    console.log('3000번 포트에서 웹서버를 실행중입니다...')
})