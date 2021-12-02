import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const User = () => {

  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((res) => {
      res.json().then((result) => {
        setData(result);
        localStorage.setItem("users", JSON.stringify(result));
      })
    }).catch(() => {
      const collection = localStorage.getItem("users");
      setData(JSON.parse(collection));
      setMode("offline");
      // alert("Catch Block");
    })
  }, []);

  return (
    <div>
      {
        mode === "offline" ?
          <div className="alert alert-warning text-center" role="alert">
            you are in offline mode or some issue with your connection
          </div> : null
      }
      <Table striped bordered hover className="my-3 text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            {/* <th>Email</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.username}</td>
                {/* <td>{obj.email}</td> */}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div >
  )
}

export default User;
