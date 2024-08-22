import React, { useEffect, useState } from 'react'
import UserData from './components/UserData';
const API = "https://jsonplaceholder.typicode.com/users";
const App = () => {

  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data)
      if (data.length > 0) {
        setUsers(data)
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <div>
      <table class="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead >
          <tr class="bg-gray-100">
            <th class="px-4 py-2 text-gray-600 text-left font-medium">ID</th>
            <th class="px-4 py-2 text-gray-600 text-left font-medium">Name</th>
            <th class="px-4 py-2 text-gray-600 text-left font-medium">Email</th>
            <th class="px-4 py-2 text-gray-600 text-left font-medium">Username</th>
            <th class="px-4 py-2 text-gray-600 text-left font-medium">Address</th>
            <th class="px-4 py-2 text-gray-600 text-left font-medium">Phone</th>
            <th class="px-4 py-2 text-gray-600 text-left font-medium">Website</th>
            <th class="px-4 py-2 text-gray-600 text-left font-medium">Company details</th>
          </tr>
        </thead>
        <tbody>
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
Created By sandeep</h1>

          <UserData users={users} />

        </tbody>
      </table>
    </div>
  )
}

export default App
