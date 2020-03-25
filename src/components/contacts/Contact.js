import React, { Component } from "react";
import PropTypes from "prop-types";
import Consumer from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

//require("axios-debug-log");

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // Defining as arrow function allows us to refer to "this" without having
  // to explicitly bind this to the function
  // Could also just inline the arrow function on the "onClick" below
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    dispatch({ type: "DELETE_CONTACT", payload: id }, console.log(res));

    // fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    //   method: "POST",
    //   body: { id: 2 }
    //   //mode: "no-cors"
    // }).then(response =>
    //   dispatch({ type: "DELETE_CONTACT", payload: id }).catch(err =>
    //     console.log(err)
    //   )
    // );
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired
};

export default Contact;
