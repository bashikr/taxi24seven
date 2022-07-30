import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrementByAmount,
    incrementAsync,
    selectAboutValue,
} from "./aboutSlice";

export default function About() {
    const count = useSelector(selectAboutValue);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("1");
    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            {/* <input
                aria-label="Set increment amount"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button onClick={() => dispatch(incrementAsync(incrementValue))}>
                Add Amount
            </button>
            <button onClick={() => dispatch(decrementByAmount(incrementValue))}>
                Remove Amount
            </button>

            <p>Current count: {count}</p> */}
        </div>
    );
}
