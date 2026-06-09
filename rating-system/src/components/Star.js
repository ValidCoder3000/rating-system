import { FaStar } from "react-icons/fa";

function Star(props) {
    return (
        <FaStar
            onClick={props.onClick}
            color={props.selected ? "yellow" : "white"}
        />
    )
}

export default Star;