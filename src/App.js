import './App.css';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
// import MyClock from './01_1/MyClock';
import HelloCss from './02/HelloCss';
import { ImHome } from "react-icons/im";
import MyDiv1 from './03_1/MyDiv1'
import MyList from './04/MyList';
import MyListMain from './04/MyListMain';
import BoxOfficeTb from './05_1/BoxOfficeTb'
import Lotto from './06/Lotto';
import FoodMain from './07/FoodMain';
import MyClock from './08/MyClock2';
import TrafficMain from './09/TrafficMain';
import RefVal from './10/RefVal';
import Refinput from './10/Refinput';
import BoxOffice from './05/BoxOffice';
import GalleryCard from './11/GalleryCard';
import GalleryMain from './11/GalleryMain';
import Festival from './12/Festival';
import RouteMain from './13/RouteMain';
import Frcst from './14/Frcst';
import UltraSrtFcst from './14/UltraSrtFcst';
import VilageFcst from './14/VilageFcst';
import FrcstList from './14/FrcstList';
// import Recoil1 from './15/Recoil1'
import RecoilMain from './15/RecoilMain';

function App() { //App모듈 = App함수

  return (//App이 리턴하는 태그
    <> {/* 프래그먼트 태그 */}
      {/* 프래그먼트 태그 안으로는 jsx문법 사용 */}

      {/* <div className="App">
    <MyClock />
  </div> */}
      <BrowserRouter>
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
            <div>React Practice</div>
            <div className='flex justify-between items-center
                            h-20 p-10'>
              <div className='mx-5 p-2 hover:text-red-500'>
                <Link to="/lotto"> Lotto </Link>
              </div>
              <div className='mx-5 p-2 hover:text-red-500'>
                <Link to="/boxoffice"> Movie </Link>
              </div>
              <div className='mx-5 p-2 hover:text-red-500'>
                <Link to="/traffic"> Traffic </Link>
              </div>
              <div className='mx-5 p-2 hover:text-red-500'>
                <Link to="/festival"> Festival </Link>
              </div>
              <div className='mx-5 p-2 hover:text-red-500'>
                <Link to="/frcst"> Forecast </Link>
              </div>
              <div className='mx-5 p-2 hover:text-red-500'>
                <Link to="/RecoilMain"> RecoilMain </Link>
              </div>
              <Link to="/">
                Home
                {/* <ImHome className='text-2xl text-white hover:text-red-500' /> */}
              </Link>
            </div>
          </header>

          <main className='grow flex flex-col justify-center items-center'>
            <Routes>
              <Route path='/' element={<MyClock />} />
              <Route path='/lotto' element={<Lotto />} />
              <Route path='/boxoffice' element={<BoxOffice />} />
              <Route path='/traffic' element={<TrafficMain />} />
              <Route path='/festival' element={<Festival />} />
              <Route path='/frcst' element={<Frcst />} />
              {/* URL 파라미터
              <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcst />} />
              <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcst />} /> */}
              {/* 쿼리스트링 */}
              <Route path='/FrcstList' element={<FrcstList />} /> 
              <Route path='/RecoilMain' element={<RecoilMain />} /> 
            </Routes>
          </main>

          <footer className='flex justify-center items-center
                       text-black
                       bg-red-100
                       h-20
                       '>
            ⓒ 2024 LeeSeRyeon.All rights reserved.
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
