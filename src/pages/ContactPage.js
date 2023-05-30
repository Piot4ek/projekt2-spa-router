import React from "react";
import "../styles/ContactPage.css";
// import { unstable_useBlocker as useBlocker } from "react-router-dom";

// function Prompt(props) {
//   const block = props.when;

//   useBlocker(() => {
//     if (block) {
//       return !window.confirm(props.message);
//     }
//     return false;
//   });

//   return <div key={block} />;
// }

class ContactPage extends React.Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość"
          ></textarea>
          <button>Wyślij</button>
        </form>
        {/* <Prompt when={this.state.value.length > 0} message="Are you sure" /> */}
      </div>
    );
  }
}
export default ContactPage;
