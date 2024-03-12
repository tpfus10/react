import './Hello.css';

function Hello () {
    let n = Math.floor(Math.random()*99) + 1;

    const st1 = {
        backgroundColor: "darkblue",
        color: "white"
    }

    const st2 = {
        color: "red"
    }

    const st3 = {
        color: "blue"
    }

    // let s = '';
    // if (n%2 == 0) s = "짝수";
    // else s= "홀수";

    let x; 

    const currentTime = new Date();

    return(
        <h1>
           <p>
            {currentTime.toLocaleTimeString()}
           </p>
           
           <span style={st1}> Hello </span>
           <span style={{display: "inline-flex", margin: "10px"}}> 
           { n < 10 && "0"} 
           {n}
           {/* { n < 10 ? '0${n}' : {n}} */}
           </span>
           {n%2 === 0 
           ? <span style={st2}>짝수</span> 
           : <span style={st3}>홀수</span>}
           {n%2 === 0 && "🍎"}
           {n%2 === 1 && "🥕"}
           {/* <p>{x || "X는 undefined입니다."}</p> */}

        </h1>
    );
}

export default Hello;