import { useState } from 'react'

function StarRating(props) {
    const [count, setCount] = useState(0);

    return (
        <section>
            <div className="flex">            
                {props.starNum.map(link => (
                    <Star 
                        key={link.index}
                        selected={link.index <= count}
                        onClick={() => {setCount(link.index)}}
                    />
                ))}
            </div>

            <h2>{currentStarObj ? currentStarObj.heading : "Please select a rating."}</h2>
        </section>
    );
}

export default StarRating;