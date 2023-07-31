import AnimalShow from "./AnimalShow";
import { useState } from 'react'

export default function App () {
    let [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => {
                setCount(++count)
            }}>
                Add animal
            </button>
            <div>Number of animals: {count}</div>
        </div>
    );
}