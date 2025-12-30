const Admin = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Manage your application here.</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td><button>Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admin;