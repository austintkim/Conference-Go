import { Fragment } from 'react';
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';

function App(props) {
  return (
    <>
    <Nav />
    <div className="container">
      {/* <LocationForm /> */}
      {/* <AttendeesList attendees = {props.attendees}/> */}
      <ConferenceForm />
    </div>
    </>
  );
}

export default App;
