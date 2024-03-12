import './App.css';
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
import MyClock from './01_1/MyClock';

function App() { //App모듈 = App함수
  return (//App이 리턴하는 태그
  <> {/* 프래그먼트 태그 */}
  {/* 프래그먼트 태그 안으로는 jsx문법 사용 */}
  <div className="App">
      {/* <MainHeader />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello /> */}
        <MyClock />
  </div>
  </>
  );
}

export default App;
