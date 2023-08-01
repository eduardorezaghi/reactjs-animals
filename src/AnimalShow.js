import bird from './source/bird.svg'
import cat from './source/cat.svg'
import cow from './source/cow.svg'
import dog from './source/dog.svg'
import gator from './source/gator.svg'
import heart from './source/heart.svg'
import horse from './source/horse.svg'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

export default function AnimalShow ({ type }) {
    const [clicks, setClicks] = useState();	

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div onClick={handleClick}>
            <img src={svgMap[type]} alt="animal" />
            <img src={heart}
            alt="heart"
            style={{ width: 10 + 10 * clicks, height: 10 + 10 * clicks, position: 'absolute', top: 10, right: 10 }}
             />
        </div>
    )
}
