function StarRating(props) {
    return (
        <section>
            <nav>
                <ul className="flex">
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