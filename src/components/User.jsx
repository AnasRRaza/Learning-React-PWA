import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const User = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((res) => {
      res.json().then((result) => {
        setData(result);
      })
    })
  }, []);

  return (
    <div>
      <Table striped bordered hover className="my-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.username}</td>
                <td>{obj.email}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div >
  )
}

export default User;
