import logo from './logo512.png'

function MyClockImage () {
    return(
        <header className="MyClockImage w-full flex justify-center">
            <img src={logo} alt="logo" className='w-96' />
        </header>
    );
}

export default MyClockImage;