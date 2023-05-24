export class User {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly verifyEmail: boolean,
    readonly token: string,
    readonly avatar: string,
    readonly role: string[],
    readonly isActive: boolean,
    readonly createdAt: Date,
    readonly updatedAt: Date,
  ) {
    this.email = this.email.toLowerCase();
  }
}
