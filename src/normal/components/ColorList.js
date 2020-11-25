import { Component } from "react";
import Colors from "./Colors";
export default class ColorList extends Component {
  render() {
    const { colors, onRate, onRemove } = this.props;
    return (
      <div>
        {colors.length === 0 ? (
          <p>No Colors Listed. (Add a Color)</p>
        ) : (
          colors.map((c) => (
            <Colors
              key={c.id}
              {...c}
              onRate={(rating) => onRate(c.id, rating)}
              onRemove={() => onRemove(c.id)}
            />
          ))
        )}
      </div>
    );
  }
}
