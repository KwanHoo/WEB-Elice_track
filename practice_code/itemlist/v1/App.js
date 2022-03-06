// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div class="serach-filter">
        <p class="hit-count"><strong>'워치4 골드 케이스'</strong>에 대한 검색결과</p>
      </div> 
      <div>
        <header id="intro">
          <nav>
            <ul>
              <li id="rank"><a href="#">쿠팡 랭킹순</a></li>
              <li><a href="#">낮은가격순</a></li>
              <li><a href="#">높은가격순</a></li>
              <li><a href="#">판매량순</a></li>
              <li><a href="#">최신순</a></li>
            </ul>
          </nav>
        </header>
      </div>
      <div class="clear"></div>
      <div></div>
      <ul id="product-list">
        <li class="serch-product">
          <a href="#">
            <dl>
              <dt class="image">
                <img src='case1.png' alt='not'></img>
              </dt>
              <dd class="descriptions">
                <div>상품설명</div>
                <div>가격</div>
                <div>배송예정일</div>
                <div>평점</div>
                <div>최대적립금</div>
              </dd>
            </dl>
          </a>
        </li>
        <li class="serch-product">
          <a href="#">
            <dl>
              <dt class="image">
                <img src='case2.png' alt='ggg'></img>
              </dt>
              <dd class="descriptions">
                <div>상품설명</div>
                <div>가격</div>
                <div>배송예정일</div>
                <div>평점</div>
                <div>최대적립금</div>
              </dd>
            </dl>
          </a>
        </li>
        <li class="serch-product">
          <a href="#">
            <dl>
              <dt class="image">
                <img src='case3.png' alt='ggg'></img>
              </dt>
              <dd class="descriptions">
                <div>상품설명</div>
                <div>가격</div>
                <div>배송예정일</div>
                <div>평점</div>
                <div>최대적립금</div>
              </dd>
            </dl>
          </a>
        </li>
        <li class="serch-product">
          <a href="#">
            <dl>
              <dt class="image">
                <img src='case4.png' alt='ggg'></img>
              </dt>
              <dd class="descriptions">
                <div>상품설명</div>
                <div>가격</div>
                <div>배송예정일</div>
                <div>평점</div>
                <div>최대적립금</div>
              </dd>
            </dl>
          </a>
        </li>
        <div class="clear"></div>
        <div class="line"></div>
        <li class="serch-product">
          <a href="#">
            <dl>
              <dt class="image">
                <img src='case5.png' alt='ggg'></img>
              </dt>
              <dd class="descriptions">
                <div>문서 제목</div>
                <div>최저가 정보</div>
                <div>최고가 정보</div>
                <div>쇼핑몰 상호</div>
                <div>해당 상품 ID</div>
              </dd>
            </dl>
          </a>
        </li>
        <li class="serch-product">
          <a href="#">
            <dl>
              <dt class="image">
                <img src='case6.png' alt='ggg'></img>
              </dt>
              <dd class="descriptions">
                <div>문서 제목</div>
                <div>최저가 정보</div>
                <div>최고가 정보</div>
                <div>쇼핑몰 상호</div>
                <div>해당 상품 ID</div>
              </dd>
            </dl>
          </a>
        </li>
        <li class="serch-product">
          <a href="#">
            <dl>
              <dt class="image">
                <img src='case7.png' alt='ggg'></img>
              </dt>
              <dd class="descriptions">
                <div>문서 제목</div>
                <div>최저가 정보</div>
                <div>최고가 정보</div>
                <div>쇼핑몰 상호</div>
                <div>해당 상품 ID</div>
              </dd>
            </dl>
          </a>
        </li>
        <li class="serch-product">
          <a href="#">
            <dl>
              <dt class="image">
                <img src='case8.png' alt='ggg'></img>
              </dt>
              <dd class="descriptions">
                <div>문서 제목</div>
                <div>최저가 정보</div>
                <div>최고가 정보</div>
                <div>쇼핑몰 상호</div>
                <div>해당 상품 ID</div>
              </dd>
            </dl>
          </a>
        </li>
        <div class="clear"></div>
        <div class="line"></div>
      </ul>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
      
    //   </header>
    // </div>
  );
}

export default App;
