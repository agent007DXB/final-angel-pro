// pages/admin.js
"use client"

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUsers(data);
      console.log(data, "users")
    }
    
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users && users?.map(user => (
            <tr key={user._id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
