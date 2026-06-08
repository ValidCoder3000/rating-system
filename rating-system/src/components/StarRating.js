import { useState } from 'react'

function StarRating(props) {
    const [count, setCount] = useState(0);
    
    return (
        <section>
            <nav>
                <ul className="flex">
                    <h2>{props.heading}</h2>
                    {props.starNum.map(link => (
                        <li key={link.index}>
                            <a href={link.index}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}

export default StarRating;