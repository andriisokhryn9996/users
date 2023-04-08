export interface UserInterface {
  cell: string
  dob: {
    date: string,
    age: number }
  email: string
  gender: string
  id: {
    name: string,
    value: string }
  location: {
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: any,
    street: any,
    timezone: any
  }
  login: {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha256: string,
    sha1: string
  }
  name: {
    title: string,
    first: string,
    last: string }
  nat: string
  phone: string
  picture: {
    large: string,
    medium: string,
    thumbnail: string }
  registered: {
    date: string,
    age: number }
}
