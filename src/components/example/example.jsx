import React from 'react';


// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
export class Example extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        items: [{ Name: "Carl" },{ Name: "Anders" },{ Name: "Anton" },{ Name: "Brian" },{ Name: "Bernard" },{ Name: "Angelaa" }]
      }
    }
    
    render() {
       
      return (
        <React.Fragment>
        <button class="tablink" onclick="openPage('Home', this, 'red')">Home</button>
        <button class="tablink" onclick="openPage('News', this, 'green')" id="defaultOpen">News</button>
        <button class="tablink" onclick="openPage('Contact', this, 'blue')">Contact</button>
        <button class="tablink" onclick="openPage('About', this, 'orange')">About</button>
        
        <div id="Home" class="tabcontent">
          <h3>Home</h3>
          <p>Home is where the heart is..</p>
        </div>
        
        <div id="News" class="tabcontent">
          <h3>News</h3>
          <p>Some news this fine day!</p> 
        </div>
        
        <div id="Contact" class="tabcontent">
          <h3>Contact</h3>
          <p>Get in touch, or swing by for a cup of coffee.</p>
        </div>
        
        <div id="About" class="tabcontent">
          <h3>About</h3>
          <p>Who we are and what we do.</p>
        </div>
        </React.Fragment>
      );
      }
    }