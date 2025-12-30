import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

const Admin: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <Head>
        <title>Admin</title>
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/admin">Admin</Link>
        </nav>
      </header>
      <main>
        <h1>Admin Dashboard</h1>
        <p>Manage users.</p>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>ID</th>
              <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Name</th>
              <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{user.id}</td>
                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{user.name}</td>
                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default Admin