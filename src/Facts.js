import React, { PureComponent } from "react";

import Counter from "./Counter";
class Facts extends PureComponent {
  state = {
    facts: [],
    loading: false
  };

  componentDidMount = () => {
    // get initial facts
  };

  handleSubmit = count => {
    console.log(count);
  };

  render() {
    return <Counter handleSubmit={this.handleSubmit} />;
  }
}

export default Facts;
