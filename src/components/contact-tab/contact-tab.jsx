import React from "react";
import configJson from "../../config/config";
import ContactCard from "../contact-card/contact-card";

export function ContactTab(props) {
  const { contactCollection } = props;
  return (
    <React.Fragment>
      <ul className="nav nav-tabs">
        {configJson.tabs.map((item, index) => (
          <li
            className={`fontWeight bdr-div ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <a data-toggle="tab" href={"#" + item}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {Object.keys(contactCollection)
          .sort()
          .map((item, index) => (
            <div
              id={item}
              key={index}
              className={`tab-pane fade in ${index === 0 ? "active" : ""}`}>
              <p className="fontWeight">
                Total contacts: {contactCollection[item].length}
              </p>
              <ContactCard contactValues={contactCollection[item]} />
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}
