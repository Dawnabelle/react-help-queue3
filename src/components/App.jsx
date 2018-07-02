import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import ticket from '../assets/images/ticket.jpg';

function App(){
  return (
    <div>
      <Header/>
      <TicketList />
      <MyStyledComponent/>
      <img src={ticket}/>
    </div>
  );
}

export default App;
