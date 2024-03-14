import './App.css';
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
import MyClock from './01_1/MyClock';
import HelloCss from './02/HelloCss';
import { ImHome } from "react-icons/im";

function App() { //App모듈 = App함수
  return (//App이 리턴하는 태그
  <> {/* 프래그먼트 태그 */}
  {/* 프래그먼트 태그 안으로는 jsx문법 사용 */}

  {/* <div className="App">
    <MyClock />
  </div> */}

  <div className='flex flex-col 
                  w-full 
                  max-w-screen-xl
                  mx-auto
                  h-screen
                  overscroll-y-auto
                  '> 
    <header className='flex justify-between items-center
                      h-20 p-10 
                      text-xl font-bold text-white
                      bg-red-300
                      '>
      <div>리액트 실습</div>
      <div><ImHome className='text-2xl text-white'/></div>
    </header>
    <main className='grow'>
      <HelloCss />
    </main>
    <footer className='flex justify-center items-center
                       text-black
                       bg-red-100
                       h-20
                      '>
      ⓒ 2024 LeeSeRyeon.All rights reserved.
    </footer>
  </div>
  </>
  );
}

export default App;
