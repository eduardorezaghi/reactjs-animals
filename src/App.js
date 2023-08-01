import AnimalShow from "./AnimalShow";
import { useState } from 'react'
import './App.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

export default function App () {
    let [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    let renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div className="app">
            <button onClick={handleClick}>Add animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}