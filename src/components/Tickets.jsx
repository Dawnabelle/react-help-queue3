import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  const ticketInformation =
    <div>
      <style jsx>{`
        div {
          background-color: #9999ff;
        }
        .test {
          font-family: cursive;
        }
        .overwrite:hover {
          color: blue;
        }
      `}</style>
      <h3 className="test">{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <p className="overwrite"><em>{props.issue}</em></p>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={()=>{alert('he, you just clikced the ticket belonging to ' + props.names);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Ticket;
