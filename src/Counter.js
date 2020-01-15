import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusSquare,
  faPlusSquare
} from "@fortawesome/free-regular-svg-icons";
import { labels } from "./constants";
import "./App.css";

const { DECREMENT, ENTER, INCREMENT, OUT } = labels;

class Counter extends PureComponent {
  state = {
    count: 1,
    submitText: "Use Lazer Pointer"
  };

  changeSubmitText = action => {
    if (action === ENTER) this.setState({ submitText: "Destory Human?" });
    else if (action === OUT) this.setState({ submitText: "Use Lazer Pointer" });
  };

  updateCount = action => {
    const { count } = this.state;
    if (action === INCREMENT && count < 10)
      this.setState(prevState => ({ count: prevState.count + 1 }));
    else if (action === DECREMENT && count > 1)
      this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count, submitText } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div className="counter__container">
        <h2>
          Give me{" "}
          {count > 1 && (
            <FontAwesomeIcon
              className="counter__action-button"
              icon={faMinusSquare}
              onClick={() => this.updateCount(DECREMENT)}
            />
          )}{" "}
          {count}{" "}
          {count < 10 && (
            <FontAwesomeIcon
              className="counter__action-button"
              icon={faPlusSquare}
              onClick={() => this.updateCount(INCREMENT)}
            />
          )}{" "}
          more cat fact{count > 1 && "s"} right meow!
        </h2>
        <h3
          className="counter__submit-button"
          onMouseEnter={() => this.changeSubmitText(ENTER)}
          onMouseOut={() => this.changeSubmitText(OUT)}
          onClick={() => handleSubmit(count)}
        >
          {submitText}
        </h3>
      </div>
    );
  }
}

export default Counter;
