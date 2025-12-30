const fastify = require('fastify')({ logger: true });

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' }
];

// Health endpoint
fastify.get('/health', async (request, reply) => {
  return { status: 'OK' };
});

// CRUD for users
fastify.get('/users', async (request, reply) => {
  return users;
});

fastify.get('/users/:id', async (request, reply) => {
  const user = users.find(u => u.id === parseInt(request.params.id));
  if (user) {
    return user;
  } else {
    reply.code(404).send({ message: 'User not found' });
  }
});

fastify.post('/users', async (request, reply) => {
  const { name, email } = request.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  reply.code(201).send(newUser);
});

fastify.put('/users/:id', async (request, reply) => {
  const user = users.find(u => u.id === parseInt(request.params.id));
  if (user) {
    Object.assign(user, request.body);
    return user;
  } else {
    reply.code(404).send({ message: 'User not found' });
  }
});

fastify.delete('/users/:id', async (request, reply) => {
  const index = users.findIndex(u => u.id === parseInt(request.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    reply.code(204).send();
  } else {
    reply.code(404).send({ message: 'User not found' });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();