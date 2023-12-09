import { Fragment } from 'react';
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendeeForm from './AttendeeForm';

function App(props) {
  return (
    <>
    <Nav />
    <div className="container">
      {/* <LocationForm /> */}
      {/* <AttendeesList attendees = {props.attendees}/> */}
      {/* <ConferenceForm /> */}
      <AttendeeForm />

    </div>
    </>
  );
}

export default App;
