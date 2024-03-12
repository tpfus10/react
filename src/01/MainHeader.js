import logo from '../logo.svg';//이미지도 모듈처럼 가져올 수 있음

function MainHeader() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default MainHeader;