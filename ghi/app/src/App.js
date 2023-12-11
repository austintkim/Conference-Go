import { Fragment } from 'react';
import Nav from './Nav';
import MainPage from './MainPage';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendeeForm from './AttendeeForm';
import PresentationForm from './PresentationForm';
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
          path='/'
          element = {<MainPage /> }
        ></Route>
        <Route
          path='/attendees'
          element= {<AttendeesList attendees= {props.attendees} />}
        ></Route>
          <Route
            path='/locations/new'
            element= {<LocationForm />}
          ></Route>
        <Route
          path='/conferences/new'
          element= {<ConferenceForm />}
        ></Route>
        <Route
          path='/attendees/new'
          element= {<AttendeeForm />}
        ></Route>
        <Route
          path='/presentations/new'
          element= {<PresentationForm />}
        ></Route>
      </Routes>

    </div>
    </>
  );
}

export default App;
