import React, { PureComponent } from "react";
import axios from "axios";
import idx from "idx";
import uuid from "uuid/v1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import Counter from "./Counter";
import { labels } from "./constants";
import "react-toastify/dist/ReactToastify.min.css";

const { ERROR, SUCCESS, WARN } = labels;

class Facts extends PureComponent {
  state = {
    facts: [],
    loading: false
  };

  componentDidMount = () => this.getFacts(1);

  assignId = data => data.map(item => ({ ...item, id: uuid() }));

  deleteFact = factId => {
    this.setState(prevState => ({
      facts: prevState.facts.filter(fact => fact.id !== factId)
    }));
    this.showToast(WARN, "Cat fact successfully deleted");
  };

  getFacts = async numFacts => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://catfact.ninja/facts?limit=${numFacts}`
      );
      if (idx(response, _ => _.data.data)) {
        this.setState(prevState => ({
          facts: [...prevState.facts, ...this.assignId(response.data.data)]
        }));
        this.showToast(SUCCESS, "Cat facts loaded successfully!");
      }
    } catch (error) {
      this.showToast(ERROR, `Error fetching facts: ${error.message}`);
    }
    this.setState({ loading: false });
  };

  handleSubmit = count => this.getFacts(count);

  showToast = (variant, text) =>
    toast[variant](text, { position: toast.POSITION.BOTTOM_RIGHT });

  renderFacts = () => (
    <ul className="fa-ul">
      {this.state.facts.map(fact => (
        <li
          className="facts__item"
          key={fact.id}
          onClick={() => this.deleteFact(fact.id)}
        >
          <span className="fa-li">
            <FontAwesomeIcon icon={faCat} />
          </span>
          {fact.fact}
        </li>
      ))}
    </ul>
  );

  render() {
    const facts = this.renderFacts();
    return (
      <div>
        <ToastContainer />
        <Counter handleSubmit={this.handleSubmit} />
        {facts}
      </div>
    );
  }
}

export default Facts;
