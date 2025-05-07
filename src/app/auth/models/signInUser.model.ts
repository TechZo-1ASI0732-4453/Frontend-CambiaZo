export interface SignInUser {
  id: number;
  username: string;
  name: string;
  phoneNumber: string;
  profilePicture: string;
  isActive: boolean;
  isGoogleAccount: boolean;
  token: string;
}
