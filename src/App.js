import logo from './logo.svg';//이미지도 모듈처럼 가져옴
import './App.css';

function App() { //App모듈 = App함수
  return (//App이 리턴하는 태그
      <> 
  <div className="App">
      <header className="App-header">
        <p>Welcome, seryeon!</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
      </>
  );
}

export default App;
