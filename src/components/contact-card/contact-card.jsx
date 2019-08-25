import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function ContactCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { contactValues } = props;

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {Object.values(contactValues).map((item, index) => (
        <ExpansionPanel
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          key={index}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <div className="card-title">
              {item.name.last}, {item.name.first}
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="card bg-light mb-3">
              <div className="col-sm-4">
                <img src={item.picture.large} alt={item.name.first} />
              </div>
              <div className=" col-sm-4 card-body">
                <table>
                  <tbody>
                    <tr>
                      <td>e-mail </td>
                      <td>{item.email}</td>
                    </tr>
                    <tr>
                      <td>phone </td>
                      <td>{item.phone}</td>
                    </tr>
                    <tr>
                      <td>street </td>
                      <td>{item.location.street}</td>
                    </tr>
                    <tr>
                      <td>city </td>
                      <td>{item.location.city}</td>
                    </tr>
                    <tr>
                      <td>state </td>
                      <td>{item.location.state}</td>
                    </tr>
                    <tr>
                      <td>postcode </td>
                      <td> {item.location.postcode}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
