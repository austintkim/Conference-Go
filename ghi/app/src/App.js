import { Fragment } from 'react';
import Nav from './Nav';
import MainPage from './MainPage';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import ConferenceList from './ConferenceList';
import AttendeeForm from './AttendeeForm';
import PresentationForm from './PresentationForm';
import {
  Route, Routes
} from "react-router-dom";

function App() {
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
          path='/conferences'
          element= {<ConferenceList />}
        ></Route>
        <Route
          path='/conferences/new'
          element= {<ConferenceForm />}
        ></Route>
        <Route
          path='/attendees'
          element= {<AttendeesList />}
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
          path='/presentations/new'
          element= {<PresentationForm />}
        ></Route>
      </Routes>

    </div>
    </>
  );
}

export default App;
