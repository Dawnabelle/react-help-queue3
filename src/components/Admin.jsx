import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList.jsx';
import TicketDetail from './TicketDetail.jsx';
import { connect } from 'react-redux';

function Admin(props) {
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket.length > 0) {
    optionalSelectedTicketContent = <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]} />;
  }
  return(
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList ticketList={props.ticketList} currentRouterPath={props.currentRouterPath} onTicketSelection={props.onTicketSelection}/>
    </div>
  );
}

Admin.propTypes={
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedTicket: state.selectedTicket,
    ticketList: state.masterTicketList
  };
};

export default connect(mapStateToProps)(Admin);
