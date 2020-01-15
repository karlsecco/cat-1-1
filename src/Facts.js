import React, { PureComponent } from "react";
import axios from "axios";

import Counter from "./Counter";
class Facts extends PureComponent {
  state = {
    facts: [],
    loading: false
  };

  componentDidMount = () => this.getFacts(1);

  getFacts = async numFacts => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://catfact.ninja/facts?limit=${numFacts}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    this.setState({ loading: false });
  };

  handleSubmit = count => this.getFacts(count);

  render() {
    return <Counter handleSubmit={this.handleSubmit} />;
  }
}

export default Facts;
