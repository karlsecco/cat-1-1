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
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>
          Give me{" "}
          {count > 0 && (
            <button onClick={() => this.updateCount("decrement")}>-</button>
          )}{" "}
          {count}{" "}
          {count < 10 && (
            <button onClick={() => this.updateCount("increment")}>+</button>
          )}{" "}
          more cat fact{count > 1 && "s"} right meow!
        </h2>
        <div onClick={() => handleSubmit(count)}>Use Lazer Pointer</div>
      </div>
    );
  }
}

export default Counter;
