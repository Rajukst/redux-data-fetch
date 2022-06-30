import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deccrement, decreseAmount, increment, increseAmount, reset } from './counterSlice';
const CounterView = () => {
    const count = useSelector((state)=>state.counter.count);
    const dispatch= useDispatch()
    return (
        <div>
            <h1>This is Counter</h1>
            <h2>Count Value: {count}</h2>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(deccrement())}>Decrement</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <button onClick={()=>dispatch(increseAmount(5))}>IncreseBy5</button>
            <button onClick={()=>dispatch(decreseAmount(5))}>DecreseBy5</button>
        </div>
    );
};

export default CounterView;