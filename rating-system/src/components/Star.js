import { FaStar } from "react-icons/fa";

function Star(props) {
    return (
        <FaStar
            onClick={props.onClick}
            color={props.selected ? "#ffc107" : "#e4e5e9"}
        />
    )
}

export default Star;