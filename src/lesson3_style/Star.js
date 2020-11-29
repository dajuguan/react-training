import { FaStar } from "react-icons/fa";
const Star = ({ selected = false, onClick = (f) => f }) => (
  <FaStar id="star" color={selected ? "red" : "grey"} onClick={onClick} />
);
export default Star;
