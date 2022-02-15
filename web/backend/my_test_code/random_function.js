// 우리나라 문화는 세미클론을 붙이라는 관습이 있엇는데
// 세미클로 안붙여도 상관없음
// 선택사항이고 개인 코딩 스타일임


// 한국어 예쁜 이름 짓기 앱

function randName() {
    const kname = ['랄로', '파카', '도파', '몬마', '환꼬']
    let random = Math.floor(Math.random() * 5)
    return kname[random]
}

kname2 = ['랄로', '파카', '도파', '몬마', '환꼬']
let index = parseInt(Math.random() * 5)
console.log('인덱스번호 ' + index)
console.log(kname2[index])

const result = randName()
console.log(result)