import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

const initialData = {
  name:"",
  room_count:"",
  city:"",
  state:""
}

function LocationForm(props) {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);

  const [formData, setFormData] = useState(initialData);

  const fetchData = async () => {
    const url = 'http://localhost:8000/api/states/';

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setStates(data.states);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    const locationUrl = 'http://localhost:8000/api/locations/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(locationUrl, fetchConfig);

    if (response.ok) {
      navigate("/");
      setFormData(initialData);
    }
  }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new location</h1>
            <form onSubmit={handleSubmit} id="create-location-form">
              <div className="form-floating mb-3">
                <input onChange={handleFormChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={formData.name}/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleFormChange} placeholder="Room count" required type="number" name="room_count" id="room_count" className="form-control" value={formData.room_count}/>
                <label htmlFor="room_count">Room count</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleFormChange} placeholder="City" required type="text" name="city" id="city" className="form-control" value={formData.city}/>
                <label htmlFor="city">City</label>
              </div>
              <div className="mb-3">
                <select onChange={handleFormChange} required name="state" id="state" className="form-select" value={formData.state}>
                  <option value="">Choose a state</option>
                  {states.map(state => {
                    return (
                      <option key={state.abbreviation} value = {state.abbreviation}>
                          {state.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default LocationForm;
