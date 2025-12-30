export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Next.js App Router template.</p>
      <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
        <h2>Features</h2>
        <ul>
          <li>App Router</li>
          <li>TypeScript</li>
          <li>Navigation</li>
        </ul>
      </div>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input id="name" type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}