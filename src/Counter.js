import React, { PureComponent } from "react";
import { labels } from "./constants";

const { DECREMENT, INCREMENT } = labels;

class Counter extends PureComponent {
  state = {
    count: 1
  };

  updateCount = action => {
    const { count } = this.state;
    if (action === INCREMENT && count < 10)
      this.setState(prevState => ({ count: prevState.count + 1 }));
    else if (action === DECREMENT && count > 1)
      this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>
          Give me{" "}
          {count > 1 && (
            <button onClick={() => this.updateCount(DECREMENT)}>-</button>
          )}{" "}
          {count}{" "}
          {count < 10 && (
            <button onClick={() => this.updateCount(INCREMENT)}>+</button>
          )}{" "}
          more cat fact{count > 1 && "s"} right meow!
        </h2>
        <div onClick={() => handleSubmit(count)}>Use Lazer Pointer</div>
      </div>
    );
  }
}

export default Counter;
