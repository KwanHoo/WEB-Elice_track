import './App.css';
import { useState } from 'react';

function Nav(props) {
  function clickHandler(event) {
    event.preventDefault();
    props.onChangeMode(event.target.id);
  }
  console.log('props', props);
  let lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id} id={t.id} onClick={clickHandler}>{t.title}</a></li>);
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Header(props) {
  function clickHandler(event) {
    event.preventDefault();
    props.onChangeMode();
  }
  return <header>
    <h1><a href="/" onClick={clickHandler}>{props.title}</a></h1>
  </header>
}
function App() {
  let topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' }
  ];
  // let mode = 'WELCOME';
  const [mode, setMode] = useState('READ');
  const [id, setId] = useState(null);
  console.log('id',id)
  function onChangeModeHeader() {
    console.log('본문 리액트 커몬커몬 !!')
    setMode('WELCOME');
  }
  function onChangeModeNav(selectedId) {
    console.log('니가 선택한 id의 topic으로 악으로 깡으로')
    setMode('READ');
    setId(selectedId);
  }
  let articleTag = '';
  if (mode === 'WELCOME') {
    articleTag = <Article title="Welcome" body="Hello, React"></Article>
  } else if (mode === 'READ') {
    articleTag = <Article title="READ" body="Hello, READ"></Article>
  }
  return <>
    <Header title="React" onChangeMode={onChangeModeHeader}></Header>
    <Nav topics={topics} onChangeMode={onChangeModeNav}></Nav>
    {articleTag}
  </>
}

export default App;