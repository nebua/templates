export default function Admin() {
  return (
    <div>
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
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>1</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>John Doe</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>john@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}