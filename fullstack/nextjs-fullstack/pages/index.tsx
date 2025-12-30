import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/admin">Admin</Link>
        </nav>
      </header>
      <main>
        <h1>Home Page</h1>
        <p>Welcome to the fullstack app.</p>
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
          <h2>Features</h2>
          <ul>
            <li>Navigation</li>
            <li>API Integration</li>
            <li>User Management</li>
          </ul>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default Home