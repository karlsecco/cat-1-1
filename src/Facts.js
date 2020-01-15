import React, { PureComponent } from "react";
import axios from "axios";
import idx from "idx";

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
      // ensure non-null value
      if (idx(response, _ => _.data.data))
        this.setState(prevState => ({
          facts: [...prevState.facts, ...response.data.data]
        }));
    } catch (error) {
      console.log(error);
    }
    this.setState({ loading: false });
  };

  handleSubmit = count => this.getFacts(count);

  renderFacts = () =>
    this.state.facts.map(fact => (
      <ul>
        <li>{fact.fact}</li>
      </ul>
    ));

  render() {
    const facts = this.renderFacts();
    return (
      <div>
        <Counter handleSubmit={this.handleSubmit} />
        {facts}
      </div>
    );
  }
}

export default Facts;
