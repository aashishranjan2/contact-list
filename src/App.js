import React from "react";
import "./App.css";
import { ContactTab } from "./components/contact-tab/contact-tab";
import configJson from "./config/config";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: []
    };
  }

  /**
   * @description invokes getContactList() function after render completion
   */
  componentDidMount() {
    this.getContactList();
  }

  /**
   * @description getContactList()  makes a request call to server and fetches a json response and sends it to sortAndGroupContactList().
   * It also checks for error in case of server response failure
   */
  getContactList() {
    fetch(configJson.userUrl + "/?results=" + configJson.numberCards)
      .then(response => {
        response.json().then(jsonResponse => {
          this.sortAndGroupContactList(jsonResponse);
        });
      })
      .catch(err => err);
  }

  /**
   * @description sortAndGroupContactList(response) takes response and stores all the contact list into a seperate arrays
   * and stores the details in state 'contactList'
   */
  sortAndGroupContactList(response) {
    let groupedContacts = {};
    let jsonResponse = response.results;
    for (let i = 0; i < jsonResponse.length - 1; i++) {
      var firstLetter = jsonResponse[i].name.first.charAt(0);
      if (groupedContacts[firstLetter] === undefined) {
        groupedContacts[firstLetter] = [];
      }
      groupedContacts[firstLetter].push(jsonResponse[i]);
    }
    this.setState({ contactList: groupedContacts });
  }

  render() {
    return (
      <div className="container">
        <h2>{configJson.title}</h2>
        <ContactTab contactCollection={this.state.contactList} />
      </div>
    );
  }
}
