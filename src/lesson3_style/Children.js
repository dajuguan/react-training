import { Component } from "react";

export default class Children extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
