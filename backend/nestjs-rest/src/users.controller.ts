import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
  ];

  @Get()
  getUsers(): User[] {
    return this.users;
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.users.find(u => u.id === +id);
  }

  @Post()
  createUser(@Body() user: Omit<User, 'id'>): User {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: Partial<User>): User {
    const index = this.users.findIndex(u => u.id === +id);
    this.users[index] = { ...this.users[index], ...user };
    return this.users[index];
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    this.users = this.users.filter(u => u.id !== +id);
  }
}