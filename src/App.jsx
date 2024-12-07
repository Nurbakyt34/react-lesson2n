import {useState} from 'react'
import Button from "./Button.jsx";
import "./App.css"

const App = () => {
    // let number = 0;
    const [number, setNumber] = useState(0);

    function increment() {
        // number++;
        setNumber(number + 1);
        // setNumber(number - 1);
        // console.log(number);
    }

    function minus() {
        if (number === 0) {
            return;
        }
        setNumber(number - 1);
    }

    const promptFn = () => {
        const num = prompt("Enter your number");
        console.log(Number(num));
        setNumber(Number(num));

    }

    return (
        <div className='container'>
                <h1>Counter App</h1>

                <button className="minus" onClick={minus}>-</button>
                {/*<Button  text={"-"} onClick={minus}/>*/}
                <span className="sp">{number}</span>
                <button className="plus" onClick={increment}>+</button>

                <button className="prt" onClick={promptFn}> prompt</button>


        </div>
    );
};
export default App;