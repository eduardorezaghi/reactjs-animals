import { useState } from 'react'
import bird from './source/bird.svg'
import cat from './source/cat.svg'
import cow from './source/cow.svg'
import dog from './source/dog.svg'
import gator from './source/gator.svg'
import heart from './source/heart.svg'
import horse from './source/horse.svg'
import './AnimalShow.css'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

export default function AnimalShow ({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' src={svgMap[type]} alt="animal" />
            <img className='heart' src={heart}
            alt="heart"
            style={{ width: 10 + 10 * clicks + 'px' }}
             />
        </div>
    )
}
