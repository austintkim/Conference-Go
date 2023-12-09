import React, { useEffect, useState } from 'react';

function AttendeeForm(props) {
    const [conferences, setConferences] = useState([]);

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [companyName, setCompanyName] = useState('');

    const [conference, setConference] = useState('');


    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
      }

      const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
      }

      const handleCompanyNameChange = (event) => {
        const value = event.target.value;
        setCompanyName(value);
      }

      const handleConferenceChange = (event) => {
        const value = event.target.value;
        setConference(value);
      }

      const handleSubmit = async (event) => {
        event.preventDefault();
            //create an empty JSON object
        const data = {};
        data.name = name;
        data.email = email;
        data.company_name = companyName;
        data.conference = `/api/conferences/${conference}/`;
        console.log(data);






        const attendeeUrl = 'http://localhost:8001/api/attendees/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(attendeeUrl, fetchConfig);
        if (response.ok) {
            const newAttendee = await response.json();
            console.log(newAttendee);

        setName('');
        setEmail('');
        setCompanyName('');
        setConference('');
        }
    }


    const fetchData = async () => {
        const url = 'http://localhost:8000/api/conferences/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setConferences(data.conferences);
        }
    }

    useEffect(() => {
        fetchData();
      }, []);

    return(
        <div className="container">
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add a new attendee</h1>
                <form onSubmit={handleSubmit} id="create-attendee-form">
                <div className="form-floating mb-3">
                    <input onChange={handleNameChange} placeholder="Name" required type="text" name = "name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleEmailChange} placeholder="Email" required type="email" name = "email" id="email" className="form-control"/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleCompanyNameChange} placeholder="Ends" type="text" name = "company_name" id="company_name" className="form-control"/>
                    <label htmlFor="company_name">Company Name</label>
                </div>
                <div className="mb-3">
                    <select onChange={handleConferenceChange} required name = "conference" id="conference" className="form-select" value={conference}>
                    <option value="">Choose a conference</option>
                    {conferences.map(conference => {
                        return(
                            <option key={conference.id} value={conference.id}>
                                {conference.name}
                            </option>
                        )
                    })}
                    </select>
                </div>
                <button className="btn btn-primary">Add</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
}

export default AttendeeForm;
