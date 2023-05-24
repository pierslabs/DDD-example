import { User } from './user';

describe('User Test ', () => {
  it('should create User ', () => {
    const newUser = new User(
      'id',
      'name',
      'Email@test.com',
      '123456',
      false,
      'token',
      'avatar',
      ['user'],
      true,
      new Date('2023-05-24'),
      new Date('2023-05-24'),
    );

    expect(newUser).toBeInstanceOf(User);
    expect(newUser).toEqual({
      id: 'id',
      name: 'name',
      email: 'email@test.com',
      password: '123456',
      verifyEmail: false,
      token: 'token',
      avatar: 'avatar',
      role: ['user'],
      isActive: true,
      createdAt: new Date('2023-05-24'),
      updatedAt: new Date('2023-05-24'),
    });
  });
});
