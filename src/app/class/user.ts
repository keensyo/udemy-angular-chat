export class User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
  initial: string;

  constructor(user: User | firebase.default.User) {
    this.uid = user.uid;
    this.displayName = user.displayName;
    this.email = user.email;
    this.photoURL = user.photoURL;
    this.initial = user.displayName!.slice(0, 1);
  }
}
