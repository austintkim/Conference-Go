import {useState, useEffect} from 'react';

function AttendeesList() {
  const [attendees, setAttendees] = useState([]);

  const getData = async () => {
    const request = await fetch('http://localhost:8001/api/attendees/');
    if (request.ok) {
      const resp = await request.json();
      setAttendees(resp.attendees);
    } else {
      console.error("Request Error");
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const handleDelete = async (id) => {
    const request = await fetch(`http://localhost:8001/api/attendees/${id}`, { method: "DELETE"});
    const resp = await request.json();
    getData();
  }

  return(
    <div>
      <h1>Attendees</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Conference</th>
          </tr>
        </thead>
        <tbody>
          {
            attendees.sort((a,b) => (a.id-b.id)).map(attendee => {
              console.log(attendees)
              return(<tr key={attendee.href}>
                <td>{attendee.id}</td>
                <td>{attendee.name}</td>
                <td>{attendee.email}</td>
                <td>{attendee.conference}</td>
                <td><button onClick={()=> {
                    handleDelete(attendee.id)
                }} className="btn btn-danger">Delete</button></td>
              </tr>)
            })
          }
            {/* {props.attendees && props.attendees.map(attendee => {
              return (
                <tr key={attendee.href}>
                  <td>{ attendee.name }</td>
                  <td>{ attendee.conference }</td>
                </tr>
              )
            })} */}
        </tbody>
      </table>
    </div>
    );
}

export default AttendeesList;
