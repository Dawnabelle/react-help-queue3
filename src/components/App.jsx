import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import ticket from '../assets/images/ticket.jpg';
import {Switch, Route} from 'react-router-dom';
import NewTicketForm from './NewTicketForm.jsx';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList}/>
        <Route path='/newticket' component={NewTicketForm}/>
      </Switch>
      <img src={ticket}/>
    </div>
  );
}

export default App;
