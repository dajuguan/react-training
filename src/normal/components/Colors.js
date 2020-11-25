import { Component } from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
export default class Color extends Component {
  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;
    return rating !== nextProps.rating;
  }

  componentWillUpdate(nextProps) {
    const { title, rating } = this.props;
    alert(`${title}:rating ${rating} -> ${nextProps.rating}`);
  }

  render() {
    const { title, color, rating, onRemove, onRate } = this.props;
    return (
      <section>
        <h1> {title}</h1>
        <button onClick={onRemove}>
          <FaTrash />
        </button>
        <div style={{ height: 50, background: color }}></div>
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    );
  }
}
