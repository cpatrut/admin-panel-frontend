export class User {

  constructor(private email: string, private nickname: string, private firstName: string, private lastName: string,
              private password: string, private creationDate: string, private type: string, private state: string, private isAccountNonExpired: boolean,
              private isAccountNonLocked: boolean, private isCredentialsNonExpired: boolean, private isEnabled) {
  }
}
