import { useState } from "react"
function Counter(){
    const [count ,setCount] = useState(0)
    const increase_count = ()=>{
        setCount(count+1)
    }
    const decrease_count = ()=>{
        setCount(count-1)
    }
    const reset_count = ()=>{
        setCount(0)
    }

    return(
        <div className="container">
            <p className="count">{count}</p>
            <button className="button" onClick={increase_count} >Increase</button>
            <button className="button" onClick={reset_count}>Reset</button>
            <button className="button" onClick={decrease_count}>Decrease</button>
        </div>
        )
}

export default Counter