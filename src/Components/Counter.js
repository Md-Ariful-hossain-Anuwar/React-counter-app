import React, { Fragment, useState } from 'react';

const Counter = () => {
    const[count,setCount]=useState(0);
    // increment handle
    const increment=()=>{
            setCount(count+1);
    }
      // decrement handle
      const decrement=()=>{
        setCount(count-1)
    }
      // reset handle
      const reset=()=>{
        setCount(0)
    }
    return (
        <Fragment>
            <div class="card">
                <h1>{count}</h1>
                <button className='increment' onClick={increment} disabled={count===5}>Increment</button>
                <button className='decrement' onClick={decrement} disabled={count===-5}>Decrement</button>
                <button className='reset' onClick={reset} disabled={count===0}>Reset</button>
            </div>
        </Fragment>
    );
};

export default Counter;