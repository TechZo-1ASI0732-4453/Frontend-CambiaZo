export class SignUpUserDto {
  username: string;
  password: string;
  name: string;
  phoneNumber: string;
  profilePicture: string;
  isGoogleAccount: boolean;
  roles: string[];

  constructor({
    username='',
    password='',
    name='',
    phoneNumber='',
    profilePicture='',
    isGoogleAccount=false,
    roles=['ROLE_USER']
  }){
    this.username = username;
    this.password = password;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.profilePicture = profilePicture;
    this.isGoogleAccount = isGoogleAccount;
    this.roles = roles;
  }
}
