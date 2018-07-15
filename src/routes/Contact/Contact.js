import React, { Component } from "react";
import axios from "../../axios-twilio";
import "./Contact.css";

class Contact extends Component {
  state = {};

  sendText = (phone, name) => {
    let accountSid = "AC4cb715d9b9437c8973e41d21be742c8c";
    let serviceSid = "MGc2a68444a0fdea87b7b39e13432d7b6c";

    axios
      .post(
        `Accounts/${accountSid}/Messages&To=${phone}&MessagingServiceSid=${serviceSid}&Body=Hello ${name}.json`
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <section className="Contact">
        <h2>This is the Contact route</h2>
      </section>
    );
  }
}

export default Contact;
