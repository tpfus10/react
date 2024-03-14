import logo from '../logo.svg';
import './HelloCss.css';
import './HelloWhite'
import HelloWhite from './HelloWhite';
import HelloYellow from './HelloYellow';
import { FaChevronRight } from "react-icons/fa6";



export default function HelloCss() {

    const apikey = process.env.REACT_APP_MV_API;
    console.log(apikey);

    return (
        <div className='hellomain'>
            <p>
                <img src={logo} className="App-logo" alt="logo" />
            </p>
            <div className='flex justify-center items-center'>
            <FaChevronRight className='text-red-500'/> 
            <p className='text-red-500 font-bold'>MOVIE</p>
            </div>
            <div className='flex justify-center items-center'>
            <FaChevronRight className='text-red-500'/> 
            <p className='text-red-500 font-bold'>CINEMA</p>
            </div>
            <div className='flex justify-center items-center'>
            <FaChevronRight className='text-red-500'/> 
            <p className='text-red-500 font-bold'>POPCORN</p>
            </div>
        </div>
    );
}
