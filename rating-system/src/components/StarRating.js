import { useState } from 'react'

function StarRating(props) {
    const [count, setCount] = useState(0);

    return (
        <section>
            <nav>
                <ul className="flex">
                    {props.starNum.map(link => (
                        <li key={link.index}>
                            <a href={link.index}>{link.name}</a>
                            <h2>{link.heading}</h2>
                        </li>  
                    ))}
                </ul>
            </nav>
        </section>
    );
}

export default StarRating;