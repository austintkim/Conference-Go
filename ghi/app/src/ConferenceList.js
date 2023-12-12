import { useState, useEffect } from 'react';

function ConferenceList() {
    const [conferences, setConferences] = useState([]);

    const getData = async () => {
        const request = await fetch('http://localhost:8000/api/conferences/')
        if (request.ok) {
            const resp = await request.json();
            setConferences(resp.conferences);
        } else {
            console.error("Request Error")
        }
    }

    useEffect(()=> {
        getData();
    }, [])

    const handleDelete = async (id) => {
        const request = await fetch(`http://localhost:8000/api/conferences/${id}`, { method: "DELETE"})
        const resp = await request.json()
        getData();
    }

    return (
        <div>
            <h1>Conferences</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Max Attendees</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        conferences.sort((a,b)=> (a.id - b.id)).map(conference => {
                            console.log(conference);
                            return(<tr key={conference.href}>
                                <td>{conference.id}</td>
                                <td>{conference.name}</td>
                                <td>{conference.max_attendees}</td>
                                <td>{conference.location}</td>
                                <td><button onClick={()=> {
                                    handleDelete(conference.id)
                                }} className="btn btn-danger">Delete</button></td>
                            </tr>);
                        })
                    }
                </tbody>
            </table>
        </div>
    );
  }

  export default ConferenceList;
