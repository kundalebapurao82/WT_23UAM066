import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const [rCount, setRcount] = useState(10);

    return (
        <>
            <h2>Count: {count}</h2>
            <h2>Rcount: {rCount}</h2>

            <button onClick={()=> setCount(count + 1)} style={{width: "100px", height: "50px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                Increase
            </button>
            <button onClick={()=> setRcount(rCount - 1)} style={{width: "100px", height: "50px", position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)"}}>
                Decrease
            </button>
        </>
    )
}
export default Counter;