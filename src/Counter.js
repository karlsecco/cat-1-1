import React, { PureComponent } from "react";

class Counter extends PureComponent {
  state = {
    count: 0
  };

  updateCount = action => {
    const { count } = this.state;
    if (action === "increment" && count < 10)
      this.setState(prevState => ({ count: prevState.count + 1 }));
    else if (action === "decrement" && count > 0)
      this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <h2>
        Give me{" "}
        {count > 0 && (
          <span onClick={() => this.updateCount("decrement")}>-</span>
        )}{" "}
        {count}{" "}
        {count < 10 && (
          <span onClick={() => this.updateCount("increment")}>{"+"}</span>
        )}{" "}
        more cat fact{count > 1 && "s"} right meow!
      </h2>
    );
  }
}

export default Counter;
