import { Fragment } from 'react';
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendeeForm from './AttendeeForm';
import {
  NavLink, Route, Routes, useNavigate
} from "react-router-dom";

function App(props) {
  return (
    <>
    <Nav />
    <div className="container">
      <Routes>
        <Route
          path='/conferences/new'
          element= {<ConferenceForm />}
        ></Route>
        <Route
          path='/attendees/new'
          element= {<AttendeeForm />}
        ></Route>
        <Route
          path='/locations/new'
          element= {<LocationForm />}
        ></Route>
        <Route
          path='/attendees'
          element= {<AttendeesList />}
        ></Route>

      </Routes>
      {/* <LocationForm /> */}
      {/* <AttendeesList attendees = {props.attendees}/> */}
      {/* <ConferenceForm /> */}
      {/* <AttendeeForm /> */}

    </div>
    </>
  );
}

export default App;
