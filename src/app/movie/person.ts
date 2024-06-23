export class Person {
  id = 0;
  name = '';
  profile_path = '';

  get profile() {
    return `/api/${this.profile_path}`;
  }
}
