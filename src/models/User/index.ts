export interface IUser {
  id: number
  name: string
}
export interface IResponLogin {
  token: string
  user: IUser
}
